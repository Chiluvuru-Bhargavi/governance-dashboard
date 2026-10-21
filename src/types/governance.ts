// TypeScript schema for the Dual-Era Governance Audit Dashboard
// Matches the structure of comparison_data.json

export type Era = 'UPA' | 'BJP';
export type FilterEra = 'ALL' | Era;
export type Category = 'Economy' | 'Defense' | 'Social' | 'Governance';
export type ManifestoStatus = 'Fulfilled' | 'Substantially Implemented' | 'Partially Met' | 'Unfulfilled';

// ─── Macroeconomics ────────────────────────────────────────────────────────────

export interface GDPGrowthEntry {
  year: number;
  value: number;
  era: Era;
  source: string;
}

export interface EraComparison {
  upa: string;
  bjp: string;
  source: string;
}

export interface InfrastructurePace {
  highway_km_per_day: EraComparison;
  railway_electrification_rkm: EraComparison;
  power_and_aviation: EraComparison;
  banking_and_dpi: EraComparison;
}

export interface MacroeconomicsData {
  gdp_growth_annual: GDPGrowthEntry[];
  inflation_average: EraComparison;
  infrastructure_pace: InfrastructurePace;
}

// ─── Internal Security ─────────────────────────────────────────────────────────

export interface LWEIncident {
  period: string;
  era: Era;
  incidents: number;
  deaths: number;
  affected_districts_end_of_period: number;
  peak_year_note: string;
  source: string;
}

export interface JKFatality {
  period: string;
  era: Era;
  terror_incidents: number;
  civilian_and_sf_fatalities: number;
  northeast_insurgency_note: string;
  source: string;
}

export interface UrbanTerrorEvent {
  year: number;
  era: Era;
  city: string;
  fatalities: number;
  injured: number;
  module: string;
  source: string;
}

export interface InternalSecurityData {
  lwe_incidents: LWEIncident[];
  jk_fatalities: JKFatality[];
  urban_terror_events: UrbanTerrorEvent[];
}

// ─── Defence & Intelligence ────────────────────────────────────────────────────

export interface DefenseCapexEntry {
  fiscal_year: string;
  era: Era;
  total_mod_budget_cr: number;
  capital_outlay_cr: number;
  indigenous_production_cr: number;
  defence_exports_cr: number;
  bro_budget_cr: number;
  source: string;
}

export interface KeyProcurement {
  era: Era;
  platform: string;
  year: number;
  type: string;
  status: string;
  source: string;
}

export interface IntelReform {
  era: Era;
  agency: string;
  year: number;
  reform: string;
  source: string;
}

export interface DefenseIntelligenceData {
  defense_capex_trend: DefenseCapexEntry[];
  key_procurements: KeyProcurement[];
  intel_agencies_reforms: IntelReform[];
}

// ─── Women's Safety ────────────────────────────────────────────────────────────

export interface NCRBCrimeMetric {
  year: number;
  era: Era;
  total_crimes_against_women: number;
  crime_rate_per_100k: number;
  sec376_ipc: number;
  dowry_deaths_sec304b: number;
  cruelty_sec498a: number;
  conviction_rate_pct: number;
  mmr_per_100k_live_births: number;
  source: string;
}

export interface StatutoryEnactment {
  era: Era;
  year: number;
  act_name: string;
  impact: string;
  source: string;
}

export interface WomensSafetyData {
  ncrb_crime_metrics: NCRBCrimeMetric[];
  statutory_enactments: StatutoryEnactment[];
}

// ─── Manifesto Tracker ─────────────────────────────────────────────────────────

export interface ManifestoPromiseItem {
  era: Era;
  promise: string;
  category: Category;
  status: ManifestoStatus;
  official_outcome: string;
  gazette_or_record_ref: string;
}

// ─── Root Data Shape ───────────────────────────────────────────────────────────

export interface GovernanceData {
  macroeconomics: MacroeconomicsData;
  internal_security: InternalSecurityData;
  defense_intelligence: DefenseIntelligenceData;
  womens_safety: WomensSafetyData;
  manifesto_tracker: ManifestoPromiseItem[];
  geopoliticsAndSecurity?: any;
}
