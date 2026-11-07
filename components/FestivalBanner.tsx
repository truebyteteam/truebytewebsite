
"use client";

import { useEffect, useState } from "react";

export default function FestivalBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getIndiaDate = () => {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).formatToParts(new Date());

      const date = Object.fromEntries(
        parts.map((part) => [part.type, part.value])
      );

      return `${date.year}-${date.month}-${date.day}`;
    };

    const today = getIndiaDate();

    setVisible(
      today >= "2026-11-07" &&
      today <= "2026-11-10"
    );
  }, []);

  if (!visible) return null;

  return (
    <section
      className="relative mt-[70px] min-h-[220px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-950 via-green-800 to-green-950 text-center px-4 py-8 border-b-2 border-yellow-400"
    >
      {/* Decorative lights */}
      <div className="absolute top-2 left-5 text-2xl animate-pulse">
        🪔
      </div>

      <div className="absolute top-2 right-5 text-2xl animate-pulse">
        🪔
      </div>

      <div className="absolute bottom-2 left-1/4 text-yellow-300 animate-pulse">
        ✨
      </div>

      <div className="absolute bottom-2 right-1/4 text-yellow-300 animate-pulse">
        ✨
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-yellow-300 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
          TRUE BYTE FESTIVE CELEBRATION
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mt-2">
          🪔 Happy Diwali! 🪔
        </h2>

        <p className="text-white text-sm md:text-lg mt-3 leading-relaxed">
          Celebrate the Festival of Lights with TRUE BYTE.
          May your life be filled with happiness, prosperity,
          good health and sweetness!
        </p>

        <p className="text-yellow-200 font-semibold mt-3 text-sm md:text-base">
          Healthy Bites, Happy Life! ❤️
        </p>
      </div>
    </section>
  );
}
