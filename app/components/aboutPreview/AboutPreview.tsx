import { Link } from "react-router";

export default function AboutPreview() {
  return (
    <section className="bg-blue mx-auto mt-4 w-full max-w-96 border p-2 md:p-4 lg:max-w-180 xl:max-w-full">
      <div>
        <h2 className="mb-4 text-center text-lg font-bold md:text-xl">
          Profile
        </h2>
        <p>
          I contribute to GitHub daily, publish on Medium weekly, track
          everything I read, watch, and play, and make time every day to learn
          and write.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-center font-semibold md:text-lg">
          Highlights
        </h3>
        <ul className="mb-4">
          <li>Daily GitHub contribution streak: 4+ years.</li>
          <li>Weekly Medium posts every Friday: 4+ years.</li>
          <li>Duolingo streak: 4,400+ days.</li>
        </ul>
        <Link
          to="/about"
          className="mt-2 inline-block border px-2 py-0.5 text-sm"
        >
          About
        </Link>
      </div>
    </section>
  );
}
