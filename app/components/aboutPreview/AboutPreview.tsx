import { Link } from "react-router";
import CornerFrame from "../CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";

export default function AboutPreview() {
  const { t } = useContent();

  return (
    <CornerFrame className="cornerFrame">
      <h2 className="text-center text-lg font-bold uppercase md:text-xl">
        {t.about.title}
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-dark-blue border p-4">
          <h3 className="mb-4 text-center text-lg font-bold md:text-xl">
            {t.about.overviewTitle}
          </h3>
          <p>{t.about.overviewText}</p>
        </div>
        <div className="bg-dark-blue border p-4">
          <h3 className="mb-4 text-center text-lg font-bold md:text-xl">
            {t.about.highlightsTitle}
          </h3>
          <ul className="mb-4 list-none space-y-2">
            {t.about.highlights.map((highlight, index) => (
              <li
                key={index}
                className="relative pl-4 before:absolute before:top-2.25 before:left-0 before:h-2 before:w-2 before:-rotate-45 before:border-0 before:bg-white before:content-['']"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="bg-dark-blue hover:text-gold hover:border-gold mx-auto w-fit border px-4 pt-0.5 pb-1 text-center text-sm uppercase transition"
        to="/about"
      >
        {t.about.cta}
      </Link>
    </CornerFrame>
  );
}
