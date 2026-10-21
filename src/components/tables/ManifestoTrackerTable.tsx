'use client';

import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Shield,
  Users,
  Scale,
  Search,
  Download,
  Filter,
  FileSpreadsheet,
  FileJson,
  CheckCircle2,
} from 'lucide-react';
import governanceData from '../../data/comparison_data.json';
import type {
  GovernanceData,
  ManifestoPromiseItem,
  Category,
  ManifestoStatus,
  Era,
  FilterEra,
} from '../../types/governance';
import { useEraFilter, STATUS_COLORS, ERA_COLORS } from '../../context/EraFilterContext';

const data = governanceData as GovernanceData;

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  Economy: <TrendingUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />,
  Defense: <Shield className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
  Social: <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
  Governance: <Scale className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />,
};

export default function ManifestoTrackerTable() {
  const { selectedEra, setSelectedEra } = useEraFilter();

  // Local filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | Category>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | ManifestoStatus>('All');

  const trackerItems = data.manifesto_tracker;

  // Filtered dataset
  const filteredData = useMemo(() => {
    return trackerItems.filter(item => {
      // 1. Era filter
      if (selectedEra !== 'ALL' && item.era !== selectedEra) {
        return false;
      }
      // 2. Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // 3. Status filter
      if (selectedStatus !== 'All' && item.status !== selectedStatus) {
        return false;
      }
      // 4. Free-text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesPromise = item.promise.toLowerCase().includes(query);
        const matchesOutcome = item.official_outcome.toLowerCase().includes(query);
        const matchesRef = item.gazette_or_record_ref.toLowerCase().includes(query);
        if (!matchesPromise && !matchesOutcome && !matchesRef) {
          return false;
        }
      }
      return true;
    });
  }, [trackerItems, selectedEra, selectedCategory, selectedStatus, searchQuery]);

  // Completion breakdown for current filtered era
  const completionStats = useMemo(() => {
    // Calculate based on current era selection across all categories/statuses
    const eraItems = trackerItems.filter(
      item => selectedEra === 'ALL' || item.era === selectedEra
    );
    const total = eraItems.length;
    const fulfilled = eraItems.filter(i => i.status === 'Fulfilled').length;
    const substantial = eraItems.filter(i => i.status === 'Substantially Implemented').length;
    const partial = eraItems.filter(i => i.status === 'Partially Met').length;
    const unfulfilled = eraItems.filter(i => i.status === 'Unfulfilled').length;

    return {
      total,
      fulfilled: { count: fulfilled, pct: total ? Math.round((fulfilled / total) * 100) : 0 },
      substantial: { count: substantial, pct: total ? Math.round((substantial / total) * 100) : 0 },
      partial: { count: partial, pct: total ? Math.round((partial / total) * 100) : 0 },
      unfulfilled: { count: unfulfilled, pct: total ? Math.round((unfulfilled / total) * 100) : 0 },
    };
  }, [trackerItems, selectedEra]);

  // Export functions (CSV & JSON)
  const exportToCSV = () => {
    const headers = ['Era', 'Promise', 'Category', 'Status', 'Official Outcome', 'Gazette or Record Ref'];
    const rows = filteredData.map(item => [
      item.era,
      `"${item.promise.replace(/"/g, '""')}"`,
      item.category,
      item.status,
      `"${item.official_outcome.replace(/"/g, '""')}"`,
      `"${item.gazette_or_record_ref.replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `manifesto_audit_${selectedEra.toLowerCase()}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(filteredData, null, 2))}`;
    const link = document.createElement('a');
    link.setAttribute('href', jsonString);
    link.setAttribute('download', `manifesto_audit_${selectedEra.toLowerCase()}_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/50 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] relative overflow-hidden">
      {/* Header & Accountability Framework */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 font-mono">
              CHAPTER 5 • POLITICAL ACCOUNTABILITY &amp; STATUTORY DELIVERY
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
            Comprehensive Manifesto Tracker (Promises vs. Official Gazette Verification)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed font-sans">
            Objective audit evaluating core commitments from the UPA 2004 NCMP &amp; 2009 INC Manifesto against the 2014 &amp; 2019 BJP Sankalp Patra. 
            Deliveries are verified strictly against the Gazette of India, parliamentary records, and statutory line-ministry notifications.
          </p>
        </div>

        {/* Financial-grade Export Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={exportToCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs transition-all active:scale-95"
            title="Export filtered records as CSV"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={exportToJSON}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs transition-all active:scale-95"
            title="Export filtered records as JSON"
          >
            <FileJson className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Export JSON</span>
          </button>
        </div>
      </div>

      {/* Modern Financial-Style Delivery Ratio Breakdown */}
      <div className="mb-6 p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0c121e]/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs font-semibold mb-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-900 dark:text-slate-100 font-semibold">
              Delivery Ratio Breakdown:
            </span>
            <span className="text-slate-600 dark:text-slate-400 font-normal">
              {selectedEra === 'ALL'
                ? 'Dual-Era Aggregate (23 Commitments)'
                : `${selectedEra === 'BJP' ? 'NDA (2014–Present)' : 'UPA (2004–2014)'} Administration`}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono tabular-nums">
            {completionStats.total} Audited Commitments
          </span>
        </div>

        {/* Sleek Segmented Linear Progress Bar */}
        <div className="w-full h-3 bg-slate-200/80 dark:bg-slate-800/80 rounded-full overflow-hidden flex gap-1 p-0.5 shadow-inner">
          {completionStats.fulfilled.pct > 0 && (
            <div
              style={{ width: `${completionStats.fulfilled.pct}%` }}
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              title={`Fulfilled: ${completionStats.fulfilled.count} (${completionStats.fulfilled.pct}%)`}
            />
          )}
          {completionStats.substantial.pct > 0 && (
            <div
              style={{ width: `${completionStats.substantial.pct}%` }}
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              title={`Substantially Implemented: ${completionStats.substantial.count} (${completionStats.substantial.pct}%)`}
            />
          )}
          {completionStats.partial.pct > 0 && (
            <div
              style={{ width: `${completionStats.partial.pct}%` }}
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              title={`Partially Met: ${completionStats.partial.count} (${completionStats.partial.pct}%)`}
            />
          )}
          {completionStats.unfulfilled.pct > 0 && (
            <div
              style={{ width: `${completionStats.unfulfilled.pct}%` }}
              className="h-full bg-rose-500 rounded-full transition-all duration-500"
              title={`Unfulfilled: ${completionStats.unfulfilled.count} (${completionStats.unfulfilled.pct}%)`}
            />
          )}
        </div>

        {/* Progress Legend Tags with Tabular Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shrink-0" />
            <div className="flex items-baseline gap-1.5 text-slate-700 dark:text-slate-300">
              <span className="text-[11px] font-medium">Fulfilled:</span>
              <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100">
                {completionStats.fulfilled.count}
              </span>
              <span className="font-mono text-[10px] text-slate-400 tabular-nums">
                ({completionStats.fulfilled.pct}%)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
            <span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shrink-0" />
            <div className="flex items-baseline gap-1.5 text-slate-700 dark:text-slate-300">
              <span className="text-[11px] font-medium">Substantial:</span>
              <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100">
                {completionStats.substantial.count}
              </span>
              <span className="font-mono text-[10px] text-slate-400 tabular-nums">
                ({completionStats.substantial.pct}%)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
            <span className="w-2 h-2 rounded-full bg-amber-500 ring-4 ring-amber-500/20 shrink-0" />
            <div className="flex items-baseline gap-1.5 text-slate-700 dark:text-slate-300">
              <span className="text-[11px] font-medium">Partially Met:</span>
              <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100">
                {completionStats.partial.count}
              </span>
              <span className="font-mono text-[10px] text-slate-400 tabular-nums">
                ({completionStats.partial.pct}%)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
            <span className="w-2 h-2 rounded-full bg-rose-500 ring-4 ring-rose-500/20 shrink-0" />
            <div className="flex items-baseline gap-1.5 text-slate-700 dark:text-slate-300">
              <span className="text-[11px] font-medium">Unfulfilled:</span>
              <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100">
                {completionStats.unfulfilled.count}
              </span>
              <span className="font-mono text-[10px] text-slate-400 tabular-nums">
                ({completionStats.unfulfilled.pct}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search promise, statute, act..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/80 transition-all"
          />
        </div>

        {/* Era Selector */}
        <div>
          <select
            value={selectedEra}
            onChange={e => setSelectedEra(e.target.value as FilterEra)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/80 transition-all font-medium"
          >
            <option value="ALL">All Eras (UPA &amp; NDA)</option>
            <option value="UPA">UPA (2004–2014)</option>
            <option value="BJP">NDA (2014–Present)</option>
          </select>
        </div>

        {/* Category Selector */}
        <div>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value as 'All' | Category)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/80 transition-all font-medium"
          >
            <option value="All">All Categories</option>
            <option value="Economy">Economy</option>
            <option value="Defense">Defense</option>
            <option value="Social">Social</option>
            <option value="Governance">Governance</option>
          </select>
        </div>

        {/* Status Selector */}
        <div>
          <select
            value={selectedStatus}
            onChange={e => setSelectedStatus(e.target.value as 'All' | ManifestoStatus)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/80 transition-all font-medium"
          >
            <option value="All">All Delivery Statuses</option>
            <option value="Fulfilled">Fulfilled</option>
            <option value="Substantially Implemented">Substantially Implemented</option>
            <option value="Partially Met">Partially Met / In Progress</option>
            <option value="Unfulfilled">Unfulfilled / Stalled</option>
          </select>
        </div>
      </div>

      {/* Main Datatable Styled Like a Modern Financial Ledger */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#0b101b]/50 shadow-sm max-h-[660px] overflow-y-auto custom-scrollbar">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="sticky top-0 z-20 backdrop-blur-md bg-slate-100/95 dark:bg-[#111827]/95 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-semibold shadow-xs">
              <th className="py-3 px-3.5 w-16 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Era
              </th>
              <th className="py-3 px-3.5 w-52 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Commitment / Promise
              </th>
              <th className="py-3 px-3.5 w-28 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Category
              </th>
              <th className="py-3 px-3.5 w-44 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Delivery Status
              </th>
              <th className="py-3 px-3.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Official Statutory Outcome
              </th>
              <th className="py-3 px-3.5 w-48 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Gazette / Citation
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-500 dark:text-slate-400">
                  No commitments match your selected filters. Adjust your search criteria above.
                </td>
              </tr>
            ) : (
              filteredData.map((item, idx) => {
                const isUpa = item.era === 'UPA';
                const statusStyle = STATUS_COLORS[item.status];

                return (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    {/* Era Pill */}
                    <td className="py-3.5 px-3.5 align-top font-mono">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-tight border ${
                          isUpa
                            ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
                            : 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
                        }`}
                      >
                        {item.era}
                      </span>
                    </td>

                    {/* Promise */}
                    <td className="py-3.5 px-3.5 align-top font-semibold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
                      {item.promise}
                    </td>

                    {/* Category Pill with Icon */}
                    <td className="py-3.5 px-3.5 align-top">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-medium text-[11px] border border-slate-200/50 dark:border-slate-700/50">
                        {CATEGORY_ICONS[item.category]}
                        <span>{item.category}</span>
                      </span>
                    </td>

                    {/* Status Badge with Small Colored Dot */}
                    <td className="py-3.5 px-3.5 align-top">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                        <span>{item.status}</span>
                      </span>
                    </td>

                    {/* Outcome */}
                    <td className="py-3.5 px-3.5 align-top text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {item.official_outcome}
                    </td>

                    {/* Monospace Gazette Reference */}
                    <td className="py-3.5 px-3.5 align-top font-mono text-[10px] text-slate-500 dark:text-slate-400 tabular-nums">
                      <span className="bg-slate-100/90 dark:bg-slate-800/90 px-2 py-1 rounded-md border border-slate-200/70 dark:border-slate-700/70 inline-block leading-tight shadow-2xs break-all">
                        {item.gazette_or_record_ref}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono tabular-nums">
        <span>Showing {filteredData.length} of {trackerItems.length} audited commitments</span>
        <span className="text-[10px] uppercase tracking-wider">
          Verification: Gazette of India Notifications &amp; Parliamentary Disclosures
        </span>
      </div>
    </div>
  );
}
