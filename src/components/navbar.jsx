import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { AiOutlineAlignRight } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const links = [
    { label: "Accueil", href: "/" },
    { label: "Qui sommes nous", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Tarifs", href: "#tarifs" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (href) => {
        if (href === "/") return location.pathname === "/";
        return false;
    };

    return (
        <nav
            id="navbar"
            className="
        absolute top-0 left-0 w-full z-50
         bg-transparent
      "
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

                {/* Logo — LEFT */}
                <a href="/" className="flex items-center">
                    <img
                        src="/assets/logo.png"
                        alt="The Quick Laundry"
                        className="h-22 w-auto"
                    />
                </a>

                {/* Centered links */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div
                        className="
      relative px-10 py-3 rounded-full
      bg-white/10 backdrop-blur-md
      group
    "
                    >
                        {/* Dynamic border */}
                        <span
                            className="
        pointer-events-none
        absolute inset-0 rounded-full
        border border-white/80
        opacity-0 scale-95
        transition-all duration-300
        group-hover:opacity-100 group-hover:scale-100
      "
                        />

                        <div className="relative z-10 flex gap-14">
                            {links.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`
    whitespace-nowrap font-medium transition-colors duration-200
    ${isActive(item.href) ? "text-white" : "text-white/80 hover:text-white"}
  `}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>



                {/* CTA / Hamburger — RIGHT */}
                <div className="flex items-center ml-auto">
                    {/* Desktop CTA */}
                    <a
                        href="/contact"
                        className="
              hidden md:inline-block
              border border-white/80
              text-white px-6 py-2 rounded-md
              font-semibold
              hover:bg-white hover:text-teal-500
              transition duration-200
              whitespace-nowrap
            "
                    >
                        Planifier un ramassage
                    </a>

                    {/* Mobile button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-4xl ml-4"
                    >
                        {menuOpen ? <HiX /> : <AiOutlineAlignRight />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`
          md:hidden bg-teal-500/90 backdrop-blur-md
          transition-all duration-300
          ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
            >
                <div className="flex flex-col items-center gap-6 py-8 text-white font-medium">
                    {links.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="relative text-lg"
                        >
                            {item.label}

                            {isActive(item.href) && (
                                <span className="absolute left-1/2 -bottom-3 h-2 w-2 rounded-full bg-white -translate-x-1/2" />
                            )}
                        </a>
                    ))}
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
