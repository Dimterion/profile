import profileImg from "../../assets/images/profile_img.png";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function DiamondImg() {
  return (
    <div
      className="relative h-8 w-8 shrink-0 md:h-20 md:w-20"
      aria-label="Profile image"
    >
      <div className="absolute inset-0 bg-current" style={diamondClip} />

      <div className="absolute inset-px overflow-hidden" style={diamondClip}>
        <img
          src={profileImg}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
