"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";

export function Hero() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <GradualSpacing
      className=" text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl"
      text="Distribute and promote"
    />
      <GradualSpacing
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl"
      text="your music globally"
    />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

export default Hero