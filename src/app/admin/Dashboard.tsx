"use client";
import { useState, useEffect, useCallback } from "react";
import type { BookingRecord } from "@/lib/db";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" });
}

export function Dashboard({ initial }: { initial: BookingRecord[] }) {
  const [bookings, setBookings] = useState(initial);
  const [busyRef, setBusyRef] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "unpaid" | "paid" | "cancelled">("all");
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/admin/bookings", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.bookings)) setBookings(data.bookings);
      }
    } catch {
      // ignore network blips, next poll will retry
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const id = setInterval(refresh, 30000);
    return () => clearInterval(id);
  }, [refresh]);

  const unpaid = bookings.filter((b) => !b.paid && !b.cancelled).length;
  const paid = bookings.filter((b) => b.paid).length;
  const cancelled = bookings.filter((b) => b.cancelled).length;
  const shown = bookings.filter((b) =>
    filter === "all" ? true
    : filter === "unpaid" ? !b.paid && !b.cancelled
    : filter === "paid" ? b.paid
    : b.cancelled
  );

  async function markPaid(ref: string) {
    if (!confirm(`Buchung ${ref} als BEZAHLT markieren? Der Kunde bekommt automatisch das Ticket per E-Mail.`)) return;
    setBusyRef(ref);
    setNote(null);
    try {
      const res = await fetch("/api/admin/mark-paid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ref }),
      });
      const data = await res.json();
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.ref === ref ? { ...b, paid: true, paid_at: new Date().toISOString() } : b))
        );
        setNote(data.ticketSent ? `Ticket für ${ref} wurde per E-Mail verschickt.` : `${ref} als bezahlt markiert, aber Ticket-E-Mail fehlgeschlagen (Logs prüfen).`);
      } else {
        setNote(`Fehler bei ${ref}: ${data.error || "unbekannt"}`);
      }
    } catch {
      setNote(`Netzwerkfehler bei ${ref}.`);
    } finally {
      setBusyRef(null);
    }
  }

  async function cancelBooking(ref: string) {
    if (!confirm(`Buchung ${ref} stornieren? Das kann nicht rückgängig gemacht werden.`)) return;
    setBusyRef(ref);
    setNote(null);
    try {
      const res = await fetch("/api/admin/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ref }),
      });
      const data = await res.json();
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.ref === ref ? { ...b, cancelled: true, cancelled_at: new Date().toISOString() } : b))
        );
        setNote(`Buchung ${ref} wurde storniert.`);
      } else {
        setNote(`Fehler bei ${ref}: ${data.error || "unbekannt"}`);
      }
    } catch {
      setNote(`Netzwerkfehler bei ${ref}.`);
    } finally {
      setBusyRef(null);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-cream p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-deep">Buchungen</h1>
            <p className="text-sm text-muted">{bookings.length} gesamt · {unpaid} offen</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              disabled={refreshing}
              className="rounded-full bg-deep px-4 py-2 text-sm font-medium text-white hover:bg-primary disabled:opacity-60"
            >
              {refreshing ? "Lädt…" : "Aktualisieren"}
            </button>
            <button onClick={logout} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-deep hover:bg-white/70">
              Abmelden
            </button>
          </div>
        </div>

        {note && (
          <div className="mb-4 rounded-xl border border-line bg-white px-4 py-3 text-sm text-deep">{note}</div>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {([
            ["all", `Alle (${bookings.length})`],
            ["unpaid", `Offen (${unpaid})`],
            ["paid", `Bezahlt (${paid})`],
            ["cancelled", `Storniert (${cancelled})`],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === key ? "bg-deep text-white" : "border border-line bg-white text-deep hover:bg-white/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="rounded-xl2 bg-white p-8 text-center text-muted shadow-card">
            {bookings.length === 0 ? "Noch keine Buchungen." : "Keine Buchungen in dieser Ansicht."}
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl2 bg-white shadow-card">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="border-b border-line text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3">Ref</th>
                  <th className="px-4 py-3">Eingang</th>
                  <th className="px-4 py-3">Tour</th>
                  <th className="px-4 py-3">Datum</th>
                  <th className="px-4 py-3">Kunde</th>
                  <th className="px-4 py-3">Kontakt</th>
                  <th className="px-4 py-3">Pers.</th>
                  <th className="px-4 py-3">Preis</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {shown.map((b) => (
                  <tr key={b.ref} className="border-b border-line/60 align-top">
                    <td className="px-4 py-3 font-mono text-xs">{b.ref}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-xs text-muted">{formatDate(b.created_at)}</td>
                    <td className="px-4 py-3">{b.tour_title}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{b.date}{b.time ? `, ${b.time}` : ""}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{b.first_name} {b.last_name}</td>
                    <td className="px-4 py-3 text-xs">
                      <a href={`https://wa.me/${b.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">{b.phone}</a>
                      <a href={`mailto:${b.email}`} className="block text-muted hover:underline">{b.email}</a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-xs">{b.adults}+{b.kids}+{b.infants}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{b.total_estimate > 0 ? `${b.total_estimate} €` : "—"}</td>
                    <td className="px-4 py-3">
                      {b.cancelled ? (
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">STORNIERT</span>
                      ) : b.paid ? (
                        <span className="rounded-full bg-success/15 px-2 py-1 text-xs font-semibold text-success">BEZAHLT</span>
                      ) : (
                        <span className="rounded-full bg-sun/15 px-2 py-1 text-xs font-semibold text-sun">offen</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {!b.paid && !b.cancelled && (
                        <div className="flex flex-col gap-1.5">
                          <button
                            onClick={() => markPaid(b.ref)}
                            disabled={busyRef === b.ref}
                            className="whitespace-nowrap rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-white hover:brightness-105 disabled:opacity-60"
                          >
                            {busyRef === b.ref ? "..." : "Bezahlt → Ticket"}
                          </button>
                          <button
                            onClick={() => cancelBooking(b.ref)}
                            disabled={busyRef === b.ref}
                            className="whitespace-nowrap rounded-full border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60"
                          >
                            Stornieren
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
