import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaTruck,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Main footer */}
      <div className="bg-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 items-center">

          {/* Logo + description */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/logo.png"
              alt="The Quick Laundry"
              className="h-24 mb-6"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              The Quick Laundry, situé au plein centre de Marrakech,
              vous propose un service de nettoyage à sec, lavage et
              repassage, avec ramassage et livraison à domicile de
              votre linge.
            </p>
          </div>

          {/* Contact Marrakech */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold mb-4">
              The Quick Laundry – Marrakech
            </h3>

            <div className="flex items-center gap-3 mb-3 bg-white text-black px-4 py-2 rounded-md justify-center">
              <FaPhoneAlt />
              <span className="font-medium">(+212) 5 39 34 36 38</span>
            </div>

            <div className="flex items-center gap-3 mb-4 bg-white text-black px-4 py-2 rounded-md justify-center">
              <FaTruck />
              <span className="font-medium">(+212) 6 66 04 57 78</span>
            </div>

            <p className="text-sm max-w-xs">
              Av. de La Résistance, Rés. Nafie,
              local 6 – Marrakech – Maroc
            </p>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold mb-3">Nous trouver</h3>

            <div className="relative group rounded-xl overflow-hidden border-2 border-white w-64">
              <iframe
                title="Google Map Marrakech"
                src="https://www.google.com/maps?q=Marrakech&output=embed"
                className="
                  w-full h-40
                  grayscale
                  contrast-125
                  group-hover:grayscale-0
                  transition-all duration-500
                "
                loading="lazy"
              />

              {/* Location pin overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <FaMapMarkerAlt className="text-teal-500 text-4xl drop-shadow-lg group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Social + hours */}
          <div className="flex flex-col items-center text-center gap-6">

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">Suivez-nous</h3>
              <div className="flex gap-8 justify-center">
                <a href="#" aria-label="Instagram" className="text-3xl hover:scale-110 transition">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Facebook" className="text-3xl hover:scale-110 transition">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="WhatsApp" className="text-3xl hover:scale-110 transition">
                  <AiOutlineWhatsApp />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                <FaClock />
                Horaires d’ouverture
              </h3>

              <p className="text-sm">
                Lundi – Samedi<br />
                <span className="font-semibold">08:00 – 20:00</span>
              </p>

              <p className="text-sm mt-2">
                Dimanche<br />
                <span className="font-semibold">Fermé</span>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-teal-500 text-center py-4 text-sm ">
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
