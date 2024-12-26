"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurFade from "@/components/ui/blur-fade";
import Meteors from "@/components/ui/meteors";

import astronot2 from "../assets/astronot2.png";
import gsap from "gsap";

export function Hero() {
  const { theme } = useTheme();
  const [, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  useEffect(() => {
    // GSAP animation for splash screen

    gsap.to(".astronot2", {
      y: "-20px", // bergerak ke atas
      repeat: -1, // loop
      yoyo: true, // animasi bolak-balik
      duration: 2, // durasi per gerakan
      ease: "power1.inOut", // easing
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      className="relative flex h-[720px] lg:h-[660px] w-full flex-col items-center justify-center overflow-hidden bg-black lg:px-72 "
      id="home"
    >
      <img
        src={astronot2}
        alt="astrounot"
        className="astronot2 absolute w-0 lg:w-40 left-16 bottom-11"
      />
      <Meteors number={40} />
      <GradualSpacing
        className="font-display text-center text-2xl font-semibold lg:font-bold -tracking-widest  text-white  lg:text-7xl"
        text="Distribute and promote"
      />
      <GradualSpacing
        className="font-display text-center text-2xl font-semibold lg:font-bold -tracking-widest  text-white  lg:text-7xl"
        text="your music globally"
      />

      <BlurIn
        word="TikTok's all-in-one platform for artists and labels"
        className="text-xs font-medium text-white mt-2 lg:mt-0"
      />

      <BlurFade inView>
        <RainbowButton className="mt-6 lg:mt-0 lg:text-lg text-sm">
          <a href="https://wa.me/6282133289048?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda">
            Get Started
          </a>
        </RainbowButton>
      </BlurFade>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#FAFAFA"}
        refresh
      />
    </div>
  );
}

export default Hero;
