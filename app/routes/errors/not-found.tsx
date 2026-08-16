import { data, Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "~/components/icons";

export function loader() {
  return data(null, { status: 404 });
}

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
      <div className="mt-4 flex w-30 flex-col gap-4">
        <Link to="/" className="border px-2 text-center">
          Home page
        </Link>
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="flex cursor-pointer items-center justify-around border px-2"
        >
          <ArrowLeftIcon /> Back
        </button>
      </div>
    </main>
  );
}
