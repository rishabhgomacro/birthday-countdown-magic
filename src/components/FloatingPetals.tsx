import { useEffect, useMemo, useCallback } from "react";

interface FloatingPetalsProps {
  count?: number;
}

const FloatingPetals = ({ count = 12 }: FloatingPetalsProps) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 8 + Math.random() * 16,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.6}px`,
            opacity: petal.opacity,
            animation: `petal-fall ${petal.duration}s linear ${petal.delay}s infinite`,
            borderRadius: "50% 0 50% 0",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
