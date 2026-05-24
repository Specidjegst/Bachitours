import { isAuthed } from "@/lib/admin-auth";
import { listBookings } from "@/lib/db";
import { LoginForm } from "./LoginForm";
import { Dashboard } from "./Dashboard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin · Bachitours",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!process.env.ADMIN_PASSWORD) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
        <div className="max-w-md rounded-xl2 bg-white p-8 shadow-card">
          <h1 className="mb-2 text-xl font-bold text-deep">Admin nicht konfiguriert</h1>
          <p className="text-sm text-muted">
            Bitte die Umgebungsvariable <code className="rounded bg-cream px-1">ADMIN_PASSWORD</code> in Railway setzen.
          </p>
        </div>
      </div>
    );
  }

  if (!(await isAuthed())) {
    return <LoginForm />;
  }

  try {
    const bookings = await listBookings();
    return <Dashboard initial={bookings} />;
  } catch {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
        <div className="max-w-md rounded-xl2 bg-white p-8 shadow-card">
          <h1 className="mb-2 text-xl font-bold text-deep">Datenbank nicht erreichbar</h1>
          <p className="text-sm text-muted">
            Bitte die Umgebungsvariable <code className="rounded bg-cream px-1">DATABASE_URL</code> in Railway setzen
            (PostgreSQL-Service verbinden).
          </p>
        </div>
      </div>
    );
  }
}
