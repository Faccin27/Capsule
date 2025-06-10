"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, Waves, TreePine, Sun, Camera, Coffee } from "lucide-react";

export default function Activities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [autoImageIndex, setAutoImageIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!section || !title || !grid) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(title, { opacity: 0, y: 100 });
    gsap.set(grid.children, { opacity: 0, y: 100, scale: 0.8 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      },
    });

    ScrollTrigger.create({
      trigger: grid,
      start: "top 80%",
      onEnter: () => {
        gsap.to(grid.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      },
    });

    Array.from(grid.children).forEach((card, index) => {
      gsap.to(card, {
        y: -10,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (activeCard === null) {
      const interval = setInterval(() => {
        setAutoImageIndex((prevIndex) => (prevIndex + 1) % activities.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [activeCard]);

  const activities = [
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Mountain Retreats",
      description:
        "Perfect for hiking, meditation, and connecting with nature in elevated environments.",
      bgImage: "/images/activities-1.png",
    },
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Coastal Adventures",
      description:
        "Surf, swim, and enjoy oceanfront living with our weather-resistant coastal capsules.",
      bgImage: "/images/activities-2.png",
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Forest Immersion",
      description:
        "Disconnect from the digital world and reconnect with the tranquility of the forest.",
      bgImage: "/images/activities-3.png",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Desert Exploration",
      description:
        "Experience the stark beauty of desert landscapes with climate-controlled comfort.",
      bgImage: "/images/cap2.png",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photography Tours",
      description:
        "Mobile studios for capturing the perfect shot in remote and beautiful locations.",
      bgImage: "/images/capsule-1.png",
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Remote Work",
      description:
        "Transform any location into your perfect office with high-speed connectivity.",
      bgImage: "/images/capsule-2.png",
    },
  ];

  const handleCardHover = (index: number | null) => {
    setActiveCard(index);
  };

  const currentImageIndex = activeCard !== null ? activeCard : autoImageIndex;

  return (
    <section
      id="activities"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 overflow-hidden relative"
    >
      <div className="absolute inset-0 transition-opacity duration-1000">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-80" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${activity.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-6">
            Endless
            <span className="block text-gray-700">Possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our capsules are designed to enhance every adventure and lifestyle
            choice, from remote work to extreme sports and peaceful retreats.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl border border-gray-200"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-800 mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                <div className="text-white">{activity.icon}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {activity.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
