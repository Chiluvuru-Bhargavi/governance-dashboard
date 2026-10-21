'use client';

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Shield, Plane, Cpu, Radio, Award, Compass, ExternalLink } from 'lucide-react';
import governanceData from '../../data/comparison_data.json';
import type { GovernanceData } from '../../types/governance';
import { useEraFilter, ERA_COLORS } from '../../context/EraFilterContext';

const data = governanceData as GovernanceData;

export default function DefenseCapexChart() {
  const { selectedEra } = useEraFilter();

  const capex = data.defense_intelligence.defense_capex_trend;
  const procurements = data.defense_intelligence.key_procurements;
  const intelReforms = data.defense_intelligence.intel_agencies_reforms;

  const filteredCapex = capex.filter(item => {
    if (selectedEra === 'ALL') return true;
    return item.era === selectedEra;
  });

  const filteredProcurements = procurements.filter(item => {
    if (selectedEra === 'ALL') return true;
    return item.era === selectedEra;
  });

  const filteredReforms = intelReforms.filter(item => {
    if (selectedEra === 'ALL') return true;
    return item.era === selectedEra;
  });

  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] relative overflow-hidden h-full flex flex-col justify-between">
      <div>
        {/* Chapter 3 Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 font-mono">
              CHAPTER 3 • ARMED FORCES, DEFENCE MODERNIZATION &amp; BORDER INTEGRITY
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
            Capital Outlay, Indigenous Production &amp; Defence Exports Surge
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 font-sans">
            MoD Demand for Grants audit shows a structural transition from import deadlock and capital fund surrender toward Aatmanirbhar Bharat indigenisation. 
            Capital outlay on Defence Services expanded from ₹79,125 Cr (FY14) to ₹1,80,000 Cr (FY26), with 75% (₹1.11 Lakh Cr) ring-fenced for domestic industry. 
            Annual defence exports surged 55-fold from ₹686 Cr to ₹38,424 Cr across 85+ nations.
          </p>
        </div>

        {/* Main Grouped Bar Chart */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mb-2 font-mono-numbers">
            <span className="text-[11px] uppercase tracking-wider">Values in ₹ Crore (Union Budget, DDP &amp; PIB Records)</span>
            <span className="text-[11px] uppercase tracking-wider">FY 2013–14 to FY 2025–26</span>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={filteredCapex}
                margin={{ top: 15, right: 15, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.15} />
                <XAxis dataKey="fiscal_year" stroke="#64748b" fontSize={11} tickLine={false} className="font-mono-numbers" />
                <YAxis
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={val => `₹${Math.round(val / 1000)}k Cr`}
                  className="font-mono-numbers"
                />
                <Tooltip
                  formatter={(val: any, name: any) => [
                    `₹${Number(val ?? 0).toLocaleString()} Cr`,
                    name === 'capital_outlay_cr'
                      ? 'Defence Capital Outlay'
                      : name === 'indigenous_production_cr'
                      ? 'Indigenous Production Value'
                      : 'Defence Exports Value',
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
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                  formatter={(val: string) =>
                    val === 'capital_outlay_cr'
                      ? 'Capital Outlay (Modernization)'
                      : val === 'indigenous_production_cr'
                      ? 'Indigenous Production (DDP)'
                      : 'Annual Defence Exports'
                  }
                />
                <Bar dataKey="capital_outlay_cr" fill="#2563EB" radius={[6, 6, 0, 0]} maxBarSize={30} />
                <Bar dataKey="indigenous_production_cr" fill="#059669" radius={[6, 6, 0, 0]} maxBarSize={30} />
                <Bar dataKey="defence_exports_cr" fill="#D97706" radius={[6, 6, 0, 0]} maxBarSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Two Scrollable Cards for Procurements and Intelligence Reforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card 1: Key Procurements & Platforms */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/30 p-4 flex flex-col h-[320px]">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200/70 dark:border-slate-700/60 shrink-0">
              <Plane className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                Strategic Procurements &amp; Tri-Service Inductions
              </h4>
            </div>

            <div className="overflow-y-auto space-y-2.5 pr-1.5 flex-1 custom-scrollbar">
              {filteredProcurements.map((proc, idx) => {
                const isUpa = proc.era === 'UPA';
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-xs shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                        {proc.platform}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 font-mono-numbers ${
                          isUpa
                            ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                            : 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/30'
                        }`}
                      >
                        {proc.era} • {proc.year}
                      </span>
                    </div>
                    <span className="inline-block text-[10px] font-mono-numbers text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md mb-1.5 border border-indigo-500/20">
                      {proc.type}
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                      {proc.status}
                    </p>
                    <span className="text-[9px] font-mono-numbers text-slate-400 uppercase tracking-wider block mt-1.5">
                      Ref: {proc.source}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Intelligence Agency Reforms & Statutory Architecture */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/30 p-4 flex flex-col h-[320px]">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200/70 dark:border-slate-700/60 shrink-0">
              <Radio className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                Strategic Intelligence Reforms (NIA, NATGRID, MAC, NTRO)
              </h4>
            </div>

            <div className="overflow-y-auto space-y-2.5 pr-1.5 flex-1 custom-scrollbar">
              {filteredReforms.map((item, idx) => {
                const isUpa = item.era === 'UPA';
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-xs shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                        {item.agency}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 font-mono-numbers ${
                          isUpa
                            ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                            : 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/30'
                        }`}
                      >
                        {item.era} • {item.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                      {item.reform}
                    </p>
                    <span className="text-[9px] font-mono-numbers text-slate-400 uppercase tracking-wider block mt-1.5">
                      Statutory Basis: {item.source}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Doctrinal Context: Border Infrastructure & Veteran Welfare */}
      <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Border Roads Organisation (BRO) Velocity
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
            BRO road construction paced at 632 km/yr (2010–15) on ~₹2,000 Cr budget; accelerated to 1,500 km/yr (FY26) on ₹16,690 Cr budget. Completed 9.02-km Atal Tunnel, 13,000-ft Sela Tunnel, and Mudh-Nyoma 13,700-ft fighter airbase.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-1">
            <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Veteran Welfare &amp; Personnel Restructuring
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
            One Rank One Pension (OROP) formally notified in Nov 2015 (&gt;₹1.07 Lakh Cr disbursed across 25.13 lakh pensioners). Chief of Defence Staff (CDS) created in 2019 alongside Agnipath recruitment restructuring.
          </p>
        </div>
      </div>
    </div>
  );
}
