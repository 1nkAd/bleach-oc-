import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CharacterProfile } from '@/types/character';

export function DossierCard({ profile }: { profile: CharacterProfile }) {
  const { dossier } = profile;

  return (
    <Card className="bg-card/50 backdrop-blur-md border-border/50 shadow-lg relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-brand to-transparent" />
      <CardHeader>
        <CardTitle className="font-heading text-2xl tracking-widest text-brand flex items-center gap-3">
          <div className="w-2 h-8 bg-highlight" />
          Dossier
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Race</p>
          <p className="font-medium text-foreground">{dossier.race}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Origin</p>
          <p className="font-medium text-foreground">{dossier.origin}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Age at Death</p>
          <p className="font-medium text-foreground">{dossier.ageAtDeath}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Combat Level</p>
          <Badge variant="outline" className="text-highlight border-highlight/50 bg-highlight/10">
            {dossier.combatLevel}
          </Badge>
        </div>
        {dossier.formerDivision && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Former Division</p>
            <p className="font-medium text-foreground">{dossier.formerDivision}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
