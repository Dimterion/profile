import CornerFrame from "../CornerFrame/CornerFrame";

export default function Hero() {
  return (
    <CornerFrame className="bg-blue w-full max-w-96 border px-2 py-4 text-center md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <h1 className="mb-2 text-lg font-bold md:text-2xl">
        Dmitrii | Dimterion
      </h1>
      <p>
        Technical consultant, product support specialist, and developer with 10+
        years of experience in the video game and financial industries.
      </p>
    </CornerFrame>
  );
}
