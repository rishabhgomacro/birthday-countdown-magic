const BirthdayQuote = () => {
  return (
    <div
      className="max-w-2xl mx-auto text-center animate-slide-up px-6"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="relative py-12">
        {/* Decorative quote marks */}
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-8xl font-display text-primary/20 select-none leading-none">
          "
        </span>

        <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/80 italic">
          On this beautiful day, the world was blessed with someone extraordinary.
          May your journey ahead be filled with endless joy, boundless love,
          and all the magic your heart desires.
        </p>

        <p className="mt-6 font-display text-lg md:text-xl text-gradient-pink font-semibold">
          Here's to another year of being absolutely wonderful. ✨
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary/30" />
          <span className="text-primary text-2xl">🎀</span>
          <div className="h-px w-12 bg-primary/30" />
        </div>

        <p className="mt-4 font-body text-sm tracking-widest uppercase text-muted-foreground">
          With all the love in the world
        </p>
      </div>
    </div>
  );
};

export default BirthdayQuote;
