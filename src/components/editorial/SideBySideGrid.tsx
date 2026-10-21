'use client';

import React from 'react';

export interface ComparisonItem {
  id: string;
  categoryEyebrow: string;
  metricTitle: string;
  upa: {
    value: string;
    subtext?: string;
    narrative: string;
    source: string;
  };
  nda: {
    value: string;
    subtext?: string;
    narrative: string;
    source: string;
  };
}

interface SideBySideGridProps {
  items: ComparisonItem[];
}

export default function SideBySideGrid({ items }: SideBySideGridProps) {
  return (
    <div className="space-y-8">
      {items.map(item => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* ========================================================
              LEFT COLUMN: UPA (2004–2014)
             ======================================================== */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.06)] transition-all">
            <div>
              {/* Top Banner inside Left Card: Prominently displays "2004–2014" and "UPA" in elegant serif font */}
              <div className="flex items-baseline justify-between border-b border-stone-100 pb-4 mb-6">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                    UPA
                  </span>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 font-sans mt-0.5">
                    United Progressive Alliance
                  </span>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-stone-500 font-normal">
                  2004–2014
                </span>
              </div>

              {/* Eyebrow & Headline */}
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-sans">
                {item.categoryEyebrow}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-4 leading-snug">
                {item.metricTitle}
              </h3>

              {/* Primary Value */}
              <div className="my-6 p-5 rounded-2xl bg-[#FBF9F6] border border-stone-100">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-stone-900 tracking-tight tabular-nums">
                  {item.upa.value}
                </div>
                {item.upa.subtext && (
                  <div className="text-xs font-medium text-stone-500 mt-1.5 font-sans">
                    {item.upa.subtext}
                  </div>
                )}
              </div>

              {/* Policy Narrative */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {item.upa.narrative}
              </p>
            </div>

            {/* Source Citation */}
            <div className="pt-6 mt-8 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono tracking-wider uppercase">
              <span>Official Record</span>
              <span className="truncate max-w-[280px]" title={item.upa.source}>
                {item.upa.source}
              </span>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: NDA (2014–2024)
             ======================================================== */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.06)] transition-all">
            <div>
              {/* Top Banner inside Right Card: Prominently displays "2014–2024" and "NDA" in elegant serif font */}
              <div className="flex items-baseline justify-between border-b border-stone-100 pb-4 mb-6">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                    NDA
                  </span>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 font-sans mt-0.5">
                    National Democratic Alliance
                  </span>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-stone-500 font-normal">
                  2014–2024
                </span>
              </div>

              {/* Eyebrow & Headline */}
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-sans">
                {item.categoryEyebrow}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-4 leading-snug">
                {item.metricTitle}
              </h3>

              {/* Primary Value */}
              <div className="my-6 p-5 rounded-2xl bg-[#FBF9F6] border border-stone-100">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-stone-900 tracking-tight tabular-nums">
                  {item.nda.value}
                </div>
                {item.nda.subtext && (
                  <div className="text-xs font-medium text-stone-500 mt-1.5 font-sans">
                    {item.nda.subtext}
                  </div>
                )}
              </div>

              {/* Policy Narrative */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                {item.nda.narrative}
              </p>
            </div>

            {/* Source Citation */}
            <div className="pt-6 mt-8 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono tracking-wider uppercase">
              <span>Official Record</span>
              <span className="truncate max-w-[280px]" title={item.nda.source}>
                {item.nda.source}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
