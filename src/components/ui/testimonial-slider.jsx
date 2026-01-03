import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "../../lib/utils";

/* ---------- Star rating with half support ---------- */
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = rating >= star;
        const isHalf = rating >= star - 0.5 && rating < star;

        return (
          <Star
            key={star}
            className={cn(
              "h-4 w-4",
              isFull
                ? "text-yellow-400 fill-yellow-400"
                : isHalf
                ? "text-yellow-400 fill-yellow-400 opacity-50"
                : "text-gray-300"
            )}
          />
        );
      })}
    </div>
  );
};

/* ---------- Initial Avatar ---------- */
const InitialAvatar = ({ name }) => {
  return (
    <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold">
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export const TestimonialSlider = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const t = testimonials[index];

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* SLIDER AREA — FIXED HEIGHT */}
      <div className="relative h-[220px] md:h-[200px]">
        {/* Decorative back card (does NOT affect layout) */}
        <div
          aria-hidden
          className="
            absolute inset-0
            translate-y-5 scale-[0.97]
            bg-white/70 rounded-2xl shadow-lg
            pointer-events-none
          "
        />

        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="
              absolute inset-0
              bg-white rounded-2xl shadow-xl
              p-6
              flex flex-col justify-center
            "
          >
            <Quote className="absolute top-4 left-4 text-teal-500/20" />

            <div className="flex items-center gap-4 mb-4">
              <InitialAvatar name={t.name} />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
                <StarRating rating={t.rating} />
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              “{t.quote}”
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS — OUTSIDE HEIGHT-LOCKED AREA */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="text-teal-500 hover:scale-110 transition"
          aria-label="Previous review"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="text-teal-500 hover:scale-110 transition"
          aria-label="Next review"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
