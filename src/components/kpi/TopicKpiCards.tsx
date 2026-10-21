'use client';

import React from 'react';
import {
  TrendingDown,
  TrendingUp,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Bomb,
  HeartHandshake,
  Heart,
  Scale,
  Crosshair,
  Compass,
  FileCheck,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { useEraFilter } from '../../context/EraFilterContext';
import governanceData from '../../data/comparison_data.json';
import type { GovernanceData } from '../../types/governance';

const data = governanceData as GovernanceData;

interface TopicCardProps {
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

function TopicCard({
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
}: TopicCardProps) {
  const { selectedEra } = useEraFilter();

  return (
    <div className="relative group glass-card executive-card-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden bg-white dark:bg-[#111827]/90 border border-slate-200/70 dark:border-slate-800/70 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]">
      {/* Top Accent Gradient Line */}
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

        {/* Dual Era Comparative Grid: 2014 Baseline vs. 2024-26 Outcome */}
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

// ----------------------------------------------------
// Law & Order KPI Cards: 2x2 Grid Architecture
// ----------------------------------------------------
export function LawOrderKpiCards() {
  const sec = data.internal_security;
  const lweUpa = sec.lwe_incidents.find(i => i.era === 'UPA')!;
  const lweBjp = sec.lwe_incidents.find(i => i.era === 'BJP')!;
  const jkUpa = sec.jk_fatalities.find(i => i.era === 'UPA')!;
  const jkBjp = sec.jk_fatalities.find(i => i.era === 'BJP')!;

  const cards: TopicCardProps[] = [
    {
      title: 'Left-Wing Extremism (Red Corridor)',
      metricLabel: 'Territorial Sovereignty',
      upaValue: `${lweUpa.affected_districts_end_of_period} Districts | ${lweUpa.deaths} Deaths`,
      bjpValue: `11 Districts (2026) | ${lweBjp.deaths} Deaths`,
      deltaSummary: '-91% District Footprint | -69% Deaths',
      deltaDirection: 'positive',
      source: lweBjp.source,
      policyContext:
        'Red Corridor shrank from 126 districts across 10 states in 2014 to 38 in 2024, and 11 in early 2026. Annual LWE fatalities fell 90% from peak of 1,005 (2010) to 98 (2022).',
      icon: <ShieldAlert className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-amber-500',
    },
    {
      title: 'Mainland Coordinated Urban Bombings',
      metricLabel: 'Citizen Counter-Terror Protection',
      upaValue: '750+ Deaths across 10+ Major Cities',
      bjpValue: '0 Coordinated Civilian Bombings',
      deltaSummary: '100% Elimination of Coordinated Blasts',
      deltaDirection: 'positive',
      source: 'MHA Incident Dossiers & NIA Records',
      policyContext:
        '2004–2014 witnessed serial blasts in Mumbai (2006, 2008, 2011), Delhi (2005, 2008, 2011), Hyderabad (2007, 2013), Jaipur, Bengaluru, Ahmedabad, and Varanasi. Zero synchronized bombings post-2014.',
      icon: <Bomb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-blue-500',
    },
    {
      title: 'Jammu & Kashmir Security Architecture',
      metricLabel: 'Internal Conflict Resolution',
      upaValue: `${jkUpa.terror_incidents} Incidents | ${jkUpa.civilian_and_sf_fatalities} Fatalities`,
      bjpValue: `${jkBjp.terror_incidents} Incidents | ${jkBjp.civilian_and_sf_fatalities} Fatalities`,
      deltaSummary: '-70% Incidents | -69% Fatalities',
      deltaDirection: 'positive',
      source: jkBjp.source,
      policyContext:
        'Post-Article 370 revocation (August 2019), organized stone-pelting dropped to zero. Terror financing dismantled via NIA probes, tourist arrivals exceeded 2.11 Crore in 2023, and assembly elections conducted peacefully.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-500',
    },
    {
      title: 'Northeast Insurgency & AFSPA Rollback',
      metricLabel: 'Borderland Integration',
      upaValue: 'AFSPA across Assam, Nagaland, Manipur, Tripura',
      bjpValue: '12 Accords | 9,000+ Surrenders | AFSPA Revoked in 85% Areas',
      deltaSummary: '-71% Incidents | -86% Civilian Deaths',
      deltaDirection: 'positive',
      source: 'MHA NE Peace Process Dossier (2026)',
      policyContext:
        'Historic peace accords with Bodo (2020), Karbi (2021), Adivasi (2022), and ULFA (2023) led to surrender of 9,000+ cadres. AFSPA completely repealed in Tripura (2015) and Meghalaya (2018), and reduced to 3 districts in Assam.',
      icon: <Compass className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-cyan-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
      {cards.map((card, idx) => (
        <TopicCard key={idx} {...card} />
      ))}
    </div>
  );
}

// ----------------------------------------------------
// Women's Safety KPI Cards: 2x2 Grid Architecture
// ----------------------------------------------------
export function WomensSafetyKpiCards() {
  const cards: TopicCardProps[] = [
    {
      title: 'Maternal Mortality Ratio (MMR)',
      metricLabel: 'Maternal Health Saturation',
      upaValue: '254 per 100,000 live births (2004–06)',
      bjpValue: '93 per 100,000 live births (2019–21)',
      deltaSummary: '-63% Decline (UN SDG 3.1 Achieved)',
      deltaDirection: 'positive',
      source: 'RGI Sample Registration System (SRS) Bulletins',
      policyContext:
        'Sustained maternal mortality reduction from 254 to 97 in 2018-20, reaching 93 in 2019-21. India surpassed the UN Sustainable Development Goal target of <70/100,000 in 8 key states through institutional deliveries.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-pink-500',
    },
    {
      title: 'Reporting Willingness vs Registration',
      metricLabel: 'Crime Reporting Dynamics',
      upaValue: '1,54,333 (2004) → 3,37,922 (2014)',
      bjpValue: '4,05,326 (2019) → 4,48,211 (2023)',
      deltaSummary: 'Mandatory FIR Registration post-Nirbhaya',
      deltaDirection: 'neutral',
      source: 'NCRB Crime in India (2004–2023)',
      policyContext:
        'Post-2012 criminal amendments mandated statutory registration of all female complaints under Section 166A IPC. Section 498A (Cruelty by Husband/Relatives) consistently represents >30% of total reported crimes.',
      icon: <Scale className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-purple-500',
    },
    {
      title: 'Fast Track Special Courts (FTSCs)',
      metricLabel: 'Expedited Justice Infrastructure',
      upaValue: 'Ad-hoc Fast Track Courts without Dedicated Mandate',
      bjpValue: '750+ Dedicated FTSCs including 400+ POCSO Courts',
      deltaSummary: '750+ Dedicated Fast Track Courts',
      deltaDirection: 'positive',
      source: 'Ministry of Law and Justice Disclosures',
      policyContext:
        'Centrally Sponsored Scheme launched post-2018 Criminal Law Amendment operationalized 750+ FTSCs for rape and POCSO cases, disposing of over 2.5 lakh trials under time-bound statutory targets.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-500',
    },
    {
      title: 'Institutional Crisis Architecture',
      metricLabel: 'Integrated Support Grid',
      upaValue: 'Fragmented NGO-led Helplines & Police Cells',
      bjpValue: '700+ One Stop Centres (Sakhi) + 112 ERSS',
      deltaSummary: '700+ OSCs Assisted >8.5 Lakh Women',
      deltaDirection: 'positive',
      source: 'Ministry of Women & Child Development (MWCD)',
      policyContext:
        'Nirbhaya Fund financed 700+ One Stop Centres nationwide providing medical aid, police assistance, legal counselling, and shelter under a single roof, integrated with the Emergency Response Support System (112).',
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-cyan-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
      {cards.map((card, idx) => (
        <TopicCard key={idx} {...card} />
      ))}
    </div>
  );
}

// ----------------------------------------------------
// Defense & Forces KPI Cards: 2x2 Grid Architecture
// ----------------------------------------------------
export function DefenseKpiCards() {
  const defTrend = data.defense_intelligence.defense_capex_trend;
  const upaLatest = defTrend.find(i => i.era === 'UPA')!;
  const bjpLatest = defTrend[defTrend.length - 1];

  const cards: TopicCardProps[] = [
    {
      title: 'Defense Exports Surge',
      metricLabel: 'Global Arms Footprint',
      upaValue: '₹686 Cr (FY 2013-14)',
      bjpValue: '₹38,424 Cr (FY 2025-26 Estimate)',
      deltaSummary: '+5,502% Surge (₹686 Cr → ₹38,424 Cr)',
      deltaDirection: 'positive',
      source: 'Department of Defence Production (DDP / MoD)',
      policyContext:
        'Defence exports expanded to over 85 nations (including BrahMos missiles to Philippines, Pinaka MLRS to Armenia, and artillery shells to European nations), shifting India from pure importer toward export hub.',
      icon: <Crosshair className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-indigo-500',
    },
    {
      title: 'Capital Modernization Allocation',
      metricLabel: 'Force Lethality Investment',
      upaValue: '₹79,125 Cr (FY 2013-14 Outlay)',
      bjpValue: '₹1,80,000 Cr (75% Domestic Earmark in FY26)',
      deltaSummary: '+127% Outlay Expansion | 75% Domestic',
      deltaDirection: 'positive',
      source: 'Union Budget & Parliamentary Standing Committee',
      policyContext:
        'Capital outlay expanded from ₹79,125 Cr to ₹1,80,000 Cr. Positive indigenisation lists banned import of over 4,600 subsystems and weapons platforms, preserving foreign exchange and building domestic industrial base.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-500',
    },
    {
      title: 'Border Roads Strategic Infrastructure (BRO)',
      metricLabel: 'Frontier Connectivity',
      upaValue: '₹2,000 Cr Annual Budget (FY 2013-14)',
      bjpValue: '₹16,000 Cr to ₹16,690 Cr (FY 2024-26)',
      deltaSummary: '8x Outlay Surge | Sela & Atal Tunnels',
      deltaDirection: 'positive',
      source: 'Border Roads Organisation (BRO) PIB Records',
      policyContext:
        'Over 3,610 km of strategic border roads constructed along LAC and LOC. All-weather operational readiness achieved via Atal Tunnel (Rohtang), Sela Tunnel (Arunachal), and Shinku La Tunnel.',
      icon: <Compass className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-500',
    },
    {
      title: 'Armed Forces HR & Welfare (OROP)',
      metricLabel: 'Veterans & Cadre Transformation',
      upaValue: '₹500 Cr Token Interim Allocation in FY14',
      bjpValue: '>₹1,20,000 Cr Cumulative Disbursed under OROP',
      deltaSummary: '₹1.2 Lakh Cr Disbursed to 25L+ Veterans',
      deltaDirection: 'positive',
      source: 'MoD Department of Ex-Servicemen Welfare (DESW)',
      policyContext:
        'Implemented One Rank One Pension (OROP-1 in 2015, OROP-2 in 2022, and OROP-3 in 2024) resolving a 40-year demand. Combined with Agnipath scheme to lower average armed forces personnel age from 32 to 26.',
      icon: <FileCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
      {cards.map((card, idx) => (
        <TopicCard key={idx} {...card} />
      ))}
    </div>
  );
}
