import DiamondImg from "~/components/DiamondImg/DiamondImg";
import profileImg from "../../assets/images/profile_img.png";
import { useContent } from "~/hooks/useContent";

export default function AboutPage() {
  const { t } = useContent();

  return (
    <section className="bg-blue w-full max-w-96 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <div className="mb-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <DiamondImg
          link={profileImg}
          alt="Dmitrii's profile picture."
          style="h-20 w-20"
        />
        <div>
          <h1 className="mb-2 text-3xl font-bold">{t.about.title}</h1>
          <p className="text-lg">{t.about.overviewText}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          {t.about.highlightsTitle}
        </h2>
        <ul className="list-disc pl-5 leading-relaxed">
          {t.about.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">{t.about.skillsTitle}</h2>
      <ul className="flex flex-wrap gap-4 text-sm">
        {t.about.skills.map((skill) => (
          <li key={skill} className="bg-gray-400 px-3 py-1">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
