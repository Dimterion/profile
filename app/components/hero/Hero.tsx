import { useContent } from "~/hooks/useContent";
import CornerFrame from "../shared/CornerFrame/CornerFrame";
import PageLinkBtn from "../shared/PageLinkBtn/PageLinkBtn";

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
    <CornerFrame className="cornerFrame gradient-bg">
      <h1 className="mb-7 text-center font-bold sm:text-lg md:text-2xl">
        {t.hero.name}
      </h1>
      <p className="text-center text-sm md:text-base">{t.hero.bio}</p>
      <section className="mt-10 grid w-full max-w-40 gap-4 justify-self-center text-center sm:max-w-full lg:grid-cols-4">
        {links.map((link) => (
          <PageLinkBtn key={link.label} link={link.link} label={link.label} />
        ))}
      </section>
    </CornerFrame>
  );
}
