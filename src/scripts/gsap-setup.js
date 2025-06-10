import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof gsap !== "undefined" && gsap.registerPlugin) {
  gsap.registerPlugin(ScrollTrigger)
} else {
  console.warn("GSAP not found or registerPlugin not available")
}

if (typeof gsap !== "undefined") {
  gsap.defaults({
    duration: 1,
    ease: "power2.out",
  })

  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
  })

}

const animationUtils = {
  fadeInUp: (element, delay = 0) => {
    gsap.fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay, ease: "power3.out" })
  },

  scaleIn: (element, delay = 0) => {
    gsap.fromTo(
      element,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay, ease: "back.out(1.7)" },
    )
  },

  slideInFromLeft: (element, delay = 0) => {
    gsap.fromTo(element, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay, ease: "power3.out" })
  },

  slideInFromRight: (element, delay = 0) => {
    gsap.fromTo(element, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay, ease: "power3.out" })
  },
}

