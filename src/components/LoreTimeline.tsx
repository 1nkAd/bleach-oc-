import React from 'react';

export interface TimelineEvent {
  year?: string;
  title: string;
  description: string;
}

export function LoreTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {events.map((event, i) => (
        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-highlight group-hover:bg-highlight group-hover:text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
            <div className="w-2 h-2 rounded-full bg-current" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border/50 bg-card/30 backdrop-blur shadow-sm group-hover:border-highlight/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="font-heading text-lg font-bold text-foreground">{event.title}</h3>
              {event.year && (
                <time className="text-xs font-mono text-highlight px-2 py-1 bg-highlight/10 rounded-full mt-1 sm:mt-0">
                  {event.year}
                </time>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
