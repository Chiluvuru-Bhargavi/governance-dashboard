'use client';

import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
} from 'recharts';
import { Info, Layers, TrendingUp, Calendar } from 'lucide-react';
import governanceData from '../../data/comparison_data.json';
import type { GovernanceData } from '../../types/governance';
import { useEraFilter, ERA_COLORS } from '../../context/EraFilterContext';

const data = governanceData as GovernanceData;

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      year: number;
      value: number;
      era: 'UPA' | 'BJP';
      source: string;
    };
  }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  const isUpa = d.era === 'UPA';

  return (
    <div className="backdrop-blur-xl bg-white/95 dark:bg-[#111827]/95 border border-slate-200/80 dark:border-slate-700/80 rounded-xl p-4 shadow-2xl text-xs max-w-xs transition-all">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-2 mb-2.5">
        <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 font-mono-numbers">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          FY{d.year}–{String(d.year + 1).slice(-2)}
        </span>
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            isUpa
              ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
              : 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/30'
          }`}
        >
          {isUpa ? 'UPA Decade' : 'NDA Decade'}
        </span>
      </div>

      <div className="space-y-1.5 mb-2.5">
        <div className="flex items-baseline justify-between">
          <span className="text-slate-500 dark:text-slate-400 text-[11px]">Real GDP Growth (2011–12):</span>
          <span
            className={`font-mono-numbers font-bold text-sm tabular-nums ${
              d.value < 0
                ? 'text-rose-600 dark:text-rose-400'
                : 'text-slate-900 dark:text-slate-100'
            }`}
          >
            {d.value > 0 ? `+${d.value.toFixed(1)}%` : `${d.value.toFixed(1)}%`}
          </span>
        </div>
        {d.year === 2020 && (
          <p className="text-[10px] text-rose-600 dark:text-rose-400 italic bg-rose-500/10 p-1.5 rounded-md border border-rose-500/20">
            *Global COVID-19 pandemic contraction year (-5.8%)
          </p>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-mono-numbers text-slate-400 dark:text-slate-500 uppercase tracking-wider">
        Source: {d.source}
      </div>
    </div>
  );
}

export default function MacroGrowthChart() {
  const { selectedEra } = useEraFilter();

  const rawGrowth = data.macroeconomics.gdp_growth_annual;
  const filteredData = rawGrowth.map(item => {
    const isVisible = selectedEra === 'ALL' || selectedEra === item.era;
    return {
      ...item,
      displayValue: isVisible ? item.value : null,
      upaValue: item.era === 'UPA' && isVisible ? item.value : null,
      bjpValue: item.era === 'BJP' && isVisible ? item.value : null,
    };
  });

  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] relative overflow-hidden mb-10">
      {/* Chapter 1 Context Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 font-mono">
            CHAPTER 1 • MACROECONOMICS, FISCAL ARCHITECTURE &amp; NATIONAL ACCOUNTS
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          National Accounts Back-Series (2004–2024) at Constant 2011–12 Prices
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 max-w-5xl font-sans">
          Comparing macroeconomic output requires reconciling the January 2015 statutory transition by the Central Statistics Office (CSO, MoSPI) from the 2004–05 base year (GDP at factor cost) to the 2011–12 base year (GDP at constant market prices, aligning with UN SNA 2008). 
          Under the harmonized 2011–12 back-series, the UPA decade recorded an average real GDP growth of <strong className="text-stone-900 font-mono tabular-nums">6.8%</strong> (compared to 7.6% under legacy factor cost). The NDA decade recorded an average real GDP growth of <strong className="text-stone-900 font-mono tabular-nums">6.0%</strong> including the FY21 COVID-19 contraction (-5.8%), and <strong className="text-stone-900 font-mono tabular-nums">7.3%</strong> excluding the pandemic shock.
        </p>
      </div>

      {/* Main Chart Area */}
      <div className="w-full h-[380px] relative">
        <ResponsiveContainer width="100%" height={380}>
          <ComposedChart data={filteredData} margin={{ top: 20, right: 30, left: -10, bottom: 5 }}>
            <defs>
              <linearGradient id="upaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={ERA_COLORS.UPA.primary} stopOpacity={0.35} />
                <stop offset="95%" stopColor={ERA_COLORS.UPA.primary} stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="bjpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={ERA_COLORS.BJP.primary} stopOpacity={0.35} />
                <stop offset="95%" stopColor={ERA_COLORS.BJP.primary} stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.15} />
            <XAxis
              dataKey="year"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              tickFormatter={val => `'${String(val).slice(-2)}`}
              className="font-mono-numbers"
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={v => `${v}%`}
              domain={[-8, 12]}
              className="font-mono-numbers"
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Zero Base Reference Line */}
            <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1} strokeDasharray="2 2" strokeOpacity={0.4} />

            {/* 2014 Transition Line mandated by Task 3 */}
            <ReferenceLine
              x={2014}
              stroke="#EF4444"
              strokeDasharray="4 4"
              strokeWidth={2}
              label={{
                value: '2014 Admin Shift',
                position: 'top',
                fill: '#EF4444',
                fontSize: 10,
                fontWeight: 700,
                fontFamily: 'JetBrains Mono, monospace',
              }}
            />

            {/* Reference areas for eras */}
            <ReferenceArea
              x1={2004}
              x2={2013}
              fill={ERA_COLORS.UPA.primary}
              fillOpacity={selectedEra === 'BJP' ? 0.005 : 0.025}
            />
            <ReferenceArea
              x1={2014}
              x2={2023}
              fill={ERA_COLORS.BJP.primary}
              fillOpacity={selectedEra === 'UPA' ? 0.005 : 0.025}
            />

            {/* UPA Area & Line */}
            <Area
              type="monotone"
              dataKey="upaValue"
              stroke={ERA_COLORS.UPA.primary}
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#upaGradient)"
              connectNulls={false}
              dot={{ r: 3.5, fill: ERA_COLORS.UPA.primary, stroke: '#fff', strokeWidth: 1.5 }}
              activeDot={{ r: 5.5, strokeWidth: 2 }}
            />

            {/* NDA Area & Line */}
            <Area
              type="monotone"
              dataKey="bjpValue"
              stroke={ERA_COLORS.BJP.primary}
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#bjpGradient)"
              connectNulls={false}
              dot={{ r: 3.5, fill: ERA_COLORS.BJP.primary, stroke: '#fff', strokeWidth: 1.5 }}
              activeDot={{ r: 5.5, strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Comparative Stat Badges below chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
        
        {/* Stat Badge 1: Real GDP Averages */}
        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Decadal GDP Averages
            </span>
            <span className="text-[10px] font-mono-numbers text-slate-400 uppercase">MoSPI 2011–12</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold font-mono-numbers tabular-nums">
            <span className="text-amber-700 dark:text-amber-400">UPA (04–14): 6.8%</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-blue-700 dark:text-blue-400">NDA (14–24): 6.0% (7.3%*)</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-normal">
            *Excludes FY21 (-5.8% COVID contraction). Growth rebounded to 8.2% in FY24.
          </p>
        </div>

        {/* Stat Badge 2: Price Stability Architecture */}
        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Inflation Regimes (RBI DBIE)
            </span>
            <span className="text-[10px] font-mono-numbers text-slate-400 uppercase">CPI Anchor</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold font-mono-numbers tabular-nums">
            <span className="text-amber-700 dark:text-amber-400">8.1% CPI-IW (10.1% peak)</span>
            <span className="text-slate-300 dark:text-slate-700">→</span>
            <span className="text-blue-700 dark:text-blue-400">5.0% CPI-Combined</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-normal">
            Statutory 6-member MPC framework established via RBI Act Amendment (2016).
          </p>
        </div>

        {/* Stat Badge 3: Highway Logistics Pace */}
        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Highway Construction (MoRTH)
            </span>
            <span className="text-[10px] font-mono-numbers text-slate-400 uppercase">km/day</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold font-mono-numbers tabular-nums">
            <span className="text-amber-700 dark:text-amber-400">12.1 km/day (FY14)</span>
            <span className="text-slate-300 dark:text-slate-700">→</span>
            <span className="text-blue-700 dark:text-blue-400">28.0–36.5 km/day Peak</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-normal">
            Total NH network expanded from 91,287 km (2014) to 1,46,145 km (2024).
          </p>
        </div>

      </div>
    </div>
  );
}
