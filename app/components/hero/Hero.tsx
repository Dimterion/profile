import { Link } from "react-router";
import CornerFrame from "../CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";

export default function Hero() {
  const { t } = useContent();

  return (
    <CornerFrame className="cornerFrame">
      <h1 className="mb-7 text-center text-lg font-bold md:text-2xl">
        {t.hero.name}
      </h1>
      <p className="text-center">{t.hero.bio}</p>
      <section className="mt-10 grid w-full gap-4 justify-self-center text-center lg:grid-cols-4">
        <Link
          to="projects"
          className="bg-dark-blue hover:border-gold hover:text-gold w-full min-w-0 border px-4 py-2 text-xs uppercase transition"
        >
          {t.hero.links.work}
        </Link>
        <Link
          to="blog"
          className="bg-dark-blue hover:border-gold hover:text-gold w-full min-w-0 border px-4 py-2 text-xs uppercase transition"
        >
          {t.hero.links.posts}
        </Link>
        <Link
          to="about"
          className="bg-dark-blue hover:border-gold hover:text-gold w-full min-w-0 border px-4 py-2 text-xs uppercase transition"
        >
          {t.hero.links.about}
        </Link>
        <Link
          to="contact"
          className="bg-dark-blue hover:border-gold hover:text-gold w-full min-w-0 border px-4 py-2 text-xs uppercase transition"
        >
          {t.hero.links.contact}
        </Link>
      </section>
    </CornerFrame>
  );
}
