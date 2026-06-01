'use client';
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeSetter({ characterId }: { characterId: string }) {
  const { setActiveCharacter } = useTheme();
  
  useEffect(() => {
    setActiveCharacter(characterId);
  }, [characterId, setActiveCharacter]);

  return null;
}
