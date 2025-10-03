import React from "react";
import { Button } from "../moving-border";

export function CtaHeroButton({ text }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-secondary hover:bg-primary-foreground dark:bg-slate-900 text-primary-foreground hover:text-secondary dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {text}
      </Button>
    </div>
  );
}
