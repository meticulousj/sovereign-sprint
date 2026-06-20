import { useState, useEffect } from "react";
import { LogOut, Download, Eye, EyeOff, Loader2 } from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Invalid password");
      }

      setIsAuthenticated(true);
      setPassword("");
      await fetchSubscribers();
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/subscribers");

      if (!response.ok) {
        throw new Error("Failed to fetch subscribers");
      }

      const data = await response.json();
      setSubscribers(data.subscribers || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSubscribers([]);
    setPassword("");
  };

  const handleExportCSV = () => {
    if (subscribers.length === 0) {
      alert("No subscribers to export");
      return;
    }

    // Create CSV content
    const headers = ["Name", "Email", "Joined Date"];
    const rows = subscribers.map((sub) => [
      `"${sub.name.replace(/"/g, '""')}"`,
      `"${sub.email}"`,
      new Date(sub.created_at).toLocaleDateString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");

    // Create blob and download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sovereign-sprint-waitlist-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper p-4">
        <div className="w-full max-w-md border-2 border-ink bg-paper p-8">
          <h1 className="font-display text-2xl font-bold text-ink mb-2">Admin Access</h1>
          <p className="font-label text-xs uppercase tracking-[0.13em] text-ink/60 mb-8">
            Sovereign Sprint Waitlist
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block font-label text-xs uppercase tracking-[0.16em] text-ink/72 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  placeholder="Enter password"
                  className="w-full border-2 border-ink bg-paper px-4 py-3 font-serif text-base text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-brass/35 disabled:opacity-60"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/60 hover:text-ink"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="border-2 border-destructive bg-destructive/8 p-3 text-sm text-destructive">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full border-2 border-ink bg-brass px-6 py-3 font-label text-sm uppercase tracking-[0.18em] text-paper shadow-[5px_5px_0_#161310] transition duration-200 hover:enabled:-translate-y-1 hover:enabled:shadow-[7px_7px_0_#161310] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="inline h-4 w-4 animate-spin mr-2" />
                  Verifying...
                </>
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          <p className="text-center font-serif text-xs italic text-ink/58 mt-6">
            Password required for security
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-ink">
          <div>
            <h1 className="font-display text-3xl font-bold text-ink">Waitlist Dashboard</h1>
            <p className="font-label text-xs uppercase tracking-[0.13em] text-ink/60 mt-2">
              {subscribers.length} Subscriber{subscribers.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border-2 border-ink px-4 py-2 font-label text-xs uppercase tracking-[0.13em] text-ink hover:bg-ink/5 transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={handleExportCSV}
            disabled={loading || subscribers.length === 0}
            className="flex items-center gap-2 border-2 border-brass bg-brass/12 px-6 py-3 font-label text-sm uppercase tracking-[0.18em] text-brass shadow-[5px_5px_0_#b08b43] transition duration-200 hover:enabled:-translate-y-1 hover:enabled:shadow-[7px_7px_0_#b08b43] disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button
            onClick={fetchSubscribers}
            disabled={loading}
            className="flex items-center gap-2 border-2 border-ink px-6 py-3 font-label text-sm uppercase tracking-[0.18em] text-ink hover:bg-ink/5 transition disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Refreshing...
              </>
            ) : (
              "Refresh"
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 border-2 border-destructive bg-destructive/8 p-4 text-destructive">
            {error}
          </div>
        )}

        {/* Subscribers Table */}
        <div className="border-2 border-ink overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-ink" />
            </div>
          ) : subscribers.length === 0 ? (
            <div className="p-8 text-center">
              <p className="font-serif text-ink/60">No subscribers yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink bg-ink/5">
                    <th className="px-6 py-4 text-left font-label text-xs uppercase tracking-[0.13em] text-ink">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left font-label text-xs uppercase tracking-[0.13em] text-ink">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left font-label text-xs uppercase tracking-[0.13em] text-ink">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((sub, idx) => (
                    <tr
                      key={sub.id}
                      className={`border-b border-ink/20 ${idx % 2 === 0 ? "bg-paper" : "bg-ink/2"}`}
                    >
                      <td className="px-6 py-4 font-serif text-sm text-ink">{sub.name}</td>
                      <td className="px-6 py-4 font-serif text-sm text-ink break-all">{sub.email}</td>
                      <td className="px-6 py-4 font-serif text-sm text-ink/60">
                        {new Date(sub.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
