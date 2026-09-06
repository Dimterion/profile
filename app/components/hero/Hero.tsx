import { Link } from "react-router";
import CornerFrame from "../CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";

export default function Hero() {
  const { t } = useContent();

  const links = [
    {
      link: "projects",
      label: t.hero.links.work,
    },
    {
      link: "blog",
      label: t.hero.links.posts,
    },
    {
      link: "about",
      label: t.hero.links.about,
    },
    {
      link: "contact",
      label: t.hero.links.contact,
    },
  ];

  return (
    <CornerFrame className="cornerFrame">
      <h1 className="mb-7 text-center font-bold sm:text-lg md:text-2xl">
        {t.hero.name}
      </h1>
      <p className="text-center text-sm md:text-base">{t.hero.bio}</p>
      <section className="mt-10 grid w-full max-w-40 gap-4 justify-self-center text-center sm:max-w-full lg:grid-cols-4">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.link}
            className="bg-dark-blue hover:border-gold hover:text-gold w-full min-w-0 border px-4 py-2 text-xs transition"
          >
            {link.label}
          </Link>
        ))}
      </section>
    </CornerFrame>
  );
}
