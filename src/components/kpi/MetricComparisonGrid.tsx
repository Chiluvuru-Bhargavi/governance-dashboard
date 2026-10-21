'use client';

import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Percent,
  Compass,
  Zap,
  Building2,
  Info,
  ShieldCheck,
} from 'lucide-react';
import governanceData from '../../data/comparison_data.json';
import type { GovernanceData } from '../../types/governance';
import { useEraFilter } from '../../context/EraFilterContext';

const data = governanceData as GovernanceData;

interface DeltaCardProps {
  title: string;
  metricLabel: string;
  upaValue: string;
  bjpValue: string;
  deltaSummary: string;
  deltaDirection: 'positive' | 'negative' | 'neutral';
  source: string;
  policyContext: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

function DeltaCard({
  title,
  metricLabel,
  upaValue,
  bjpValue,
  deltaSummary,
  deltaDirection,
  source,
  policyContext,
  icon,
  gradientFrom,
  gradientTo,
}: DeltaCardProps) {
  const { selectedEra } = useEraFilter();

  return (
    <div className="relative group glass-card executive-card-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden bg-white dark:bg-[#111827]/90 border border-slate-200/70 dark:border-slate-800/70 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]">
      {/* Top Accent Gradient Border */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-90`} />

      <div>
        {/* Card Header with Icon & Title */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
              {icon}
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block font-mono">
                {metricLabel}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug tracking-tight mt-0.5">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Delta Summary Pill */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full ${
              deltaDirection === 'positive'
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25'
                : deltaDirection === 'negative'
                ? 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/25'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {deltaDirection === 'positive' ? (
              <TrendingUp className="w-4 h-4" />
            ) : deltaDirection === 'negative' ? (
              <TrendingDown className="w-4 h-4" />
            ) : (
              <Info className="w-4 h-4" />
            )}
            <span className="font-mono tabular-nums">{deltaSummary}</span>
          </span>
        </div>

        {/* Dual Era Comparative Grid: 2014 Baseline vs. 2024-26 Actuals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5">
          {/* UPA Pill */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border transition-all ${
              selectedEra === 'BJP'
                ? 'opacity-30 bg-slate-50/50 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50'
                : 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/20 dark:border-amber-500/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                2014 Baseline (UPA)
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs" />
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug font-mono tabular-nums">
              {upaValue}
            </p>
          </div>

          {/* NDA Pill */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border transition-all ${
              selectedEra === 'UPA'
                ? 'opacity-30 bg-slate-50/50 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50'
                : 'bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/20 dark:border-blue-500/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                2024–26 Outcome (NDA)
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-xs" />
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug font-mono tabular-nums">
              {bjpValue}
            </p>
          </div>
        </div>

        {/* Detailed Statutory Context */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {policyContext}
        </p>
      </div>

      {/* Statutory Line Ministry Source Tag */}
      <div className="pt-3.5 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
        <span className="truncate font-mono text-xs uppercase tracking-wider" title={source}>
          {source}
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-600 font-mono">GoI Record</span>
      </div>
    </div>
  );
}

export default function MetricComparisonGrid() {
  const infra = data.macroeconomics.infrastructure_pace;
  const inflation = data.macroeconomics.inflation_average;

  const cards: DeltaCardProps[] = [
    {
      title: 'Monetary Anchor & Retail Inflation',
      metricLabel: 'Price Stability Architecture',
      upaValue: inflation.upa,
      bjpValue: inflation.bjp,
      deltaSummary: '-38% Avg CPI Contraction',
      deltaDirection: 'positive',
      source: inflation.source,
      policyContext:
        'Transitioned from multi-index WPI anchor under UPA (averaging 10.1% CPI-IW during FY09-14) to the statutory 4±2% CPI-Combined framework under Urjit Patel Committee recommendations via RBI Act amendment in 2016.',
      icon: <Percent className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-blue-500',
    },
    {
      title: 'National Highway Velocity & Network',
      metricLabel: 'Surface Transport Logistics',
      upaValue: infra.highway_km_per_day.upa,
      bjpValue: infra.highway_km_per_day.bjp,
      deltaSummary: '+2.8x Daily Construction Pace',
      deltaDirection: 'positive',
      source: infra.highway_km_per_day.source,
      policyContext:
        'Network expanded from 91,287 km to 1,46,145 km (+54,858 km). BOT toll bottlenecks resolved via Hybrid Annuity Model (HAM), Bharatmala Pariyojana, and PM Gati Shakti National Master Plan.',
      icon: <Compass className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-500',
    },
    {
      title: 'Energy Security, Solar & Civil Aviation',
      metricLabel: 'Physical Capital Stock',
      upaValue: infra.power_and_aviation.upa,
      bjpValue: infra.power_and_aviation.bjp,
      deltaSummary: '39x Solar Surge | 2x Airports',
      deltaDirection: 'positive',
      source: infra.power_and_aviation.source,
      policyContext:
        'Total power capacity climbed from 248.5 GW to 475.21 GW, cutting peak deficits from 4.2% to 0.1%. Solar climbed from 2.82 GW to 110.9 GW (and 150 GW by 2026); operational airports doubled via RCS-UDAN from 74 to 157+.',
      icon: <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-500',
    },
    {
      title: 'Banking Resolution Cycle & Scale DPI',
      metricLabel: 'Financial Formalization',
      upaValue: infra.banking_and_dpi.upa,
      bjpValue: infra.banking_and_dpi.bjp,
      deltaSummary: 'GNPA down to 2.8% | ₹200L Cr UPI',
      deltaDirection: 'positive',
      source: infra.banking_and_dpi.source,
      policyContext:
        'Post-AQR transparent recognition peaked at 11.2% in 2018; resolved via Insolvency and Bankruptcy Code (IBC 2016) and 12-bank PSB consolidation. JAM trinity scaled direct benefit transfers across 52 Cr Jan Dhan accounts.',
      icon: <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-cyan-500',
    },
  ];

  return (
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-md border border-blue-200/80 dark:border-blue-900/50">
              Macroeconomic &amp; Structural Pillars
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Key Governance Delta: 2014 Baseline vs. 2024–2026 Actuals
          </h2>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider flex items-center sm:justify-end gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Audited Against Official GoI Repositories
          </span>
        </div>
      </div>

      {/* 2x2 Grid Architecture: 2 large cards per row on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {cards.map((card, idx) => (
          <DeltaCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
