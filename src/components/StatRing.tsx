import React from 'react';

export function StatRing({ label, value, max = 100 }: { label: string, value: number, max?: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / max) * circumference;

  return (
    <div className="flex flex-col items-center justify-center space-y-2 group">
      <div className="relative flex items-center justify-center">
        {/* Background Ring */}
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-muted/30"
          />
          {/* Progress Ring */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-highlight transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(var(--color-highlight),0.5)] group-hover:drop-shadow-[0_0_12px_rgba(var(--color-highlight),0.8)]"
          />
        </svg>
        <span className="absolute font-heading text-xl font-bold text-foreground">
          {value}
        </span>
      </div>
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </div>
  );
}
