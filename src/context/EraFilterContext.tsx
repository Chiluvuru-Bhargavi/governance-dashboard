'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { FilterEra, ManifestoStatus } from '../types/governance';

export type DashboardTab =
  | 'Economy'
  | 'Law & Order'
  | "Women's Safety"
  | 'Defense & Forces'
  | 'Manifesto Tracker'
  | 'India vs China';

interface EraFilterContextType {
  selectedEra: FilterEra;
  setSelectedEra: (era: FilterEra) => void;
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const EraFilterContext = createContext<EraFilterContextType | undefined>(undefined);

// Semantic color tokens for eras and statuses matching executive specification
export const ERA_COLORS = {
  UPA: {
    primary: '#D97706',     // Sophisticated Amber/Gold
    secondary: '#F59E0B',
    accent: '#B45309',
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    text: 'text-amber-700 dark:text-amber-400',
    border: 'border-amber-500/30',
    fill: '#D97706',
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
    glow: 'shadow-[0_0_20px_-5px_rgba(217,119,6,0.3)]',
  },
  BJP: {
    primary: '#2563EB',     // Sharp Royal/Sapphire Blue
    secondary: '#3B82F6',
    accent: '#1D4ED8',
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-500/30',
    fill: '#2563EB',
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
    glow: 'shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)]',
  },
} as const;

export const STATUS_COLORS: Record<ManifestoStatus, { bg: string; text: string; dot: string; border: string }> = {
  'Fulfilled': {
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    text: 'text-emerald-700 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    border: 'border-emerald-500/25',
  },
  'Substantially Implemented': {
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    text: 'text-blue-700 dark:text-blue-400',
    dot: 'bg-blue-500',
    border: 'border-blue-500/25',
  },
  'Partially Met': {
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    text: 'text-amber-700 dark:text-amber-400',
    dot: 'bg-amber-500',
    border: 'border-amber-500/25',
  },
  'Unfulfilled': {
    bg: 'bg-rose-500/10 dark:bg-rose-500/15',
    text: 'text-rose-700 dark:text-rose-400',
    dot: 'bg-rose-500',
    border: 'border-rose-500/25',
  },
};

export function EraFilterProvider({ children }: { children: ReactNode }) {
  const [selectedEra, setSelectedEra] = useState<FilterEra>('ALL');
  const [activeTab, setActiveTab] = useState<DashboardTab>('Economy');
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <EraFilterContext.Provider
      value={{
        selectedEra,
        setSelectedEra,
        activeTab,
        setActiveTab,
        isDark,
        toggleTheme,
      }}
    >
      <div className={mounted && isDark ? 'dark' : ''}>
        {children}
      </div>
    </EraFilterContext.Provider>
  );
}

export function useEraFilter() {
  const context = useContext(EraFilterContext);
  if (!context) {
    throw new Error('useEraFilter must be used within an EraFilterProvider');
  }
  return context;
}
