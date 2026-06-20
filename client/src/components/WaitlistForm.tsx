import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { supabase, addToWaitlist } from "@/lib/supabase";

/**
 * Design Philosophy Reminder — Neo-Brutalist Editorial Monasticism:
 * Form styling must match the dossier aesthetic: hard borders, oxblood accents,
 * stamped labels, tactile shadows, and restrained feedback states.
 */

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      if (supabase) {
        // Use Supabase if configured
        await addToWaitlist(email, name);
      } else {
        // Fallback to backend API if Supabase not configured
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Failed to join waitlist");
        }
      }

      setStatus("success");
      setEmail("");
      setName("");
      onSuccess?.();

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm border-2 border-oxblood bg-oxblood/8 p-6 text-center">
        <CheckCircle2 className="h-8 w-8 text-oxblood" />
        <div>
          <p className="font-label text-sm uppercase tracking-[0.16em] text-oxblood">You're on the list</p>
          <p className="mt-2 text-base leading-6 text-ink">We'll send the launch details to your inbox when we're ready.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block font-label text-xs uppercase tracking-[0.16em] text-ink/72 mb-2">
          Your name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g., Alex Chen"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
          className="w-full border-2 border-ink bg-paper px-4 py-3 font-serif text-base text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-brass/35 disabled:opacity-60"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-label text-xs uppercase tracking-[0.16em] text-ink/72 mb-2">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full border-2 border-ink bg-paper px-4 py-3 font-serif text-base text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-brass/35 disabled:opacity-60"
          required
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-sm border-2 border-destructive bg-destructive/8 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-3 border-2 border-ink bg-oxblood px-6 py-5 font-label text-sm uppercase tracking-[0.18em] text-paper shadow-[7px_7px_0_#161310] transition duration-200 hover:enabled:-translate-y-1 hover:enabled:shadow-[10px_10px_0_#161310] disabled:opacity-70 focus:outline-none focus:ring-4 focus:ring-brass/35"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            Join the waitlist
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center font-serif text-xs italic text-ink/58">
        No spam. Just launch details and early-bird access when ready.
      </p>
    </form>
  );
}
