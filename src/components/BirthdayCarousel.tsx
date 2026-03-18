import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import portrait1 from "@/assets/portrait-1.jpeg";
import portrait2 from "@/assets/portrait-2.jpeg";
import portrait3 from "@/assets/portrait-3.jpeg";
import portrait4 from "@/assets/portrait-4.jpeg";
import portrait5 from "@/assets/portrait-5.jpeg";

const photos = [portrait1, portrait2, portrait3, portrait4, portrait5];

const BirthdayCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % photos.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + photos.length) % photos.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-lg mx-auto animate-slide-up">
      <h2 className="font-display text-3xl md:text-4xl text-gradient-pink font-semibold">
        Happy Birthday Anuradha! 🎂
      </h2>

      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-pink glow-pink">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`Portrait ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.1)",
              transitionDuration: "600ms",
            }}
          />
        ))}

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:bg-background/80 hover:text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:bg-background/80 hover:text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary-foreground w-6"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCarousel;
