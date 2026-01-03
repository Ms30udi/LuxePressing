import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes nous", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Determine active link based on route
  const getActive = (item) => {
    if (item.href === "/") return location.pathname === "/";
    if (item.href === "/contact") return location.pathname === "/contact";
    return false;
  };

  return (
    <nav
      className="relative w-full z-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/image1.jfif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-500/95" />

      {/* Navbar content */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <a href="/" className="flex items-center mr-auto">
          <img
            src="/assets/logo.png"
            alt="The Quick Laundry"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-20 text-white font-medium ml-auto">
          {links.map((item) => {
            const isActive = getActive(item);

            return (
              <a
                key={item.label}
                href={item.href}
                className="relative group"
              >
                <span className="relative z-10 text-white/90 group-hover:text-white transition whitespace-nowrap">
                  {item.label}
                </span>

                {/* Hover / active dot */}
                <span
                  className={`absolute left-1/2 -bottom-3 h-2 w-2 rounded-full bg-white
                  -translate-x-1/2 transition-transform duration-300
                  ${
                    isActive
                      ? "scale-100"
                      : "scale-0 group-hover:scale-100"
                  }`}
                />
              </a>
            );
          })}

          {/* CTA */}
          <a
            href="/contact"
            className="border border-white text-white px-6 py-2 rounded-md
                       font-semibold hover:bg-white hover:text-black
                       transition duration-150 whitespace-nowrap"
          >
            Planifier un ramassage
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-4xl ml-auto"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-teal-500/95
        transition-all duration-300
        ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-white font-medium">
          {links.map((item) => {
            const isActive = getActive(item);

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="relative text-lg"
              >
                {item.label}

                {isActive && (
                  <span className="absolute left-1/2 -bottom-3 h-2 w-2 rounded-full bg-white -translate-x-1/2" />
                )}
              </a>
            );
          })}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-white px-6 py-2 rounded-md font-semibold"
          >
            Planifier un ramassage
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
