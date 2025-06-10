"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Building, Tent, Briefcase, Heart, GraduationCapIcon as Graduation, Shield } from "lucide-react"

export default function Applications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const cards = cardsRef.current

    if (!section || !title || !cards) return

    // Set initial states
    gsap.set(title, { opacity: 0, y: 100 })
    gsap.set(cards.children, { opacity: 0, y: 100, rotationY: 45 })

    // Title animation
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      },
    })

    // Cards animation with 3D effect
    ScrollTrigger.create({
      trigger: cards,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards.children, {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        })
      },
    })
  }, [])

  const applications = [
    {
      icon: <Building className="w-10 h-10" />,
      title: "Emergency Housing",
      description: "Rapid deployment for disaster relief and temporary accommodation needs.",
      image: "/images/activities-1.png",
      extendedDescription:
        "Our emergency housing capsules can be deployed within 24 hours to disaster zones, providing immediate shelter with all essential amenities. Each unit is self-sufficient with solar power, water filtration, and climate control systems.",
    },
    {
      icon: <Tent className="w-10 h-10" />,
      title: "Glamping Resorts",
      description: "Luxury camping experiences that blend comfort with natural beauty.",
      image: "/images/activities-2.png",
      extendedDescription:
        "Transform any natural location into a premium hospitality destination with our glamping capsules. Each unit features panoramic views, luxury furnishings, and integrated smart systems for an unforgettable guest experience.",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Remote Offices",
      description: "Mobile workspaces for teams and individuals in any location.",
      image: "/images/activities-3.png",
      extendedDescription:
        "Our office capsules provide professional work environments anywhere in the world. Equipped with high-speed satellite internet, ergonomic workstations, and meeting facilities, they enable productive remote work without compromising on comfort.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Healthcare Clinics",
      description: "Mobile medical facilities for underserved and remote communities.",
      image: "/images/welcome-1.png",
      extendedDescription:
        "Bringing healthcare to remote locations, our medical capsules are equipped with essential diagnostic equipment, treatment areas, and telemedicine capabilities. They can function independently or as part of a larger healthcare network.",
    },
    {
      icon: <Graduation className="w-10 h-10" />,
      title: "Educational Centers",
      description: "Portable classrooms and learning spaces for remote education.",
      image: "/images/welcome-2.png",
      extendedDescription:
        "Our educational capsules create inspiring learning environments in any location. With built-in digital learning tools, flexible seating arrangements, and natural lighting, they provide optimal conditions for knowledge sharing and skill development.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security Outposts",
      description: "Monitoring stations and security facilities for remote locations.",
      image: "/images/activities-2.png",
      extendedDescription:
        "Designed for durability and functionality, our security capsules feature reinforced construction, surveillance systems, and communication equipment. They provide a safe and comfortable base for security personnel in challenging environments.",
    },
  ]

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null)
    } else {
      setExpandedCard(index)
    }
  }

  return (
    <section
      id="applications"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Versatile
            <span className="block text-gray-700">Applications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency relief to luxury hospitality, our capsules adapt to serve countless purposes across
            industries and communities.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 border border-gray-200 ${
                expandedCard === index
                  ? "md:col-span-2 lg:col-span-3 md:row-span-2 scale-100 z-10"
                  : "hover:-translate-y-4 hover:shadow-2xl"
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="relative">
                <div
                  className={`relative ${expandedCard === index ? "h-96" : "h-48"} overflow-hidden transition-all duration-500`}
                >
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 group-hover:from-gray-700/40 group-hover:to-gray-800/40 transition-all duration-300"></div>

                  <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-gray-800 group-hover:bg-gray-700 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                    {app.icon}
                  </div>
                </div>

                <div className={`p-8 ${expandedCard === index ? "pb-16" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {app.title}
                  </h3>

                  {expandedCard === index ? (
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{app.description}</p>
                      <p className="text-gray-600 leading-relaxed">{app.extendedDescription}</p>

                      <div className="pt-4 flex justify-between items-center">
                        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                          Learn More
                        </button>

                        <button className="text-gray-500 hover:text-gray-700">Close</button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{app.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
