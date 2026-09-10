import type { DiamondImgProps } from "~/types";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function DiamondImg({ link, alt, style }: DiamondImgProps) {
  return (
    <div
      className={`relative h-8 w-8 shrink-0 md:h-20 md:w-20 ${style}`}
      aria-label="Profile image"
    >
      <div className="absolute inset-0 bg-current" style={diamondClip} />

      <div className="absolute inset-px overflow-hidden" style={diamondClip}>
        <img
          src={link}
          alt={alt}
          width="78"
          height="78"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
