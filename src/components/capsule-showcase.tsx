"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Wifi, Zap, Droplets } from "lucide-react";

export default function CapsuleShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  const capsules = [
    {
      id: "desert",
      name: "Desert Capsule",
      image: "/images/capsule-1.png",
      price: "$89,000",
      description:
        "Perfect for arid environments with advanced climate control and panoramic desert views. Experience the serenity of the desert while enjoying modern comforts.",
      features: [
        {
          icon: <Zap className="w-4 h-4" />,
          name: "Solar Power",
          description: "100% renewable energy",
        },
        {
          icon: <Droplets className="w-4 h-4" />,
          name: "Water Recycling",
          description: "Advanced filtration system",
        },
        {
          icon: <Wifi className="w-4 h-4" />,
          name: "Smart Glass",
          description: "Adaptive transparency",
        },
        {
          icon: <Star className="w-4 h-4" />,
          name: "Climate Control",
          description: "Precision temperature",
        },
      ],
      specs: {
        size: "25m²",
        capacity: "2-4 people",
        installation: "3 days",
        warranty: "10 years",
      },
    },
    {
      id: "classic",
      name: "Classic Capsule",
      image: "/images/capsule-2.png",
      price: "$75,000",
      description:
        "Our signature design combining comfort with minimalist aesthetics for any environment. The perfect balance of form and function.",
      features: [
        {
          icon: <Star className="w-4 h-4" />,
          name: "Modular Interior",
          description: "Customizable layout",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          name: "LED Lighting",
          description: "Energy efficient",
        },
        {
          icon: <Wifi className="w-4 h-4" />,
          name: "Air Purification",
          description: "HEPA filtration",
        },
        {
          icon: <Droplets className="w-4 h-4" />,
          name: "Wireless Charging",
          description: "Built-in charging pads",
        },
      ],
      specs: {
        size: "22m²",
        capacity: "2-3 people",
        installation: "2 days",
        warranty: "8 years",
      },
    },
    {
      id: "terrace",
      name: "Terrace Capsule",
      image: "/images/capsule-3.png",
      price: "$95,000",
      description:
        "Elevated living with extended outdoor spaces and premium amenities. Perfect for those who love outdoor entertainment.",
      features: [
        {
          icon: <Star className="w-4 h-4" />,
          name: "Extended Deck",
          description: "15m² outdoor space",
        },
        {
          icon: <Droplets className="w-4 h-4" />,
          name: "Hot Tub",
          description: "Integrated spa system",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          name: "Premium Materials",
          description: "Luxury finishes",
        },
        {
          icon: <Wifi className="w-4 h-4" />,
          name: "Smart Home",
          description: "IoT integration",
        },
      ],
      specs: {
        size: "30m²",
        capacity: "4-6 people",
        installation: "4 days",
        warranty: "12 years",
      },
    },
    {
      id: "forest",
      name: "Forest Capsule",
      image: "/images/cap2.png",
      price: "$82,000",
      description:
        "Designed to blend seamlessly with natural forest environments. Minimal environmental impact with maximum comfort.",
      features: [
        {
          icon: <Star className="w-4 h-4" />,
          name: "Camouflage Exterior",
          description: "Natural integration",
        },
        {
          icon: <Droplets className="w-4 h-4" />,
          name: "Minimal Impact",
          description: "Eco-friendly design",
        },
        {
          icon: <Wifi className="w-4 h-4" />,
          name: "Wildlife Viewing",
          description: "Observation deck",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          name: "Natural Ventilation",
          description: "Passive cooling",
        },
      ],
      specs: {
        size: "24m²",
        capacity: "2-4 people",
        installation: "3 days",
        warranty: "10 years",
      },
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const rightSide = rightSideRef.current;

    if (!section || !rightSide) return;

    gsap.registerPlugin(ScrollTrigger);

    if (rightSide.children.length > 0) {
      gsap.set(rightSide.children[0], {
        x: "0%", 
      });
    }

    capsules.forEach((capsule, index) => {
      const capsuleContent = section.querySelector(
        `[data-capsule="${capsule.id}"]`
      );

      if (!capsuleContent) return;

      const imageElement = document.createElement("div");
      imageElement.className = "absolute inset-0 w-full h-full";
      imageElement.style.zIndex = (capsules.length - index).toString();
      imageElement.innerHTML = `
    <img 
      src="${capsule.image}" 
      alt="${capsule.name}"
      class="w-full h-full object-cover rounded-l-[50px]"
    />
  `;

      gsap.set(imageElement, {
        x: index === 0 ? "0%" : "100%",
      });

      rightSide.appendChild(imageElement);

      ScrollTrigger.create({
        trigger: capsuleContent,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(imageElement, {
            x: "0%",
            duration: 1,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          if (index < capsules.length - 1) {
            gsap.to(imageElement, {
              x: "-100%",
              duration: 1,
              ease: "power2.inOut",
            });
          }
        },
        onEnterBack: () => {
          gsap.to(imageElement, {
            x: "0%",
            duration: 1,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          if (index > 0) {
            gsap.to(imageElement, {
              x: "100%",
              duration: 1,
              ease: "power2.inOut",
            });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="capsules" ref={sectionRef} className="relative">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block text-gray-300">Capsule Collection</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Each capsule is meticulously designed for specific environments and
            lifestyles, offering unparalleled comfort and sustainability.
          </p>
        </div>
      </div>

      <div className="relative flex">
        <div className="w-1/2 pr-8">
          {capsules.map((capsule, index) => (
            <div
              key={capsule.id}
              data-capsule={capsule.id}
              className="min-h-screen flex items-center py-20 px-24"
            >
              <div className="max-w-2xl">
                <div className="inline-block mb-6">
                  <span className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-bold">
                    {capsule.price}
                  </span>
                </div>

                <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {capsule.name}
                </h3>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {capsule.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-4 transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                    <div className="text-sm text-gray-500 mb-1">Size</div>
                    <div className="text-lg font-bold text-gray-900">
                      {capsule.specs.size}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4  transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                    <div className="text-sm text-gray-500 mb-1">Capacity</div>
                    <div className="text-lg font-bold text-gray-900">
                      {capsule.specs.capacity}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4  transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                    <div className="text-sm text-gray-500 mb-1">
                      Installation
                    </div>
                    <div className="text-lg font-bold text-gray-900 ">
                      {capsule.specs.installation}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4  transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                    <div className="text-sm text-gray-500 mb-1">Warranty</div>
                    <div className="text-lg font-bold text-gray-900">
                      {capsule.specs.warranty}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {capsule.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                      >
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900 text-sm">
                            {feature.name}
                          </div>
                          <div className="text-xs text-gray-600 truncate">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg font-semibold"
                  >
                    Configure Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-900 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-semibold"
                  >
                    Download Brochure
                  </Button>
                </div>

                <div className="fixed bottom-12 right-12 z-50">
                  <div className="flex flex-col items-center text-white/50">
                    <span className="text-sm mb-3 font-medium">Scroll</span>
                    <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-[2px] ">
                      <div className="w-1 h-4 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2">
          <div className="sticky top-0 h-screen overflow-hidden rounded-l-[50px]">
            <div
              ref={rightSideRef}
              className="relative w-full h-full bg-transparent "
            >
              {/* Images são adicionaas dinamicamente aq */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
