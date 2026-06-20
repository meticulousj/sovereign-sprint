import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory storage for waitlist (fallback if Supabase not configured)
const memoryWaitlist = new Map<string, { name: string; created_at: string }>();

// Initialize Supabase if credentials are provided
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.warn(
    "[WARNING] Supabase not configured. Waitlist will use in-memory storage (data will be lost on restart). " +
    "Set SUPABASE_URL and SUPABASE_ANON_KEY environment variables to enable persistent storage."
  );
}

// Admin password (use environment variable in production)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Admin verification endpoint
  app.post("/api/admin/verify", (req, res) => {
    const { password } = req.body;

    if (!password || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.json({ message: "Authenticated" });
  });

  // Get all subscribers
  app.get("/api/admin/subscribers", (req, res) => {
    if (supabase) {
      // TODO: Fetch from Supabase when configured
      return res.json({ subscribers: [] });
    }

    // Return in-memory waitlist as array
    const subscribers = Array.from(memoryWaitlist.entries()).map(([email, data], idx) => ({
      id: `${idx}`,
      email,
      name: data.name,
      created_at: data.created_at,
    }));

    return res.json({ subscribers });
  });

  // Waitlist API endpoint
  app.post("/api/waitlist", async (req, res) => {
    const { email, name } = req.body;

    // Validate input
    if (!email || !name) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const normalizedEmail = email.toLowerCase();

    try {
      if (supabase) {
        // Use Supabase for persistent storage
        const { data, error } = await supabase
          .from("waitlist")
          .insert([{ email: normalizedEmail, name }])
          .select();

        if (error) {
          if (error.code === "23505") {
            // Unique constraint violation
            return res.status(409).json({ message: "Email already on waitlist" });
          }
          console.error("[SUPABASE ERROR]", error);
          return res.status(500).json({ message: "Failed to add to waitlist" });
        }

        console.log(`[WAITLIST] ${name} (${normalizedEmail}) joined at ${new Date().toISOString()}`);
        return res.json({ message: "Successfully joined waitlist", email: normalizedEmail });
      } else {
        // Fallback to in-memory storage with name tracking
        if (memoryWaitlist.has(normalizedEmail)) {
          return res.status(409).json({ message: "Email already on waitlist" });
        }

        memoryWaitlist.set(normalizedEmail, {
          name,
          created_at: new Date().toISOString(),
        });

        console.log(`[WAITLIST] ${name} (${normalizedEmail}) joined at ${new Date().toISOString()}`);
        console.log(`[INFO] Total waitlist entries (in-memory): ${memoryWaitlist.size}`);

        return res.json({ message: "Successfully joined waitlist", email: normalizedEmail });
      }
    } catch (error) {
      console.error("[API ERROR]", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      supabase: supabase ? "connected" : "not configured",
      timestamp: new Date().toISOString(),
    });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`Supabase status: ${supabase ? "configured" : "not configured (using in-memory storage)"}`);
    console.log(`Admin password: ${ADMIN_PASSWORD === "admin123" ? "DEFAULT (change via ADMIN_PASSWORD env var)" : "custom"}`);
  });
}

startServer().catch(console.error);
