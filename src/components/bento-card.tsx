import { useRef, useState } from "react";
interface BentoCardProps {
  title: React.ReactElement;
  description?: string;
  isComingSoon?: boolean;
  src: string;
}

interface BentoTiltProps {
  children: React.ReactNode;
  className: string;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  // @ts-ignore
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    // @ts-ignore
    const { left, top, width, height } =
      // @ts-ignore
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * 5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
      }}
    >
      {children}
    </div>
  );
};

export default function BentoCard({ title, description, src }: BentoCardProps) {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>

      {title}
    </div>
  );
}
