"use client"

import { useState } from "react"
import { Menu, X, Home, Info, Package, Activity, Briefcase, MessageSquare } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
    {
      name: "Capsules",
      href: "#capsules",
      icon: <Package className="w-5 h-5" />,
    },
    {
      name: "Activities",
      href: "#activities",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      name: "Applications",
      href: "#applications",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <MessageSquare className="w-5 h-5" />,
    },
  ]

  return (
    <>
      {/* Floating Menu Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 rounded-full shadow-2xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-16 h-16 cursor-pointer  rounded-full shadow-lg transition-all duration-300 backdrop-blur-md border border-white/20 ${
            isOpen
              ? "bg-gray-900/80 scale-110 text-white rotate-90 hover:bg-gray-900/50"
              : "bg-white/10 hover:scale-110 opacity-80 text-gray-500 hover:bg-white/20"
          }`}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white transition-transform duration-300" />
          ) : (
            <Menu className="w-8 h-8 transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu Content */}
        <div className="relative flex items-center justify-center h-full">
          <div className="w-full max-w-md px-6">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex flex-col items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white transition-all duration-300 hover:scale-105 border border-white/10 group ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : `${(navItems.length - index - 1) * 50}ms`,
                  }}
                >
                  <div className="bg-white/10 rounded-full p-3 mb-3 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
