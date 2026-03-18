import { useState, useCallback } from "react";

import FloatingPetals from "@/components/FloatingPetals";
import CountdownTimer from "@/components/CountdownTimer";
import BirthdayCarousel from "@/components/BirthdayCarousel";
import BirthdayQuote from "@/components/BirthdayQuote";
import birthdayBg from "@/assets/birthday-bg.jpg";

// March 19, 2026 00:00:00 IST (UTC+5:30) = March 18, 2026 18:30:00 UTC
const BIRTHDAY_DATE = new Date("2026-03-18T18:30:00.000Z");

const Index = () => {
  const [isBirthday, setIsBirthday] = useState(false);

  const handleCountdownComplete = useCallback(() => {
    setIsBirthday(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-pink overflow-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: `url(${birthdayBg})` }}
      />

      <FloatingPetals count={15} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {!isBirthday ? (
          <div className="flex flex-col items-center gap-6">
            <div className="animate-float">
              <span className="text-6xl md:text-8xl">🎁</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-pink text-center animate-slide-up">
              A Special Day Awaits
            </h1>
            <CountdownTimer
              targetDate={BIRTHDAY_DATE}
              onComplete={handleCountdownComplete}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-16 w-full">
            <div className="animate-float">
              <span className="text-6xl md:text-8xl">🎉</span>
            </div>
            <BirthdayCarousel />
            <BirthdayQuote />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
