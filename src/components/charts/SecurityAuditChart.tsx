'use client';

import React, { useState } from 'react';
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
import {
  ShieldAlert,
  Flame,
  Building,
  CheckCircle2,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import governanceData from '../../data/comparison_data.json';
import type { GovernanceData } from '../../types/governance';
import { useEraFilter, ERA_COLORS } from '../../context/EraFilterContext';

const data = governanceData as GovernanceData;

export default function SecurityAuditChart() {
  const { selectedEra } = useEraFilter();
  const [activeTab, setActiveTab] = useState<'lwe' | 'jk_ne' | 'urban'>('lwe');

  const lwe = data.internal_security.lwe_incidents;
  const jk = data.internal_security.jk_fatalities;
  const urban = data.internal_security.urban_terror_events;

  const filteredUrban = urban.filter(event => {
    if (selectedEra === 'ALL') return true;
    return event.era === selectedEra;
  });

  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] relative overflow-hidden h-full flex flex-col justify-between">
      <div>
        {/* Chapter 2 Header & Methodological Caveats */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 font-mono">
              CHAPTER 2 • LAW, ORDER, INTERNAL SECURITY &amp; LEGAL OVERHAUL
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
            Internal Security &amp; Urban Civilian Terror Audit
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 font-sans">
            NCRB methodological audit: Reported FIR growth reflects mandatory registration under the Supreme Court&apos;s <em>Lalita Kumari (2013)</em> ruling and CCTNS digital portals, while homicide (the most reliable violent crime proxy) dropped by one-third from 3.1 to 2.0 per 100k. 
            Simultaneously, Parliament replaced colonial criminal codes (IPC, CrPC, IEA) with the Bharatiya Nyaya Sanhita (BNS), BNSS, and BSA effective July 1, 2024.
          </p>
        </div>

        {/* 3-Tab Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-slate-100/80 dark:bg-slate-800/60 rounded-xl mb-6 text-xs font-medium border border-slate-200/80 dark:border-slate-700/80 w-full sm:w-auto sm:inline-flex backdrop-blur-md">
          <button
            onClick={() => setActiveTab('lwe')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'lwe'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            <span>Tab A: Left-Wing Extremism (LWE)</span>
          </button>

          <button
            onClick={() => setActiveTab('jk_ne')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'jk_ne'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-blue-500" />
            <span>Tab B: J&amp;K &amp; North-East Accords</span>
          </button>

          <button
            onClick={() => setActiveTab('urban')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'urban'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Building className="w-3.5 h-3.5 text-amber-500" />
            <span>Tab C: Mainland Terror Log</span>
          </button>
        </div>

        {/* TAB A: LWE AUDIT */}
        {activeTab === 'lwe' && (
          <div className="space-y-5">
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={[
                    {
                      period: 'UPA (2004–14)',
                      incidents: lwe[0].incidents,
                      deaths: lwe[0].deaths,
                      districts: lwe[0].affected_districts_end_of_period,
                      era: 'UPA',
                    },
                    {
                      period: 'NDA (2014–23)',
                      incidents: lwe[1].incidents,
                      deaths: lwe[1].deaths,
                      districts: lwe[1].affected_districts_end_of_period,
                      era: 'BJP',
                    },
                  ]}
                  margin={{ top: 15, right: 20, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.15} />
                  <XAxis dataKey="period" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} className="font-mono-numbers" />
                  <Tooltip
                    formatter={(value: any, name: any) => [
                      Number(value ?? 0).toLocaleString(),
                      name === 'incidents' ? 'Violent Incidents' : 'Total Fatalities',
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
                      val === 'incidents' ? 'Violent Incidents' : 'Total Fatalities (SF + Civilians)'
                    }
                  />
                  <Bar dataKey="incidents" fill="#dc2626" radius={[6, 6, 0, 0]} maxBarSize={48} />
                  <Bar dataKey="deaths" fill="#ea580c" radius={[6, 6, 0, 0]} maxBarSize={48} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* District Shrinkage Visual Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 dark:border-amber-500/30">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                  2014 Baseline Footprint
                </span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 font-mono-numbers tabular-nums">
                  126 Districts
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  2010 Peak: 2,213 incidents, 1,005 deaths (75 CRPF in Dantewada).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1">
                  2024 Audit Outcome
                </span>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100 font-mono-numbers tabular-nums">
                  38 Districts (-70%)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  -52% incidents (7,649) and -69% fatalities (2,020) over 10 years.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/30">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                  2025–26 MHA Projections
                </span>
                <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 font-mono-numbers tabular-nums">
                  11 Districts (-91%)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Security camps inside core bastions + road &amp; telecom saturation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB B: J&K & NORTHEAST */}
        {activeTab === 'jk_ne' && (
          <div className="space-y-5">
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={[
                    {
                      period: 'UPA (2004–14)',
                      incidents: jk[0].terror_incidents,
                      fatalities: jk[0].civilian_and_sf_fatalities,
                    },
                    {
                      period: 'NDA (2014–24)',
                      incidents: jk[1].terror_incidents,
                      fatalities: jk[1].civilian_and_sf_fatalities,
                    },
                  ]}
                  margin={{ top: 15, right: 20, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.15} />
                  <XAxis dataKey="period" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} className="font-mono-numbers" />
                  <Tooltip
                    formatter={(value: any, name: any) => [
                      Number(value ?? 0).toLocaleString(),
                      name === 'incidents' ? 'J&K Terror Incidents' : 'Civilian & SF Fatalities',
                    ]}
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      borderColor: 'rgba(51, 65, 85, 0.8)',
                      borderRadius: '0.875rem',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                    formatter={(val: string) =>
                      val === 'incidents' ? 'J&K Terror Incidents' : 'Civilian & Security Fatalities'
                    }
                  />
                  <Bar dataKey="incidents" fill="#2563eb" radius={[6, 6, 0, 0]} maxBarSize={48} />
                  <Bar dataKey="fatalities" fill="#0284c7" radius={[6, 6, 0, 0]} maxBarSize={48} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Northeast Peace Accord Synthesis Box */}
            <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                  North-East Peace Accords &amp; AFSPA Rollback (&gt;9,000 Cadres Mainstreamed)
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                MHA records show a 71% drop in Northeast insurgency violence. Historic peace settlements include: Bodo Accord (4,881 cadres, Jan 2020), Bru-Reang Pact (37,000 IDPs), Karbi Anglong Accord (1,926 cadres, Sep 2021), Adivasi Accord (1,182 cadres, Sep 2022), and the landmark ULFA Accord (852 cadres, Dec 2023).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium">
                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono-numbers mb-1">
                    2014 AFSPA Baseline
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Enforced across all of Assam, Nagaland, Manipur, Tripura &amp; Meghalaya borders.
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block font-mono-numbers font-semibold mb-1">
                    2024–2026 AFSPA Status
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Revoked 100% in Tripura (2015) &amp; Meghalaya (2018); reduced to 3 districts in Assam.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB C: MAINLAND URBAN TERROR LOG */}
        {activeTab === 'urban' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="text-[11px] font-semibold uppercase tracking-wider">
                Synchronized bombings outside J&amp;K, LWE &amp; North-East
              </span>
              <span className="font-mono-numbers text-[10px] uppercase">MHA &amp; NIA Case Dossiers</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800/80">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Year / Era</th>
                    <th className="py-2.5 px-3">City / Strike Target</th>
                    <th className="py-2.5 px-3 text-right">Fatalities</th>
                    <th className="py-2.5 px-3 text-right">Injured</th>
                    <th className="py-2.5 px-3">Perpetrator Module</th>
                    <th className="py-2.5 px-3">Statutory Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono-numbers">
                  {filteredUrban.map((item, idx) => {
                    const isUpa = item.era === 'UPA';
                    return (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="py-2.5 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              isUpa
                                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/25'
                                : 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/25'
                            }`}
                          >
                            {item.year} ({item.era})
                          </span>
                        </td>
                        <td className="py-2.5 px-3 font-sans font-semibold text-slate-800 dark:text-slate-200">
                          {item.city}
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                          {item.fatalities}
                        </td>
                        <td className="py-2.5 px-3 text-right text-slate-600 dark:text-slate-400 tabular-nums">
                          {item.injured}
                        </td>
                        <td className="py-2.5 px-3 font-sans text-slate-600 dark:text-slate-300">
                          {item.module}
                        </td>
                        <td className="py-2.5 px-3 text-[10px] text-slate-400 dark:text-slate-500 uppercase">
                          {item.source}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-100">Audit Insight:</strong> During 2004–2014, recurring synchronized mass-casualty attacks occurred across New Delhi, Mumbai (2006 train blasts, 2008 26/11 siege), Jaipur, Ahmedabad, Hyderabad, and Pune. 
              Between May 2014 and 2024, zero mass-casualty synchronized bombings struck mainland metropolitan centers; isolated low-intensity blasts (such as the March 2024 Rameshwaram Cafe IED) resulted in zero fatalities and immediate NIA apprehension.
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 mt-6 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono-numbers uppercase tracking-wider">
        <span>Ministry of Home Affairs &amp; NCRB Annual Bulletins</span>
        <span>Sec. 144 / BNS Statutory Framework</span>
      </div>
    </div>
  );
}
