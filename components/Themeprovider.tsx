// In: components/Themeprovider.tsx (or wherever it is located)

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic'; // <-- 1. IMPORT DYNAMIC

// --- 2. DYNAMICALLY IMPORT THE NEON CURSOR COMPONENT HERE ---
const NeonCursor = dynamic(
  () => import('@/components/NeonCursor'), // Adjust path if needed
  { ssr: false }
);

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark"); // Default theme

  // Your existing theme logic...
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Fallback to system preference if no theme is saved
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      window.localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {/* --- 3. RENDER THE NEON CURSOR COMPONENT --- */}
      <NeonCursor />
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};