import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export interface Ability {
  name: string;
  type: string;
  description: string;
}

export function AbilityCard({ ability }: { ability: Ability }) {
  return (
    <Card className="bg-card/30 backdrop-blur border-border/40 hover:border-highlight/50 transition-colors group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="font-heading text-xl text-foreground group-hover:text-highlight transition-colors">
            {ability.name}
          </CardTitle>
          <span className="text-xs uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
            {ability.type}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {ability.description}
        </p>
      </CardContent>
    </Card>
  );
}
