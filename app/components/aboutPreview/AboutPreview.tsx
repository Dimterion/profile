import { Link } from "react-router";

export default function AboutPreview() {
  return (
    <section className="mt-12 flex flex-col items-center gap-8 bg-gray-200 p-10 md:flex-row">
      <div>
        <h1 className="mb-2 text-3xl font-bold">Profile</h1>
        <p className="text-lg">Profile information.</p>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Highlights</h2>
        <p className="leading-relaxed">Highlights information.</p>
        <Link to="/about" className="inline-block text-sm hover:underline">
          About
        </Link>
      </div>
    </section>
  );
}
