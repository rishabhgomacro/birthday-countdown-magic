import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const tl = calculateTimeLeft();
      if (!tl) {
        clearInterval(timer);
        onComplete();
      }
      setTimeLeft(tl);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="font-display text-2xl md:text-3xl text-foreground/80 animate-slide-up">
        Something special is coming...
      </h2>

      <div className="flex gap-4 md:gap-8">
        {units.map((unit, i) => (
          <div
            key={unit.label}
            className="flex flex-col items-center animate-slide-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="relative w-20 h-24 md:w-28 md:h-32 rounded-2xl bg-card shadow-pink flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-500" />
              <span className="font-display text-4xl md:text-5xl font-bold text-gradient-pink relative z-10 transition-transform duration-300 group-hover:scale-110">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-3 text-sm font-body tracking-widest uppercase text-muted-foreground">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
