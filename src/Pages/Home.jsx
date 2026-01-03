import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import LaundryAboutSection from "../components/About";
import ServicesSection from "../components/Services";
import { TestimonialSlider } from "../components/ui/testimonial-slider";
import ScrollToTop from "../components/ScrollToTop";

const testimonials = [
  {
    quote: "Très professionnel, je recommande.",
    name: "Client Google",
    role: "Lil bidawi",
    rating: 4.5,
  },
  {
    quote: "Service impeccable et rapide.",
    name: "Amine alaoui",
    role: "Google Review",
    rating: 5,
  },
  {
    quote: "Très professionnel, je recommande.",
    name: "Boubker",
    role: "Google Review",
    rating: 4.5,
  },
  {
    quote: "Service impeccable et rapide.",
    name: "Ayoub",
    role: "Google Review",
    rating: 5,
  },
  {
    quote: "Très professionnel, je recommande.",
    name: "Hassane",
    role: "Google Review",
    rating: 4.5,
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LaundryAboutSection />
        <ServicesSection />
      </main>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>

          {/* Accent line */}
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-12 rounded-full" />

          {/* Slider */}
          <TestimonialSlider testimonials={testimonials} />
          
        </div>
      </section>
      <ScrollToTop />
    <Footer />
    </>
  );
};
