'use client';

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  HeartHandshake,
  ShieldCheck,
  Scale,
  Sparkles,
  Baby,
  Gavel,
  BookOpen,
} from 'lucide-react';
import governanceData from '../../data/comparison_data.json';
import type { GovernanceData } from '../../types/governance';
import { useEraFilter, ERA_COLORS } from '../../context/EraFilterContext';

const data = governanceData as GovernanceData;

export default function WomensSafetyChart() {
  const { selectedEra } = useEraFilter();

  const metrics = data.womens_safety.ncrb_crime_metrics;
  const enactments = data.womens_safety.statutory_enactments;

  const filteredMetrics = metrics.filter(item => {
    if (selectedEra === 'ALL') return true;
    return item.era === selectedEra;
  });

  const filteredEnactments = enactments.filter(item => {
    if (selectedEra === 'ALL') return true;
    return item.era === selectedEra;
  });

  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] relative overflow-hidden mb-10">
      {/* Chapter 4 Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 font-mono">
            CHAPTER 4 • WOMEN&apos;S SAFETY, MATERNAL HEALTH &amp; SATURATION WELFARE
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          Statutory Safeguards, NCRB Longitudinal Audit &amp; Maternal Mortality Trajectory
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 max-w-5xl font-sans">
          Longitudinal audit across NCRB Crime in India and RGI Sample Registration System (SRS). 
          Following the 2012 Delhi tragedy, the Criminal Law (Amendment) Act 2013 expanded statutory offenses and penalized police non-registration under Section 166A IPC, elevating registered case reporting. 
          Concurrently, lethal gender crimes declined: Dowry deaths contracted 27.2% from 8,455 (2014) to 6,156 (2023). 
          In maternal health, national MMR dropped from 254 to 93 per 100k live births, beating the UN Sustainable Development Goal benchmark of 100 ahead of schedule.
        </p>
      </div>

      {/* Main Grid: Comparative Charts & Enactments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (7 cols): Dual Recharts Visualizations */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Chart 1: Cruelty vs Sec 376 IPC */}
          <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/30">
            <div className="flex items-center justify-between text-xs font-semibold mb-3">
              <span className="text-slate-900 dark:text-slate-100 font-bold">
                NCRB Registered Offenses: Cruelty (Sec 498A) vs. Sec 376 IPC
              </span>
              <span className="text-[10px] font-mono-numbers text-slate-400 uppercase">NCRB Crime in India</span>
            </div>

            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={filteredMetrics} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.15} />
                  <XAxis dataKey="year" stroke="#64748b" fontSize={11} tickLine={false} className="font-mono-numbers" />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={v => `${Math.round(v / 1000)}k`} className="font-mono-numbers" />
                  <Tooltip
                    formatter={(val: any, name: any) => [
                      Number(val ?? 0).toLocaleString(),
                      name === 'cruelty_sec498a' ? 'Cruelty by Husband (Sec 498A)' : 'Sec 376 IPC Offenses',
                    ]}
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      borderColor: 'rgba(51, 65, 85, 0.8)',
                      borderRadius: '0.875rem',
                      color: '#fff',
                      fontSize: '12px',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '6px' }} />
                  <Bar dataKey="cruelty_sec498a" name="Cruelty (Sec 498A)" fill="#a855f7" radius={[6, 6, 0, 0]} maxBarSize={28} />
                  <Bar dataKey="sec376_ipc" name="Sec 376 IPC" fill="#ec4899" radius={[6, 6, 0, 0]} maxBarSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2.5 italic">
              *Over 70% of registered crimes against women concentrate in Section 498A, abduction, and Section 354 assault.
            </p>
          </div>

          {/* Chart 2: Maternal Mortality Ratio (MMR) Area/Line Chart */}
          <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/30">
            <div className="flex items-center justify-between text-xs font-semibold mb-3">
              <span className="text-slate-900 dark:text-slate-100 flex items-center gap-1.5 font-bold">
                <Baby className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                SRS Maternal Mortality Ratio (Deaths per 100,000 Live Births)
              </span>
              <span className="text-[10px] font-mono-numbers text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25 uppercase tracking-wide">
                SDG Target (100) Surpassed
              </span>
            </div>

            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={filteredMetrics} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="mmrGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#059669" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.15} />
                  <XAxis dataKey="year" stroke="#64748b" fontSize={11} tickLine={false} className="font-mono-numbers" />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} domain={[50, 280]} className="font-mono-numbers" />
                  <Tooltip
                    formatter={(val: any) => [`${val} per 100k births`, 'Maternal Mortality Ratio (MMR)']}
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      borderColor: 'rgba(51, 65, 85, 0.8)',
                      borderRadius: '0.875rem',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="mmr_per_100k_live_births"
                    name="MMR"
                    stroke="#059669"
                    strokeWidth={2.5}
                    fill="url(#mmrGradient)"
                    dot={{ r: 3.5, fill: '#059669', stroke: '#fff', strokeWidth: 1.5 }}
                    activeDot={{ r: 5.5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 font-mono-numbers tabular-nums">
              <span className="text-amber-700 dark:text-amber-400">2004–06: 254 (UPA)</span>
              <span className="text-slate-300 dark:text-slate-700">→</span>
              <span className="text-slate-600 dark:text-slate-300">2011–13: 167 (Transition)</span>
              <span className="text-slate-300 dark:text-slate-700">→</span>
              <span className="text-blue-700 dark:text-blue-400">2019–21: 93 (NDA)</span>
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): Chronological Statutory Enactments */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/30 p-5 flex flex-col h-full max-h-[520px]">
          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200/70 dark:border-slate-700/60 shrink-0">
            <Gavel className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Landmark Statutory Enactments (2004–2024)
            </h4>
          </div>

          <div className="overflow-y-auto space-y-2.5 pr-1 flex-1 custom-scrollbar">
            {filteredEnactments.map((act, idx) => {
              const isUpa = act.era === 'UPA';
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-xs shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                      {act.act_name}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 font-mono-numbers ${
                        isUpa
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {act.era} • {act.year}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {act.impact}
                  </p>
                  <span className="text-[9px] font-mono-numbers text-slate-400 uppercase tracking-wider block mt-1.5">
                    Statutory Gazette: {act.source}
                  </span>
                </div>
              );
            })}
          </div>

          {/* FTSC Disposal-Conviction Mismatch Callout */}
          <div className="mt-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-[10px] text-slate-500 dark:text-slate-400 leading-normal">
            <strong className="text-slate-900 dark:text-slate-200">Disposal-Conviction Mismatch:</strong> 774 Fast Track Special Courts (413 POCSO) resolved &gt;2.5 lakh trials; Section 176(3) of BNSS (2023) mandates videographed forensic collection to cure investigation deficits.
          </div>
        </div>

      </div>
    </div>
  );
}
