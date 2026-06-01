import { CharacterProfile } from '../types/character';

export const adhamProfile: CharacterProfile = {
  id: 'adham',
  name: 'Adham',
  subtitle: 'Soul Reaper — Original Character',
  tags: ['Vizard', 'Quincy Bloodline', "Urahara's Student"],
  tagline: '"A kid who just wanted to make friends and somehow ended up carrying the weight of what a more just world might look like."',
  theme: {
    primaryColor: '#05060a',
    accentColor: '#d97706', // amber
    particleStyle: 'embers',
    fontHeading: 'Cinzel, serif',
  },
  assets: {
    portrait: '/images/hero_portrait.png',
  },
  dossier: {
    race: 'Shinigami / Vizard / Latent Quincy',
    origin: 'Human World → Rukongai → Seireitei',
    ageAtDeath: '~20 years',
    affiliation: 'Urahara Shop Exile Group',
    combatLevel: 'Captain-class+',
    formerDivision: '12th Division',
    zanpakuto: { name: 'Kurokiba', translation: 'Black Fang' },
    innerHollow: { name: 'Nakigara', translation: 'Empty Husk' },
  },
  relationships: [
    {
      name: 'Sōsuke Aizen',
      status: 'Deep Hatred',
      type: 'hostile',
      description: 'The architect of everything that went wrong. Adham\'s hatred for Aizen isn\'t loud — it\'s structural...'
    },
    {
      name: 'Kisuke Urahara',
      status: 'Mentor / Deep Respect',
      type: 'ally',
      description: 'The standard Adham measures himself against without ever saying so...'
    }
  ],
  abilities: [
    {
      name: 'Shunpo Mastery',
      type: 'Hoho',
      description: "Adham's speed is his most refined attribute. He moves with a quiet efficiency, minimizing wasted motion."
    },
    {
      name: 'Kurokiba (Black Fang)',
      type: 'Shikai',
      description: 'The sealed form is a standard katana. Upon release, it transforms into an aggressively curved, black-bladed nodachi. The blade is abnormally heavy, carrying the weight of his latent Hollow reiatsu.'
    },
    {
      name: 'Incomplete Bankai',
      type: 'Bankai',
      description: "Stable and functional, but incomplete. It feels like a translation of something that hasn't been fully written yet, likely tied to the Quincy blood running dormant in his soul."
    },
    {
      name: 'Hollow Mask',
      type: 'Hollowfication',
      description: 'A mask that splits down the centre cleanly. The left side is black (Nakigara), jagged and feral. The right side is bone-white with precise silver-grey geometric linework, a manifestation of his latent Quincy nature.'
    }
  ],
  lore: [
    {
      title: 'Origins: The Lie He Lived In',
      description: "Adham was born into quiet wealth. His parents presented themselves as successful merchants — refined, private, and oddly cautious about who they let near their home. He never questioned it. What he didn't know was that the comfort was a cover. His parents were Echt Quincy — purebloods — who had severed ties with the Wandenreich and gone into hiding rather than serve under Yhwach."
    },
    {
      title: 'Soul Society: The Slow Climb',
      description: 'He died around the age of twenty and ended up in the Rukongai, then the Academy, then — eventually — under the wing of Kisuke Urahara, Captain of the 12th Division. Training under Urahara was equal parts enlightening and exhausting. Shikai took him longer than most. What nobody expected was Bankai. Roughly a year after achieving Shikai, he manifested it.'
    },
    {
      title: 'Hollowfication: The Turning Point',
      description: 'Before the exile, there was the incident. Adham was among the Soul Reapers subjected to Hollowfication — the same wave that created the other Visoreds. He survived it. Learned, eventually and painfully, to coexist with his inner Hollow (Nakigara) — to wear the mask without being consumed by it.'
    },
    {
      title: 'Aizen: The Hatred',
      description: "Aizen had engineered the whole thing. The Hollowfication, the framing, the exile — all of it traced back to him. What Adham feels toward Aizen is not the hot, dramatic anger some people carry. It's something deeper and worse. It's hate. The quiet kind."
    },
    {
      title: 'Exile',
      description: 'When Urahara was framed and exiled from Soul Society, Adham left with him. He followed him to the human world and built a new kind of life in the shadow of Urahara Shop.'
    }
  ],
  gallery: [
    { src: '/hero2.png', alt: 'Adham Sealed Form' }
  ],
  stats: [
    { label: 'Zanjutsu', value: 95 },
    { label: 'Hakuda', value: 85 },
    { label: 'Hoho', value: 98 },
    { label: 'Kido', value: 60 },
    { label: 'Reiatsu', value: 100 }
  ]
};

export const soukiProfile: CharacterProfile = {
  id: 'souki',
  name: 'Souki Hirose',
  subtitle: 'Soul Reaper — Original Character',
  tags: ['Captain', 'Nobility'],
  tagline: '"Some placeholder tagline for Souki."',
  theme: {
    primaryColor: '#0a0f18',
    accentColor: '#3b82f6', // blue
    particleStyle: 'mist',
    fontHeading: 'Cinzel, serif',
  },
  assets: {
    portrait: '/images/souki_portrait.png',
  },
  dossier: {
    race: 'Shinigami',
    origin: 'Seireitei',
    ageAtDeath: 'Unknown',
    affiliation: 'Gotei 13',
    combatLevel: 'Captain-class',
    zanpakuto: { name: 'Unknown', translation: 'Unknown' },
  },
  relationships: [],
  abilities: [
    {
      name: 'Shunpo Master',
      type: 'Hoho',
      description: 'Extremely fast and precise movements, allowing her to keep pace with the fastest Captains.'
    },
    {
      name: 'Kido Expert',
      type: 'Kido',
      description: 'Capable of using high-level Bakudo and Hado spells without incantation.'
    }
  ],
  lore: [
    {
      title: 'Academy Days',
      description: 'Graduated at the top of her class in the Shin\'o Academy, excelling particularly in Kido and Zanjutsu.'
    },
    {
      title: 'Joining the 2nd Division',
      description: 'Joined the Onmitsukido under Soi Fon, quickly rising through the ranks due to her ruthless efficiency.'
    }
  ],
  gallery: [
    { src: '/images/souki_portrait.png', alt: 'Souki Hirose' }
  ],
  stats: [
    { label: 'Zanjutsu', value: 90 },
    { label: 'Hakuda', value: 75 },
    { label: 'Hoho', value: 85 },
    { label: 'Kido', value: 95 },
    { label: 'Reiatsu', value: 88 }
  ]
};

export const characters: Record<string, CharacterProfile> = {
  adham: adhamProfile,
  souki: soukiProfile,
};
