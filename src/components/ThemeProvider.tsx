'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { characters } from '@/data/characters';

interface ThemeContextType {
  activeCharacter: string;
  setActiveCharacter: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeCharacter, setActiveCharacter] = useState<string>('adham');

  useEffect(() => {
    let primaryColor = '#05060a';
    let accentColor = '#666666';

    if (activeCharacter && activeCharacter !== 'default' && characters[activeCharacter]) {
      const theme = characters[activeCharacter].theme;
      primaryColor = theme.primaryColor;
      accentColor = theme.accentColor;
    }

    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.setAttribute('data-character', activeCharacter);
  }, [activeCharacter]);

  return (
    <ThemeContext.Provider value={{ activeCharacter, setActiveCharacter }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
