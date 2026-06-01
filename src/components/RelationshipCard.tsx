import React from 'react';
import { Relationship } from '@/types/character';

export function RelationshipCard({ relationship }: { relationship: Relationship }) {
  const getStatusColor = (type: string) => {
    switch (type) {
      case 'hostile':
        return 'text-red-500 border-red-500/50 bg-red-500/10';
      case 'cold':
        return 'text-blue-400 border-blue-400/50 bg-blue-400/10';
      case 'ally':
        return 'text-green-500 border-green-500/50 bg-green-500/10';
      default:
        return 'text-foreground border-border/50 bg-card/50';
    }
  };

  return (
    <div className={`p-6 rounded-xl border backdrop-blur-sm ${getStatusColor(relationship.type)} transition-all hover:scale-[1.02] duration-300`}>
      <div className="flex flex-col space-y-2 mb-4">
        <h3 className="font-heading text-xl font-bold">{relationship.name}</h3>
        <span className="text-sm font-medium opacity-80 uppercase tracking-widest">{relationship.status}</span>
      </div>
      <p className="text-sm/relaxed opacity-90 font-serif">{relationship.description}</p>
    </div>
  );
}
