import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Try to use services section first
      const triggerElement =
        document.getElementById("services") ||
        document.getElementById("testimonials");

      // Fallback: show after 600px scroll
      const triggerPoint = triggerElement
        ? triggerElement.offsetTop
        : 600;

      setVisible(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed right-6 bottom-6 z-50
        w-12 h-12
        bg-white text-teal-500
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        transition-transform
      "
    >
      <HiArrowUp className="text-xl cursor-pointer" />
    </button>
  );
};

export default ScrollToTop;
