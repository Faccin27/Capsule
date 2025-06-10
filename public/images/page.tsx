"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/hero";
import About from "@/components/about";
import CapsuleShowcase from "@/components/capsule-showcase";
import Activities from "@/components/activities";
import Applications from "@/components/applications";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import CustomScrollIndicator from "@/components/custom-scroll-indicator";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on load
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
        <Contact />
      </main>

    </>
  );
}
