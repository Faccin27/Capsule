"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!hero || !title || !subtitle || !button || !scrollIndicator) return;

    gsap.set([title, subtitle, button], { opacity: 0, y: 100 });
    gsap.set(scrollIndicator, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(title, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
      .to(
        subtitle,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .to(
        button,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .to(scrollIndicator, { opacity: 1, duration: 0.5 }, "-=0.3");

    gsap.to(scrollIndicator, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/capsule-1.png"
          alt="Modern Capsule Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Future of
          <span className="block text-gray-200">Living</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Experience revolutionary modular housing capsules designed for the
          modern nomad. Sustainable, luxurious, and perfectly integrated with
          nature.
        </p>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white border-white hover:bg-white/20 text-gray-900 rounded-lg px-8 py-4 text-lg font-semibold"
          >
            Explore Capsules
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-gray-900 hover:bg-white/20 rounded-lg px-8 py-4 text-lg font-semibold"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
