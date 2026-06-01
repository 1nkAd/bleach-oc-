import Link from 'next/link';
import { characters } from '@/data/characters';
import { ThemeSetter } from '@/components/ThemeSetter';
import { getAssetPath } from '@/lib/utils';

export default function Home() {
  const charList = Object.entries(characters);

  return (
    <>
      <ThemeSetter characterId="default" />
      <main className="min-h-screen flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden bg-background">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/20 via-background to-background" />

        <div className="relative z-10 max-w-5xl w-full text-center space-y-12">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-widest text-foreground drop-shadow-xl uppercase">
              Soul Reaper
              <br />
              <span className="text-muted-foreground/50 text-4xl md:text-6xl font-serif italic">Chronicles</span>
            </h1>
            <p className="font-serif text-lg md:text-2xl text-muted-foreground tracking-wide max-w-2xl mx-auto">
              Explore the hidden lore, combat analytics, and visual archives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 pt-12 max-w-4xl mx-auto">
            {charList.map(([slug, profile]) => (
              <Link key={slug} href={`/character/${slug}`} className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 group-hover:border-foreground/50 transition-all duration-500 shadow-2xl relative">
                  <img 
                    src={getAssetPath(profile.assets.portrait)} 
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20 flex flex-col items-center bg-gradient-to-t from-background/90 to-transparent">
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-2 drop-shadow-md">
                      {profile.name}
                    </h2>
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground/80 px-3 py-1 border border-foreground/30 rounded-full backdrop-blur bg-background/50">
                      View Dossier
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
