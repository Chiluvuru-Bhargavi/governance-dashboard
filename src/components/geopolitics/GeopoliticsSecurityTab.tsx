"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import comparisonData from "@/data/comparison_data.json";

const data = comparisonData.geopoliticsAndSecurity;

export default function GeopoliticsSecurityTab() {
  const {
    meta,
    economicTrajectory,
    defenseAndMilitaryBudgets,
    strategicHardwareAndDeterrence,
    diplomacyTradeAndIntelligence,
  } = data;

  return (
    <section className="w-full max-w-7xl mx-auto bg-[#FAF8F5] text-[#1C1917] p-6 md:p-8 rounded-2xl border border-[#E7E2D8] shadow-sm font-sans space-y-10">
      {/* Top Executive Header */}
      <header className="border-b border-[#E7E2D8] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-2">
            <span>Strategic Intelligence Module</span>
            <span>•</span>
            <span>{meta.lastUpdated}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#111111] tracking-tight">
            {meta.tabTitle}
          </h1>
          <p className="text-sm text-[#57534E] mt-1 max-w-3xl">
            {meta.subtitle}
          </p>
        </div>

        {/* Column Legend Pills */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E3A8A] text-xs font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A] ring-2 ring-[#D97706]" />
            <span>LEFT: INDIA (Sapphire / Saffron)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-xs font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            <span>RIGHT: CHINA (Crimson Red)</span>
          </div>
        </div>
      </header>

      {/* =====================================================================
          SECTION 1: ECONOMIC TRAJECTORY (2014 vs 2024/25)
      ===================================================================== */}
      <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5F2EB] pb-4">
          <h2 className="text-lg font-bold text-[#111111]">
            {economicTrajectory.sectionTitle}
          </h2>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#F5F2EB] text-[#57534E] font-semibold">
            {economicTrajectory.sourceCitation}
          </span>
        </div>

        {/* 2-Column Economic KPI Cards: India Left, China Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* INDIA ECONOMIC CARD (LEFT) */}
          <div className="rounded-xl bg-[#FAF8F5] border-l-4 border-l-[#1E3A8A] border border-[#E7E2D8] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                  India Nominal GDP Trajectory
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                  {economicTrajectory.summaryKPIs.india.globalRankChange}
                </span>
              </div>
              <div className="flex items-baseline gap-3 my-2">
                <span className="text-2xl font-bold text-[#57534E]">
                  {economicTrajectory.summaryKPIs.india.gdp2014}
                </span>
                <span className="text-sm text-[#78716C] font-medium">
                  (2014) →
                </span>
                <span className="text-3xl font-extrabold text-[#1E3A8A]">
                  {economicTrajectory.summaryKPIs.india.gdp2025Projected}
                </span>
                <span className="text-xs font-semibold text-[#D97706]">
                  (2025/26 Proj.)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-[#E7E2D8] text-xs">
              <div>
                <span className="text-[#78716C] block">10-Yr Expansion</span>
                <span className="font-bold text-[#111111]">
                  {economicTrajectory.summaryKPIs.india.decadeGrowthPercent}
                </span>
              </div>
              <div>
                <span className="text-[#78716C] block">2025 Real Growth</span>
                <span className="font-bold text-[#1E3A8A]">
                  {economicTrajectory.summaryKPIs.india.realGrowth2025}
                </span>
              </div>
              <div>
                <span className="text-[#78716C] block">PPP GDP (2025)</span>
                <span className="font-bold text-[#111111]">
                  {economicTrajectory.summaryKPIs.india.pppGdp2025}
                </span>
              </div>
            </div>
            <div className="mt-3 pt-2 text-[10px] font-mono uppercase tracking-wider text-[#78716C]">
              SOURCE: IMF WEO / WORLD BANK NATIONAL ACCOUNTS
            </div>
          </div>

          {/* CHINA ECONOMIC CARD (RIGHT) */}
          <div className="rounded-xl bg-[#FAF8F5] border-l-4 border-l-[#991B1B] border border-[#E7E2D8] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                  China Nominal GDP Trajectory
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FEE2E2] text-[#991B1B] border border-[#FECACA]">
                  {economicTrajectory.summaryKPIs.china.globalRankChange}
                </span>
              </div>
              <div className="flex items-baseline gap-3 my-2">
                <span className="text-2xl font-bold text-[#57534E]">
                  {economicTrajectory.summaryKPIs.china.gdp2014}
                </span>
                <span className="text-sm text-[#78716C] font-medium">
                  (2014) →
                </span>
                <span className="text-3xl font-extrabold text-[#991B1B]">
                  {economicTrajectory.summaryKPIs.china.gdp2025Projected}
                </span>
                <span className="text-xs font-semibold text-[#DC2626]">
                  (2025/26 Proj.)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-[#E7E2D8] text-xs">
              <div>
                <span className="text-[#78716C] block">10-Yr Expansion</span>
                <span className="font-bold text-[#111111]">
                  {economicTrajectory.summaryKPIs.china.decadeGrowthPercent}
                </span>
              </div>
              <div>
                <span className="text-[#78716C] block">2025 Real Growth</span>
                <span className="font-bold text-[#991B1B]">
                  {economicTrajectory.summaryKPIs.china.realGrowth2025}
                </span>
              </div>
              <div>
                <span className="text-[#78716C] block">PPP GDP (2025)</span>
                <span className="font-bold text-[#111111]">
                  {economicTrajectory.summaryKPIs.china.pppGdp2025}
                </span>
              </div>
            </div>
            <div className="mt-3 pt-2 text-[10px] font-mono uppercase tracking-wider text-[#78716C]">
              SOURCE: IMF WEO / WORLD BANK NATIONAL ACCOUNTS
            </div>
          </div>
        </div>

        {/* Parallel GDP Growth Trajectory LineChart */}
        <div className="pt-2">
          <div className="text-xs font-semibold text-[#57534E] mb-3 flex items-center justify-between">
            <span>
              Parallel Nominal GDP Growth Trajectory (USD Trillions, 2014–2025P)
            </span>
            <span className="text-[11px] text-[#78716C]">
              {economicTrajectory.summaryKPIs.comparativeInsight}
            </span>
          </div>
          <div className="h-80 w-full bg-[#FAF8F5] p-4 rounded-xl border border-[#E7E2D8]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={economicTrajectory.timeSeries}
                margin={{ top: 10, right: 24, left: 8, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E7E2D8" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#57534E", fontSize: 12 }}
                  stroke="#D6D0C4"
                />
                <YAxis
                  tickFormatter={(val) => `${val}T`}
                  domain={[0, 22]}
                  tick={{ fill: "#57534E", fontSize: 12 }}
                  stroke="#D6D0C4"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E7E2D8",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: any, name: string) => [
                    `${typeof value === 'number' ? value.toFixed(2) : value} Trillion`,
                    name,
                  ]}
                />
                <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }} />
                <ReferenceLine
                  x="2020"
                  stroke="#A8A29E"
                  strokeDasharray="4 4"
                  label={{
                    value: "2020 Pandemic & LAC Standoff",
                    position: "insideTopLeft",
                    fill: "#78716C",
                    fontSize: 11,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="indiaGDP"
                  name="India Nominal GDP ($T)"
                  stroke="#1E3A8A"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#D97706", stroke: "#1E3A8A", strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="chinaGDP"
                  name="China Nominal GDP ($T)"
                  stroke="#DC2626"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#991B1B", stroke: "#DC2626", strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SECTION 2: DEFENSE & MILITARY BUDGETS + ACTIVE TROOPS
      ===================================================================== */}
      <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5F2EB] pb-4">
          <div>
            <h2 className="text-lg font-bold text-[#111111]">
              {defenseAndMilitaryBudgets.sectionTitle}
            </h2>
            <p className="text-xs text-[#57534E]">
              {defenseAndMilitaryBudgets.budgetMultiplierLabel}
            </p>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#F5F2EB] text-[#57534E] font-semibold">
            {defenseAndMilitaryBudgets.sourceCitation}
          </span>
        </div>

        {/* 2-Column Defense KPI Grid with Central 3.6x Multiplier Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-stretch">
          {/* INDIA DEFENSE CARD (LEFT - 5 cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#FAF8F5] border-t-4 border-t-[#1E3A8A] border border-[#E7E2D8] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                  India Defense Expenditure & Force
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1E3A8A]">
                  {defenseAndMilitaryBudgets.india.worldRank}
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-[#1E3A8A]">
                    {defenseAndMilitaryBudgets.india.annualBudget}
                  </span>
                  <span className="block text-xs font-semibold text-[#D97706] mt-0.5">
                    {defenseAndMilitaryBudgets.india.gdpShare} (
                    {defenseAndMilitaryBudgets.india.govtSpendShare})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#78716C] block">
                    Active Troops
                  </span>
                  <span className="text-2xl font-bold text-[#111111]">
                    {defenseAndMilitaryBudgets.india.activeTroops}
                  </span>
                  <span className="block text-[11px] text-[#57534E]">
                    {defenseAndMilitaryBudgets.india.activeTroopsExact}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 my-4 pt-3 border-t border-[#E7E2D8] text-xs">
              <div className="bg-white p-2.5 rounded border border-[#E7E2D8]">
                <span className="text-[#78716C] block">Reserve Personnel</span>
                <span className="font-bold text-[#111111]">
                  {defenseAndMilitaryBudgets.india.reserveTroops}
                </span>
              </div>
              <div className="bg-white p-2.5 rounded border border-[#E7E2D8]">
                <span className="text-[#78716C] block">Paramilitary Force</span>
                <span className="font-bold text-[#1E3A8A]">
                  {defenseAndMilitaryBudgets.india.paramilitaryForces}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#57534E] italic">
              {defenseAndMilitaryBudgets.india.fiscalNote}
            </p>
            <div className="mt-3 pt-2 border-t border-[#E7E2D8] text-[10px] font-mono uppercase tracking-wider text-[#78716C]">
              SOURCE: SIPRI 2024 / PRS INDIA DEFENCE ANALYSIS
            </div>
          </div>

          {/* CENTER MULTIPLIER BRIDGE (1 col) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-2">
            <div className="w-16 h-16 rounded-full bg-[#111111] text-white flex flex-col items-center justify-center shadow-md border-2 border-[#D97706]">
              <span className="text-lg font-extrabold leading-none">
                {defenseAndMilitaryBudgets.budgetMultiplier}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#D6D0C4] mt-0.5">
                Budget
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-[#78716C] mt-2 text-center">
              1.4x Active Troops
            </span>
          </div>

          {/* CHINA DEFENSE CARD (RIGHT - 5 cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#FAF8F5] border-t-4 border-t-[#991B1B] border border-[#E7E2D8] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                  China Defense Expenditure & Force
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FEF2F2] text-[#991B1B]">
                  {defenseAndMilitaryBudgets.china.worldRank}
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-[#991B1B]">
                    {defenseAndMilitaryBudgets.china.annualBudget}
                  </span>
                  <span className="block text-xs font-semibold text-[#DC2626] mt-0.5">
                    {defenseAndMilitaryBudgets.china.gdpShare} (
                    {defenseAndMilitaryBudgets.china.govtSpendShare})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#78716C] block">
                    Active Troops
                  </span>
                  <span className="text-2xl font-bold text-[#111111]">
                    {defenseAndMilitaryBudgets.china.activeTroops}
                  </span>
                  <span className="block text-[11px] text-[#57534E]">
                    {defenseAndMilitaryBudgets.china.activeTroopsExact}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 my-4 pt-3 border-t border-[#E7E2D8] text-xs">
              <div className="bg-white p-2.5 rounded border border-[#E7E2D8]">
                <span className="text-[#78716C] block">Reserve Personnel</span>
                <span className="font-bold text-[#111111]">
                  {defenseAndMilitaryBudgets.china.reserveTroops}
                </span>
              </div>
              <div className="bg-white p-2.5 rounded border border-[#E7E2D8]">
                <span className="text-[#78716C] block">Paramilitary Force</span>
                <span className="font-bold text-[#991B1B]">
                  {defenseAndMilitaryBudgets.china.paramilitaryForces}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#57534E] italic">
              {defenseAndMilitaryBudgets.china.fiscalNote}
            </p>
            <div className="mt-3 pt-2 border-t border-[#E7E2D8] text-[10px] font-mono uppercase tracking-wider text-[#78716C]">
              SOURCE: SIPRI 2024 / WORLD BANK
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SECTION 3: STRATEGIC HARDWARE & NUCLEAR DETERRENCE (BAR CHART + CARDS)
      ===================================================================== */}
      <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5F2EB] pb-4">
          <div>
            <h2 className="text-lg font-bold text-[#111111]">
              {strategicHardwareAndDeterrence.sectionTitle}
            </h2>
            <p className="text-xs text-[#57534E]">
              Normalized Horizontal Force Comparison (Indexed to Domain Leader = 100%) & Exact Platform Counts
            </p>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#F5F2EB] text-[#57534E] font-semibold">
            {strategicHardwareAndDeterrence.sourceCitation}
          </span>
        </div>

        {/* Clean Horizontal BarChart (Normalized % of Domain Maximum with Custom Tooltip) */}
        <div className="h-72 w-full bg-[#FAF8F5] p-4 rounded-xl border border-[#E7E2D8]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={strategicHardwareAndDeterrence.chartMetrics}
              margin={{ top: 8, right: 30, left: 40, bottom: 8 }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E7E2D8" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: "#57534E", fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="category"
                width={150}
                tick={{ fill: "#111111", fontSize: 12, fontWeight: 600 }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const row = payload[0].payload;
                    return (
                      <div className="bg-white p-3 rounded-lg border border-[#E7E2D8] shadow-md text-xs space-y-1.5">
                        <div className="font-bold text-[#111111] border-b pb-1">
                          {row.category} ({row.multiplier})
                        </div>
                        <div className="text-[#1E3A8A] font-semibold">
                          India: {row.india.toLocaleString()} {row.unit} ({row.indiaNormalized}%)
                        </div>
                        <div className="text-[#991B1B] font-semibold">
                          China: {row.china.toLocaleString()} {row.unit} ({row.chinaNormalized}%)
                        </div>
                        <div className="text-[10px] font-mono text-[#78716C] pt-1">
                          {row.source}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar
                dataKey="indiaNormalized"
                name="India (Indexed to Domain Max)"
                fill="#1E3A8A"
                radius={[0, 4, 4, 0]}
                barSize={14}
              />
              <Bar
                dataKey="chinaNormalized"
                name="China (Indexed to Domain Max)"
                fill="#DC2626"
                radius={[0, 4, 4, 0]}
                barSize={14}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Hardware Cards in 2-Column Alignment */}
        <div className="space-y-3">
          {strategicHardwareAndDeterrence.chartMetrics.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] p-4 grid grid-cols-1 md:grid-cols-11 gap-4 items-center"
            >
              {/* INDIA LEFT */}
              <div className="md:col-span-5 border-l-4 border-l-[#1E3A8A] pl-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase text-[#1E3A8A]">
                    India • {item.category}
                  </span>
                  <span className="text-xl font-extrabold text-[#1E3A8A]">
                    {item.india.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-[#57534E] mt-1">{item.indiaDetail}</p>
              </div>

              {/* MULTIPLIER CENTER */}
              <div className="md:col-span-1 flex flex-col items-center justify-center">
                <span className="px-2 py-1 rounded bg-[#F5F2EB] border border-[#D6D0C4] text-[11px] font-bold text-[#111111] whitespace-nowrap">
                  {item.multiplier}
                </span>
                <span className="text-[9px] font-mono uppercase text-[#78716C] mt-1 text-center">
                  {item.source}
                </span>
              </div>

              {/* CHINA RIGHT */}
              <div className="md:col-span-5 border-r-4 border-r-[#991B1B] pr-3 text-right">
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-extrabold text-[#991B1B]">
                    {item.china.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold uppercase text-[#991B1B]">
                    China • {item.category}
                  </span>
                </div>
                <p className="text-xs text-[#57534E] mt-1">{item.chinaDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          SECTION 4: DIPLOMACY, TRADE DEALS & INTELLIGENCE INFLUENCE (R&AW vs MSS)
      ===================================================================== */}
      <div className="bg-white rounded-xl border border-[#E7E2D8] p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5F2EB] pb-4">
          <h2 className="text-lg font-bold text-[#111111]">
            {diplomacyTradeAndIntelligence.sectionTitle}
          </h2>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#F5F2EB] text-[#57534E] font-semibold">
            {diplomacyTradeAndIntelligence.sourceCitation}
          </span>
        </div>

        {/* Classified Budget Constraint Banner */}
        <div className="rounded-lg bg-[#FAF8F5] border border-[#D6D0C4] p-3.5 text-xs text-[#57534E] flex items-start gap-3">
          <span className="px-2 py-0.5 rounded bg-[#111111] text-white font-mono text-[10px] uppercase font-bold shrink-0 mt-0.5">
            CLASSIFIED METRIC
          </span>
          <p>{diplomacyTradeAndIntelligence.dataConstraintNotice}</p>
        </div>

        {/* 2-Column Strategic Influence & Trade Timeline / Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* INDIA STRATEGIC INFLUENCE & R&AW COLUMN (LEFT) */}
          <div className="rounded-xl bg-[#FAF8F5] border-t-4 border-t-[#1E3A8A] border border-[#E7E2D8] p-5 space-y-4">
            <div className="border-b border-[#E7E2D8] pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1E3A8A]">
                  India: Strategic Influence, Trade &{" "}
                  {diplomacyTradeAndIntelligence.indiaHighlights.agencyName}
                </h3>
                <span className="w-3 h-3 rounded-full bg-[#D97706]" />
              </div>
              <p className="text-xs font-medium text-[#57534E] mt-1">
                {diplomacyTradeAndIntelligence.indiaHighlights.agencyFounded}
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5">
                Technical Organs:{" "}
                {diplomacyTradeAndIntelligence.indiaHighlights.technicalWings}
              </p>
            </div>

            <div className="space-y-3">
              {diplomacyTradeAndIntelligence.indiaHighlights.strategicChecklist.map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-[#E7E2D8] border-l-4 border-l-[#D97706] shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] bg-[#EFF6FF] px-2 py-0.5 rounded">
                        ✓ {item.tag}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#78716C]">
                        {item.source}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111111]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CHINA STRATEGIC INFLUENCE & MSS COLUMN (RIGHT) */}
          <div className="rounded-xl bg-[#FAF8F5] border-t-4 border-t-[#991B1B] border border-[#E7E2D8] p-5 space-y-4">
            <div className="border-b border-[#E7E2D8] pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#991B1B]">
                  China: Strategic Influence, Trade &{" "}
                  {diplomacyTradeAndIntelligence.chinaHighlights.agencyName}
                </h3>
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
              </div>
              <p className="text-xs font-medium text-[#57534E] mt-1">
                {diplomacyTradeAndIntelligence.chinaHighlights.agencyFounded}
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5">
                Technical Organs:{" "}
                {diplomacyTradeAndIntelligence.chinaHighlights.technicalWings}
              </p>
            </div>

            <div className="space-y-3">
              {diplomacyTradeAndIntelligence.chinaHighlights.strategicChecklist.map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-[#E7E2D8] border-l-4 border-l-[#DC2626] shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#991B1B] bg-[#FEF2F2] px-2 py-0.5 rounded">
                        ✓ {item.tag}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#78716C]">
                        {item.source}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111111]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
