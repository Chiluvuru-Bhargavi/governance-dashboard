'use client';

import React from 'react';
import { useEraFilter, type DashboardTab } from '../../context/EraFilterContext';
import { ShieldCheck } from 'lucide-react';

interface TabItem {
  id: DashboardTab;
  label: string;
}

const TABS: TabItem[] = [
  { id: 'Economy', label: 'Economy' },
  { id: 'Law & Order', label: 'Law & Order' },
  { id: "Women's Safety", label: "Women's Safety" },
  { id: 'Defense & Forces', label: 'Defense & Forces' },
  { id: 'Manifesto Tracker', label: 'Manifesto Tracker' },
  { id: 'India vs China', label: 'India vs China' },
];

export default function Navbar() {
  const { activeTab, setActiveTab } = useEraFilter();

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 pointer-events-none">
      {/* Floating Centered Pill-Shaped Tab Switcher */}
      <div className="pointer-events-auto bg-white/80 backdrop-blur-md border border-stone-200 rounded-full p-1.5 shadow-sm max-w-fit mx-auto mt-2 sm:mt-4 transition-all">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-none" aria-label="Dashboard Topics">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white rounded-full px-5 py-2 text-sm font-medium'
                    : 'text-stone-500 hover:text-stone-900 px-4 py-2 text-sm transition-colors'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
