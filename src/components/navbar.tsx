import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import ReactUse from "react-use";
const { useWindowScroll } = ReactUse;

import Button from "../components/button";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const { y: currentScrollY } = useWindowScroll();
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  function toggleAudioIndicator() {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  }

  useEffect(() => {
    if (isAudioPlaying) {
      // @ts-ignore
      audioElementRef?.current?.play();
    } else {
      //@ts-ignore
      audioElementRef?.current?.pause();
    }
  }, []);
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      // @ts-ignore
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      // @ts-ignore
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      // @ts-ignore
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <header
      ref={navContainerRef}
      className="fixed indset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 ">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              className="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex items-center h-full ">
            <div className="hidden md:block ">
              {navItems.map((item) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center sapce-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={twMerge(
                    "indicator-line",
                    isIndicatorActive ? "active" : "",
                  )}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
