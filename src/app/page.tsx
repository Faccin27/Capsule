"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/navigation";
import CustomScrollIndicator from '@/components/custom-scroll-indicator'
import Hero from "@/components/hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Navigation />
      <CustomScrollIndicator />
      <main>
        <Hero/>
      </main>
    </>
  );
}
