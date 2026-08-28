import { Link } from "react-router";
import CornerFrame from "../CornerFrame/CornerFrame";

const links = [
  { link: "projects", label: "Work" },
  { link: "blog", label: "Posts" },
  { link: "about", label: "About" },
  { link: "contact", label: "Contact" },
];

export default function Hero() {
  return (
    <CornerFrame className="bg-blue w-full max-w-96 border px-2 py-4 text-center md:max-w-lg md:px-4 md:py-20 lg:max-w-2xl xl:max-w-full">
      <h1 className="mb-7 text-lg font-bold md:text-2xl">
        Dmitrii | Dimterion
      </h1>
      <p>
        Technical consultant, product support specialist, and developer with 10+
        years of experience in the video game and financial industries.
      </p>
      <section className="mt-10 grid gap-4 justify-self-center lg:grid-cols-4">
        {links.map((link) => (
          <Link
            key={link.link}
            to={link.link}
            className="bg-dark-blue hover:border-gold hover:text-gold w-full min-w-32 border px-4 py-2 text-xs uppercase transition lg:w-fit"
          >
            {link.label}
          </Link>
        ))}
      </section>
    </CornerFrame>
  );
}
