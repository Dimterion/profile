import DiamondImg from "~/components/DiamondImg/DiamondImg";
import profileImg from "../../assets/images/profile_img.png";

export default function AboutPage() {
  return (
    <section className="bg-blue w-full max-w-96 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <div className="mb-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <DiamondImg
          link={profileImg}
          alt="Dmitrii's profile picture."
          style="h-20 w-20"
        />
        <div>
          <h1 className="mb-2 text-3xl font-bold">Profile</h1>
          <p className="text-lg">Profile information.</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Highlights</h2>
        <p className="leading-relaxed">Highlights information.</p>
      </div>
      <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-4 text-sm">
        {[
          "Web Development",
          "Tech Consultations",
          "QA",
          "Testing",
          "Web Design",
          "Tech Writing",
          "Documentation",
        ].map((skill) => (
          <li key={skill} className="bg-gray-400 px-3 py-1">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
