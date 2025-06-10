"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/navigation";
import CustomScrollIndicator from "@/components/custom-scroll-indicator";
import Hero from "@/components/hero";
import About from "@/components/about";
import CapsuleShowcase from "@/components/capsule-showcase";
import Activities from "@/components/activities";
import Applications from "@/components/applications";

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
        <Hero />
        <About />
        <CapsuleShowcase />
        <Activities />
        <Applications />
      </main>
    </>
  );
}
