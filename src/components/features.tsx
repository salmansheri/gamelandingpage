import BentoCard, { BentoTilt } from "./bento-card";
export default function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-95 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radie<b>n</b>t
              </>
            }
            description="Cross Platform Metagame app"
            isComingSoon
          />
        </BentoTilt>
        <div className="h-[135vh] grid grid-cols-2 grid-rows-3 gap-7 ">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming inspired NFT Collection"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1  ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified Social hub"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A cross world AI Agent"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
