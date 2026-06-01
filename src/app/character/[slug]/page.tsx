import { notFound } from 'next/navigation';
import { characters } from '@/data/characters';
import { DossierCard } from '@/components/DossierCard';
import { Separator } from '@/components/ui/separator';
import { ThemeSetter } from '@/components/ThemeSetter';
import { StatRing } from '@/components/StatRing';
import { LoreTimeline } from '@/components/LoreTimeline';
import { AbilityCard } from '@/components/AbilityCard';
import { GalleryCarousel } from '@/components/GalleryCarousel';

export function generateStaticParams() {
  return Object.keys(characters).map((slug) => ({
    slug,
  }));
}

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = characters[slug];

  if (!profile) {
    notFound();
  }

  return (
    <>
      <ThemeSetter characterId={slug} />
      <main className="min-h-screen pt-24 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          {/* HERO SECTION */}
          <header className="flex flex-col items-center text-center space-y-6 mb-24">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-brand shadow-[0_0_40px_rgba(var(--brand),0.3)]">
              <img 
                src={profile.assets.portrait} 
                alt={profile.name} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight text-foreground drop-shadow-lg">
                {profile.name}
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-muted-foreground italic tracking-wide">
                {profile.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {profile.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-highlight/30 bg-highlight/10 text-highlight text-sm tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl mx-auto pt-8 text-lg font-serif italic text-foreground/80 border-l-4 border-brand pl-6 text-left">
                {profile.tagline}
              </p>
            </div>
          </header>

          <Separator className="bg-border/50 mb-24" />

          {/* COMBAT STATS SECTION */}
          {profile.stats && profile.stats.length > 0 && (
            <section className="mb-24">
              <h2 className="font-heading text-3xl font-bold text-brand mb-12 text-center">Combat Analytics</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {profile.stats.map((stat, i) => (
                  <StatRing key={i} label={stat.label} value={stat.value} />
                ))}
              </div>
            </section>
          )}

          {/* DOSSIER SECTION */}
          <section className="mb-24">
            <DossierCard profile={profile} />
          </section>

          {/* ABILITIES SECTION */}
          {profile.abilities && profile.abilities.length > 0 && (
            <section className="mb-24">
              <h2 className="font-heading text-3xl font-bold text-brand mb-12 flex items-center gap-4">
                <span className="w-8 h-1 bg-highlight rounded-full" />
                Capabilities & Powers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.abilities.map((ability, i) => (
                  <AbilityCard key={i} ability={ability} />
                ))}
              </div>
            </section>
          )}

          {/* LORE TIMELINE SECTION */}
          {profile.lore && profile.lore.length > 0 && (
            <section className="mb-24">
              <h2 className="font-heading text-3xl font-bold text-brand mb-12 text-center">Chronicles</h2>
              <LoreTimeline events={profile.lore} />
            </section>
          )}

          {/* GALLERY SECTION */}
          {profile.gallery && profile.gallery.length > 0 && (
            <section className="mb-24">
              <h2 className="font-heading text-3xl font-bold text-brand mb-12 text-center">Visual Archives</h2>
              <GalleryCarousel images={profile.gallery} />
            </section>
          )}

        </div>
      </main>
    </>
  );
}
