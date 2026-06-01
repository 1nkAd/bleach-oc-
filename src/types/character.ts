export interface Relationship {
  name: string;
  status: string;
  description: string;
  type: 'ally' | 'hostile' | 'cold' | 'neutral';
}

export interface CharacterProfile {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  tagline: string;
  theme: {
    primaryColor: string;
    accentColor: string;
    particleStyle: 'embers' | 'mist' | 'stars';
    fontHeading: string;
  };
  assets: {
    portrait: string;
    themeSong?: string;
  };
  dossier: {
    race: string;
    origin: string;
    ageAtDeath: string;
    affiliation: string;
    combatLevel: string;
    formerDivision?: string;
    zanpakuto: { name: string; translation?: string };
    innerHollow?: { name: string; translation?: string };
  };
  relationships: Relationship[];
  abilities: {
    name: string;
    type: string;
    description: string;
  }[];
  lore: {
    year?: string;
    title: string;
    description: string;
  }[];
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  stats: {
    label: string;
    value: number;
  }[];
}
