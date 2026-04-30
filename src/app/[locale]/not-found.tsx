import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <h1 className="h1 mb-4 text-deep">404</h1>
      <p className="lead mb-6">This page does not exist.</p>
      <Link href="/" className="btn-primary inline-flex">Home</Link>
    </div>
  );
}
