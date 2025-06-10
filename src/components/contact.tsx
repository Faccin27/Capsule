"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    capsuleType: "",
    budget: "",
    timeline: "",
  });

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !form || !info) return;

    gsap.set([form, info], { opacity: 0, y: 100 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(form, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }).to(
          info,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.7"
        );
      },
    });

    gsap.to(info.children, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3,
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormStep(3);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "contact@faccindev.pro",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+55 49 9 9921-5720",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "Santa Catarina - BRA",
    },
  ];

  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <Button
              type="button"
              onClick={nextStep}
              className="w-full bg-white hover:bg-gray-200 text-gray-900 rounded-2xl py-4 text-lg font-semibold"
            >
              Next Step
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
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Capsule Type
              </label>
              <select
                name="capsuleType"
                value={formData.capsuleType}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl p-3"
                required
              >
                <option value="">Select a capsule type</option>
                <option value="desert">Desert Capsule</option>
                <option value="classic">Classic Capsule</option>
                <option value="terrace">Terrace Capsule</option>
                <option value="forest">Forest Capsule</option>
                <option value="arctic">Arctic Capsule</option>
                <option value="coastal">Coastal Capsule</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl p-3"
              >
                <option value="">Select your budget</option>
                <option value="50k-75k">$50,000 - $75,000</option>
                <option value="75k-100k">$75,000 - $100,000</option>
                <option value="100k-150k">$100,000 - $150,000</option>
                <option value="150k+">$150,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl p-3"
              >
                <option value="">Select your timeline</option>
                <option value="immediate">Immediate (1-3 months)</option>
                <option value="soon">Soon (3-6 months)</option>
                <option value="planning">Planning Phase (6-12 months)</option>
                <option value="future">Future Project (12+ months)</option>
              </select>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="w-1/2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl py-4"
              >
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
                  className="mr-2"
                >
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
                Back
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                className="w-1/2 bg-white hover:bg-gray-200 text-gray-900 rounded-2xl py-4"
              >
                Next
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
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Details
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl resize-none"
                placeholder="Tell us about your project, location, and specific requirements..."
                required
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="w-1/2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl py-4"
              >
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
                  className="mr-2"
                >
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
                Back
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-white hover:bg-gray-200 text-gray-900 rounded-2xl py-4"
              >
                Submit
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-300 mb-6">
              Your inquiry has been submitted successfully. Our team will
              contact you within 24 hours to discuss your project.
            </p>
            <Button
              onClick={() => setFormStep(0)}
              className="bg-white hover:bg-gray-200 text-gray-900 rounded-full px-6 py-2"
            >
              Submit Another Inquiry
            </Button>
          </div>
        );
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Your
            <span className="block text-gray-300">Future Home</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to experience the future of living? Get in touch with our team
            to discuss your capsule housing needs and start your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Get Your Quote
            </h3>

            <div className="flex flex-col justify-center items-center min-h-[300px]">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 w-full max-w-md"
              >
                {renderFormStep()}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-2xl hover:bg-gray-700/70 transition-colors duration-300 border border-gray-600"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center text-white">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {contact.title}
                      </h4>
                      <p className="text-gray-300">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h4 className="text-2xl font-bold mb-4">
                Why Choose CapsuleLiving?
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Industry-leading 10-year warranty</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Global delivery and installation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Sustainable and eco-friendly design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center bottom-0 mb-2">
        <p className="text-gray-500">
          © 2025 Desenvolvido por
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:opacity-80"
            href="https://faccindev.pro"
          >
            {" "}
            FaccinDev
          </a>
          . Todos os direitos reservados.
        </p>{" "}
      </div>
    </section>
  );
}
