import { Link } from "react-router";
import CornerFrame from "../CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";

export default function Hero() {
  const { t } = useContent();

  return (
    <CornerFrame className="bg-blue flex min-h-screen w-full max-w-96 flex-col items-center justify-center border px-2 py-4 text-center md:max-w-lg md:px-4 md:py-20 lg:max-w-2xl xl:max-w-full">
      <h1 className="mb-7 text-lg font-bold md:text-2xl">{t.hero.name}</h1>
      <p>{t.hero.bio}</p>
      <section className="mt-10 grid w-full gap-4 justify-self-center lg:grid-cols-4">
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
