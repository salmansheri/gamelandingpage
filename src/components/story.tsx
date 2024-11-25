import { useRef, type MouseEventHandler } from "react";
import AnimatedTitle from "./animated-title";
import gsap from "gsap";
import Button from "./button";

export default function Story() {
  const frameRef = useRef<HTMLImageElement | null>(null);
  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    const element = frameRef.current;

    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.out",
    });
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;

    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;

    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiversal IP World
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            className="text-white mt-5 pointer-events-none mix-blend-difference relative z-10 "
            id="#story"
            title="The St<b>o</b>ry of<br /> a Hidden Real<b>m</b>"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  alt="entrance"
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  className="object-contain"
                  ref={frameRef}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Discover Prologue
            </p>
            <Button
              id="realm-button"
              title="discover prologue"
              className="mt-5 text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
