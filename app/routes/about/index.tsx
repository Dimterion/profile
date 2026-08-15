import profileImg from "../../assets/images/profile_img.png";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl bg-gray-300 px-6 py-16">
      <div className="mb-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div
          className="relative h-20 w-20 shrink-0 md:h-30 md:w-30"
          aria-label="Profile image"
        >
          <div className="absolute inset-0 bg-current" style={diamondClip} />

          <div
            className="absolute inset-px overflow-hidden"
            style={diamondClip}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
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
