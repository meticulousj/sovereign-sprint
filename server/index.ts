import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory storage for waitlist (replace with database in production)
const waitlist = new Set<string>();

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Waitlist API endpoint
  app.post("/api/waitlist", (req, res) => {
    const { email, name } = req.body;

    // Validate input
    if (!email || !name) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Check if already on waitlist
    if (waitlist.has(email.toLowerCase())) {
      return res.status(409).json({ message: "Email already on waitlist" });
    }

    // Add to waitlist
    waitlist.add(email.toLowerCase());

    // Log to console (in production, send to email service, database, etc.)
    console.log(`[WAITLIST] ${name} (${email}) joined at ${new Date().toISOString()}`);

    res.json({ message: "Successfully joined waitlist", email });
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
  });
}

startServer().catch(console.error);
