import { Link } from "react-router";
import CornerFrame from "../shared/CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";

export default function AboutPreview() {
  const { t } = useContent();

  return (
    <CornerFrame className="cornerFrame">
      <h2 className="text-center font-bold sm:text-lg md:text-xl">
        {t.about.title}
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-dark-blue border p-4">
          <h3 className="mb-4 text-center text-sm font-bold md:text-lg">
            {t.about.overviewTitle}
          </h3>
          <p className="text-sm md:text-base">{t.about.overviewText}</p>
        </div>
        <div className="bg-dark-blue border p-4">
          <h3 className="mb-4 text-center text-sm font-bold md:text-lg">
            {t.about.highlightsTitle}
          </h3>
          <ul className="mb-4 list-none space-y-2 text-sm md:text-base">
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
        className="bg-dark-blue hover:border-gold hover:text-gold w-fit min-w-0 border px-4 py-2 text-xs transition md:text-sm"
        to="/about"
      >
        {t.about.cta}
      </Link>
    </CornerFrame>
  );
}
