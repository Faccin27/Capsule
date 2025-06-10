"use client";

import type React from "react";

import { useEffect, useState } from "react";

export default function CustomScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = clickY / rect.height;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = percentage * docHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="custom-scroll-indicator cursor-pointer"
      onClick={handleScrollClick}
    >
      <div
        className="custom-scroll-thumb"
        style={{
          height: `${Math.max(scrollProgress, 5)}%`,
        }}
      />
    </div>
  );
}
