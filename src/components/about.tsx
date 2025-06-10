"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Zap, Home, Globe } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (!section || !title || !content || !stats) return;

    gsap.set([title, content, stats], { opacity: 0, y: 100 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(title, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
          .to(
            content,
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=0.7"
          )
          .to(
            stats,
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=0.7"
          );
      },
    });
  }, []);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Design",
      description:
        "Built with eco-friendly materials and renewable energy systems",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Technology",
      description:
        "Integrated IoT systems for climate control and energy management",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Modular Living",
      description: "Customizable layouts that adapt to your lifestyle needs",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Mobility",
      description: "Designed for easy transport and installation anywhere",
    },
  ];

  const stats = [
    { number: "500+", label: "Capsules Delivered" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Redefining
            <span className="block text-gray-700">Modern Living</span>
          </h2>

          <div ref={contentRef} className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              CapsuleLiving represents the future of sustainable, modular
              housing. Our innovative capsules combine cutting-edge design with
              environmental consciousness, creating living spaces that adapt to
              your lifestyle while respecting the planet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-transform  duration-300 hover:-translate-y-2 border border-gray-200"
                >
                  <div className="text-gray-700 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
