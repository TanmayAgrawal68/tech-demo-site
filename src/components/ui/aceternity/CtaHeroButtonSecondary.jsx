import React from "react";

export function CtaHeroButtonSecondary({ text }) {
  return (
    <div className="flex justify-center">
      <button className="relative inline-flex h-12 sm:h-14 md:h-16 w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-foreground hover:bg-primary ease-in-out duration-300
          px-4 sm:px-6 py-1 text-xs sm:text-sm md:text-base font-medium text-primary hover:text-primary-foreground backdrop-blur-3xl"
        >
          {text}
        </span>
      </button>
    </div>
  );
}
