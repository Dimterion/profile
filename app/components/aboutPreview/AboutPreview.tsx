import { Link } from "react-router";
import CornerFrame from "../CornerFrame/CornerFrame";

export default function AboutPreview() {
  return (
    <CornerFrame className="bg-blue flex w-full max-w-96 flex-col gap-8 border px-2 py-4 md:max-w-lg md:p-10 lg:max-w-2xl xl:max-w-full">
      <h2 className="text-center text-lg font-bold uppercase md:text-xl">
        Profile
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-dark-blue border p-4">
          <h3 className="mb-4 text-center text-lg font-bold md:text-xl">
            Overview
          </h3>
          <p>
            I contribute to GitHub daily, publish on Medium weekly, track
            everything I read, watch, and play, and make time every day to learn
            and write.
          </p>
        </div>
        <div className="bg-dark-blue border p-4">
          <h3 className="mb-4 text-center text-lg font-bold md:text-xl">
            Highlights
          </h3>
          <ul className="mb-4 list-none space-y-2">
            <li className="relative pl-4 before:absolute before:top-2.25 before:left-0 before:h-2 before:w-2 before:-rotate-45 before:border-0 before:bg-white before:content-['']">
              Daily GitHub contribution streak: 4+ years.
            </li>
            <li className="relative pl-4 before:absolute before:top-2.25 before:left-0 before:h-2 before:w-2 before:-rotate-45 before:border-0 before:bg-white before:content-['']">
              Weekly Medium posts every Friday: 4+ years.
            </li>
            <li className="relative pl-4 before:absolute before:top-2.25 before:left-0 before:h-2 before:w-2 before:-rotate-45 before:border-0 before:bg-white before:content-['']">
              Duolingo streak: 4,400+ days.
            </li>
          </ul>
        </div>
      </div>
      <Link
        className="bg-dark-blue hover:text-gold hover:border-gold mx-auto w-fit border px-4 pt-0.5 pb-1 text-center text-sm uppercase transition"
        to="/about"
      >
        About
      </Link>
    </CornerFrame>
  );
}
