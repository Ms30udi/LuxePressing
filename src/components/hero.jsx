import React from "react";
import {
  FaSoap,
  FaTshirt,
  FaCut,
  FaFireAlt,
  FaTruck,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[85vh] md:min-h-screen
        pt-2 md:pt-2
        flex items-center
        overflow-hidden
      "
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/image1.jfif')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-500/95" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">

          {/* Image */}
          <div className="flex justify-center md:order-2">
            <img
              src="/assets/hero_image.png"
              alt="Laundry Machine"
              className="
                w-48 sm:w-56 md:w-105
                animate-spin-slow
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              "
            />
          </div>

          {/* Text */}
          <div className="text-white text-center md:text-left md:order-1">
            <p className="text-sm md:text-2xl mb-1">
              Nous prenons soins de vos
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-5">
              vêtements !
            </h1>

            {/* Services icons */}
            <div className="flex justify-center md:justify-start gap-5 mb-10">
              {[
                { icon: FaSoap, label: "Nettoyage à sec" },
                { icon: FaFireAlt, label: "Repassage" },
                { icon: FaCut, label: "Raccommodage" },
                { icon: FaTruck, label: "Livraison" },
                { icon: FaTshirt, label: "Lavage" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-[11px]"
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-full
                      border border-white/60
                      flex items-center justify-center
                      mb-2
                    "
                  >
                    <Icon className="text-xl drop-shadow-sm" />
                  </div>
                  <span className="hidden sm:block text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow – centered */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <HiArrowDown className="text-3xl animate-bounce text-white opacity-90 hover:opacity-100 transition" />
      </a>

      {/* Rotation animation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
