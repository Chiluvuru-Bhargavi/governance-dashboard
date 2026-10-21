'use client';

import React from 'react';
import Navbar from '../components/layout/Navbar';
import SideBySideGrid from '../components/editorial/SideBySideGrid';
import {
  ECONOMY_ITEMS,
  LAW_ORDER_ITEMS,
  WOMENS_SAFETY_ITEMS,
  DEFENSE_ITEMS,
} from '../data/editorial_comparison_items';
import MacroGrowthChart from '../components/charts/MacroGrowthChart';
import SecurityAuditChart from '../components/charts/SecurityAuditChart';
import DefenseCapexChart from '../components/charts/DefenseCapexChart';
import WomensSafetyChart from '../components/charts/WomensSafetyChart';
import ManifestoTrackerTable from '../components/tables/ManifestoTrackerTable';
import GeopoliticsSecurityTab from '../components/geopolitics/GeopoliticsSecurityTab';
import { useEraFilter } from '../context/EraFilterContext';
import { ShieldCheck, BookOpen, Scale } from 'lucide-react';

export default function DashboardPage() {
  const { activeTab } = useEraFilter();

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900 transition-colors">
      {/* Top Editorial Masthead */}
      <div className="pt-6 sm:pt-8 text-center px-4">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 font-mono">
            Government of India Statutory Comparative Archive • 2004–2024
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
        </div>
        <p className="text-xs text-stone-400 font-mono tracking-wider uppercase">
          Empirical Data: MoSPI • RBI DBIE • MHA • MoD • NCRB • Gazette of India
        </p>
      </div>

      {/* Floating Centered Pill Navigation Switcher */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* ========================================================
            TAB 1: ECONOMY
           ======================================================== */}
        {activeTab === 'Economy' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-mono">
                MACROECONOMIC PERFORMANCE • CHAPTER 1
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                Economy at a glance
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                A decadal empirical comparison reconciling national accounts, inflation regimes, banking balance-sheet resolution, surface transport velocity, and digital public infrastructure.
              </p>
            </div>

            {/* Overarching Column Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-stone-200/80 pb-4">
              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    UPA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2004–2014</span>
              </div>

              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    NDA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2014–2024</span>
              </div>
            </div>

            {/* Strict Side-by-Side 2-Column Comparison Grid */}
            <SideBySideGrid items={ECONOMY_ITEMS} />

            {/* Macroeconomic Chart Visualizations */}
            <div className="pt-6">
              <div className="mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-1 font-mono">
                  DECENNIAL LONGITUDINAL AUDIT
                </span>
                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                  Annual Real GDP Growth &amp; Inflation Trajectories
                </h3>
              </div>
              <MacroGrowthChart />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: LAW & ORDER
           ======================================================== */}
        {activeTab === 'Law & Order' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-mono">
                INTERNAL SECURITY &amp; CITIZEN PROTECTION • CHAPTER 2
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                Internal Security &amp; Rule of Law
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                Objective audit evaluating territorial containment of Left-Wing Extremism (Red Corridor), urban civilian counter-terror grid, Jammu &amp; Kashmir security realignment post-Article 370, and Northeast peace settlements.
              </p>
            </div>

            {/* Overarching Column Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-stone-200/80 pb-4">
              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    UPA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2004–2014</span>
              </div>

              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    NDA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2014–2024</span>
              </div>
            </div>

            {/* Strict Side-by-Side 2-Column Comparison Grid */}
            <SideBySideGrid items={LAW_ORDER_ITEMS} />

            {/* Security Audit Chart Visualizations */}
            <div className="pt-6">
              <div className="mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-1 font-mono">
                  INCIDENT DOSSIERS &amp; FATALITY REGISTERS
                </span>
                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                  Counter-Terrorism, LWE &amp; Border Accord Metrics
                </h3>
              </div>
              <SecurityAuditChart />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: WOMEN'S SAFETY
           ======================================================== */}
        {activeTab === "Women's Safety" && (
          <div className="space-y-12 animate-fadeIn">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-mono">
                STATUTORY SAFEGUARDS &amp; HEALTH • CHAPTER 4
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                Women's Safety &amp; Maternal Health
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                Longitudinal analysis across NCRB Crime in India and RGI Sample Registration System (SRS), evaluating crime reporting threshold shifts, lethal offense reductions, and maternal mortality decline.
              </p>
            </div>

            {/* Overarching Column Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-stone-200/80 pb-4">
              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    UPA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2004–2014</span>
              </div>

              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    NDA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2014–2024</span>
              </div>
            </div>

            {/* Strict Side-by-Side 2-Column Comparison Grid */}
            <SideBySideGrid items={WOMENS_SAFETY_ITEMS} />

            {/* Women's Safety Chart Visualizations */}
            <div className="pt-6">
              <div className="mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-1 font-mono">
                  LONGITUDINAL CRIME &amp; MORTALITY REGISTERS
                </span>
                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                  NCRB Registered Offenses &amp; MMR Decline
                </h3>
              </div>
              <WomensSafetyChart />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: DEFENSE & FORCES
           ======================================================== */}
        {activeTab === 'Defense & Forces' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-mono">
                DEFENSE MODERNIZATION &amp; ARMED FORCES • CHAPTER 3
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                Armed Forces &amp; Strategic Capability
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                Empirical audit comparing defense capital acquisition pipelines, Aatmanirbhar Bharat domestic procurement earmarking, explosive arms exports surge, border roads pacing, and veteran welfare under OROP.
              </p>
            </div>

            {/* Overarching Column Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-stone-200/80 pb-4">
              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    UPA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2004–2014</span>
              </div>

              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    NDA Administration
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2014–2024</span>
              </div>
            </div>

            {/* Strict Side-by-Side 2-Column Comparison Grid */}
            <SideBySideGrid items={DEFENSE_ITEMS} />

            {/* Defense Capex & Procurement Visualizations */}
            <div className="pt-6">
              <div className="mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-1 font-mono">
                  BUDGETARY OUTLAY &amp; PLATFORM CONTRACTS
                </span>
                <h3 className="font-serif text-2xl font-semibold text-stone-900">
                  Capital Modernization, Exports &amp; Border Infrastructure
                </h3>
              </div>
              <DefenseCapexChart />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: MANIFESTO TRACKER
           ======================================================== */}
        {activeTab === 'Manifesto Tracker' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 block mb-2 font-mono">
                POLITICAL ACCOUNTABILITY &amp; STATUTORY DELIVERY • CHAPTER 5
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                Manifesto Promises vs. Gazette Records
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                Objective audit tracking 23 core commitments from the UPA 2004 National Common Minimum Programme (NCMP) &amp; 2009 INC Manifesto alongside the 2014 &amp; 2019 BJP Sankalp Patra, verified strictly against the Gazette of India.
              </p>
            </div>

            {/* Overarching Column Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-stone-200/80 pb-4">
              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    UPA Manifesto Commitments
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2004 &amp; 2009</span>
              </div>

              <div className="flex items-baseline justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                    NDA Sankalp Patra
                  </span>
                </div>
                <span className="font-serif text-lg text-stone-500">2014 &amp; 2019</span>
              </div>
            </div>

            {/* Side-by-Side Manifesto Delivery Synthesis Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* UPA Manifesto Overview */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                        UPA
                      </span>
                      <span className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 font-sans mt-0.5">
                        Rights-Based Statutory Architecture
                      </span>
                    </div>
                    <span className="font-serif text-xl sm:text-2xl text-stone-500 font-normal">
                      2004–2014
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-4">
                    Statutory Welfare &amp; Legislative Enactments
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans mb-6">
                    Delivered foundational rights-based laws including MGNREGA (2005) guaranteeing 100 days of rural wage employment, Right to Information (RTI 2005), Right to Education (RTE 2009), Forest Rights Act (2006), and the National Food Security Act (2013). However, judicial accountability and Lokpal stalled until the final year of the administration.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 text-xs text-amber-900 leading-relaxed">
                    <strong>Key Delivered Commitments:</strong> MGNREGA Act 42 of 2005, RTI Act 22 of 2005, RTE Act 35 of 2009, NFSA Act 20 of 2013, UIDAI Inception (2009).
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-stone-100 text-[11px] text-stone-400 font-mono tracking-wider uppercase">
                  Audited Against: Acts of Parliament &amp; NCMP 2004
                </div>
              </div>

              {/* NDA Manifesto Overview */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                        NDA
                      </span>
                      <span className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 font-sans mt-0.5">
                        Constitutional Commitments &amp; Economic Formalization
                      </span>
                    </div>
                    <span className="font-serif text-xl sm:text-2xl text-stone-500 font-normal">
                      2014–2024
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-4">
                    Constitutional Realignment &amp; Macro Codes
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans mb-6">
                    Fulfilled long-standing ideological and constitutional promises: abrogated Article 370 &amp; 35A (2019), constructed the Ram Mandir following Supreme Court resolution, enacted CAA (2019), and criminalized instant Triple Talaq. Unified indirect taxation under GST, enacted the IBC, and replaced colonial criminal codes with BNS (2023).
                  </p>

                  <div className="p-4 rounded-2xl bg-blue-500/[0.04] border border-blue-500/20 text-xs text-blue-900 leading-relaxed">
                    <strong>Key Delivered Commitments:</strong> Statutory Resolution C.O. 272 (Art 370), GST 101st Constitutional Amendment, IBC Act 31 of 2016, BNS Act 45 of 2023, OROP Notification (Nov 2015).
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-stone-100 text-[11px] text-stone-400 font-mono tracking-wider uppercase">
                  Audited Against: Gazette of India &amp; BJP Sankalp Patra
                </div>
              </div>
            </div>

            {/* Interactive Manifesto Tracker Table */}
            <div className="pt-4">
              <ManifestoTrackerTable />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 6: INDIA VS CHINA (GEOPOLITICS & SECURITY)
           ======================================================== */}
        {activeTab === 'India vs China' && (
          <div className="animate-fadeIn">
            <GeopoliticsSecurityTab />
          </div>
        )}

      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-stone-200/80 bg-white/60 py-12 transition-colors mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500">
          <p className="font-serif text-base text-stone-800 mb-1">
            Comparative Governance Archive • Statutory Audit (2004–2024)
          </p>
          <p className="max-w-2xl mx-auto text-xs leading-relaxed text-stone-500 mt-2 font-sans">
            Designed for objective civic inquiry, policy benchmarking, and academic analysis. All charts, metric tables, and manifesto audits ingest published releases of MoSPI, Reserve Bank of India, Ministry of Home Affairs, Ministry of Defence, NCRB, and the Gazette of India exclusively.
          </p>
        </div>
      </footer>
    </div>
  );
}
