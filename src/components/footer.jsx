import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Main footer */}
      <div className="bg-teal-500 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* Logo + description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/assets/logo.png"
              alt="The Quick Laundry"
              className="h-25 mb-6"
            />
            <p className="text-sm leading-relaxed">
              The Quick Laundry, situé au plein centre de Marrakech,
              vous propose un service de nettoyage à sec, lavage et
              repassage en assurant le ramassage et livraison à domicile,
              de votre linge de maison.
              <br /><br />
              Qu’il s’agisse de vos tapis, de vos rideaux, de vos
              couettes ou encore de vos vêtements personnels.
            </p>
          </div>

          {/* Tanger */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">
              The Quick Laundry – Tanger
            </h3>

            <div className="flex items-center gap-3 mb-3 bg-white text-black px-3 py-2 rounded-md">
              <FaPhoneAlt />
              <span className="font-medium">(+212) 5 39 34 36 38</span>
            </div>

            <div className="flex items-center gap-3 mb-4 bg-white text-black px-3 py-2 rounded-md">
              <FaTruck />
              <span className="font-medium">(+212) 6 66 04 57 78</span>
            </div>

            <p className="text-sm">
              Adresse : Av. de La Résistance Res. Nafie local 6 –
              Tanger – Maroc
            </p>
          </div>

          {/* Marrakech */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4">
              The Quick Laundry – Marrakech
            </h3>

            <div className="flex items-center gap-3 mb-4 bg-white text-black px-3 py-2 rounded-md">
              <FaPhoneAlt />
              <span className="font-medium">(+212) 5 24 43 96 21</span>
            </div>

            <p className="text-sm">
              Adresse : 1, rue Lieutenant Lamure, résid. Miraflores
              Gueliz Marrakech – Maroc
            </p>
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-6 text-white items-start">
            <a
              href="#"
              aria-label="Instagram"
              className="text-2xl hover:opacity-80 transition duration-150"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-2xl hover:opacity-80 transition duration-150"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-2xl hover:opacity-80 transition duration-150"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>

        {/* Scroll to top */}
        <a
          href="#navbar"
          aria-label="Scroll to top"
          className="absolute right-8 bottom-8 w-12 h-12 bg-white text-teal-500 rounded-full
                     flex items-center justify-center shadow-lg
                     hover:scale-105 transition"
        >
          <HiArrowUp className="text-xl" />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-teal-500 text-center py-4 text-sm">
        © {year} — Made by{" "}
        <a
          href="https://bidayalab.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black transition"
        >
          bidayalab
        </a>
      </div>
    </footer>
  );
};

export default Footer;
