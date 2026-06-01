'use client';
import { useTheme } from './ThemeProvider';
import { characters } from '@/data/characters';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function GlobalAudio() {
  const { activeCharacter } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const profile = activeCharacter ? characters[activeCharacter] : null;
  const audioSrc = profile?.assets?.themeSong || '';

  // Auto-play when character changes if it was already playing
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  }, [audioSrc, isPlaying]);

  if (!audioSrc) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 rounded-full bg-background/80 backdrop-blur border border-border/50 shadow-lg group transition-all hover:bg-card">
      <audio ref={audioRef} src={audioSrc} loop muted={isMuted} />
      
      <div className="px-3 overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 ease-out flex flex-col justify-center whitespace-nowrap">
        <p className="text-xs font-mono text-highlight uppercase tracking-widest leading-none mb-1">Now Playing</p>
        <p className="text-sm font-heading font-bold text-foreground leading-none truncate">
          {profile?.name} Theme
        </p>
      </div>

      <button 
        onClick={() => {
          if (isPlaying) {
            audioRef.current?.pause();
          } else {
            audioRef.current?.play();
          }
          setIsPlaying(!isPlaying);
        }}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-highlight/10 text-highlight hover:bg-highlight hover:text-background transition-colors"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
      </button>

      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
