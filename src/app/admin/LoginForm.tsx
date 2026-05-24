"use client";
import { useState } from "react";

export function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl2 bg-white p-8 shadow-card">
        <h1 className="mb-1 text-2xl font-bold text-deep">Bachitours Admin</h1>
        <p className="mb-6 text-sm text-muted">Bitte Passwort eingeben.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
          autoFocus
          className="mb-3 block w-full rounded-xl border border-line bg-white px-4 py-3 text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {error && <p className="mb-3 text-sm text-red-600">Falsches Passwort.</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full rounded-full bg-deep px-6 py-3 font-medium text-white hover:bg-primary disabled:opacity-60"
        >
          {loading ? "..." : "Anmelden"}
        </button>
      </form>
    </div>
  );
}
