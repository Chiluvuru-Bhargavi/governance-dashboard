import type { ComparisonItem } from '../components/editorial/SideBySideGrid';
import rawData from './comparison_data.json';
import type { GovernanceData } from '../types/governance';

const data = rawData as GovernanceData;

// ========================================================
// 1. ECONOMY COMPARISON ITEMS
// ========================================================
export const ECONOMY_ITEMS: ComparisonItem[] = [
  {
    id: 'gdp-growth',
    categoryEyebrow: 'NATIONAL ACCOUNTS & ECONOMIC EXPANSION',
    metricTitle: 'Real GDP Growth Trajectory (MoSPI 2011–12 Base)',
    upa: {
      value: '6.8% Average',
      subtext: 'Peak of 8.5% in FY11; 5.2%–6.4% in FY12–FY14',
      narrative:
        'The UPA administration presided over an initial high-velocity investment cycle (2004–2008) propelled by rapid private credit expansion. Post-2008 fiscal stimulus sustained immediate consumption but lacked supply debottlenecking, culminating by 2012–14 in twin deficits (CAD at 4.8%), stalled infrastructure projects, and slowing capital goods formation.',
      source: 'MoSPI Back-Series (2011-12 Base)',
    },
    nda: {
      value: '6.0% Average (7.3%* ex-COVID)',
      subtext: 'Rebounded to 8.2% in FY24 after -5.8% FY21 shock',
      narrative:
        'The NDA administration re-engineered the state around macro-financial formalization (GST unification), clean banking balance sheets (IBC 2016), and public-capex-driven infrastructure. Excluding the extraordinary FY21 pandemic contraction year (-5.8%), decadal growth averaged 7.3%, rebounding strongly to 8.2% in FY24.',
      source: 'MoSPI National Accounts Statistics (2011-12 Base)',
    },
  },
  {
    id: 'inflation-monetary',
    categoryEyebrow: 'MONETARY POLICY & PURCHASING POWER',
    metricTitle: 'Retail Inflation Anchor & Consumer Price Stability',
    upa: {
      value: '8.1% CPI-IW (10.1% Peak Avg)',
      subtext: 'WPI multi-index anchor with persistent double-digit spikes',
      narrative:
        'Monetary policy lacked a statutory inflation-targeting mandate, operating on a multiple-indicator WPI framework. High fiscal deficits, off-budget oil bonds, and unaddressed agricultural supply bottlenecks caused consumer price inflation to average 10.1% during FY09–FY14, eroding real household purchasing power.',
      source: 'Reserve Bank of India Database on Indian Economy (DBIE)',
    },
    nda: {
      value: '5.0% CPI-Combined (4.5% FY15–19)',
      subtext: 'Statutory 4±2% target via 6-member MPC framework',
      narrative:
        'Instituted the statutory 6-member Monetary Policy Committee (MPC) through the RBI Act amendment (2016) based on Urjit Patel Committee recommendations. Inflation averaged 5.0% across the decade, anchoring consumer expectations even amidst global post-pandemic supply-chain and energy shocks.',
      source: 'RBI DBIE & Ministry of Finance White Paper (2024)',
    },
  },
  {
    id: 'banking-gnpa',
    categoryEyebrow: 'FINANCIAL SYSTEM HEALTH & STRESSED ASSETS',
    metricTitle: 'Scheduled Commercial Bank Gross Non-Performing Assets',
    upa: {
      value: '3.8% Reported (11.2% Stressed)',
      subtext: 'Regulatory forbearance deferred stress recognition',
      narrative:
        'Aggressive infrastructure lending between 2006 and 2012 accumulated massive hidden balance-sheet stress. Regulatory forbearance and Corporate Debt Restructuring (CDR) kept reported gross NPAs artificially low at 3.8% in FY14, deferring genuine recognition to the subsequent administration.',
      source: 'RBI Financial Stability Reports',
    },
    nda: {
      value: '2.8% Multi-Year Low (March 2024)',
      subtext: 'Over ₹3.4 Lakh Cr recovered via IBC 2016',
      narrative:
        'Following the 2015 RBI Asset Quality Review (which revealed peak stressed loans of 11.2% in 2018), Parliament enacted the Insolvency and Bankruptcy Code (IBC 2016). Transparent provisioning, 12 public sector bank consolidations, and IBC resolution recovered over ₹3.4 Lakh Cr, bringing GNPA down to a 12-year low of 2.8%.',
      source: 'RBI Financial Stability Report (June 2024)',
    },
  },
  {
    id: 'highway-velocity',
    categoryEyebrow: 'SURFACE LOGISTICS & FREIGHT CONNECTIVITY',
    metricTitle: 'National Highway Network Velocity & Execution Pace',
    upa: {
      value: '12.1 km/day (91,287 km Total)',
      subtext: 'Total NH network stood at 91,287 km in March 2014',
      narrative:
        'National highway expansion relied heavily on Build-Operate-Transfer (BOT) toll concession contracts. Aggressive private bidding, protracted land acquisition litigation, and banking debt logjams constrained daily construction velocity to 12.1 km/day by FY14.',
      source: 'Ministry of Road Transport and Highways (MoRTH)',
    },
    nda: {
      value: '28.0–36.5 km/day (1,46,145 km Total)',
      subtext: 'Network expanded by 54,858 km (+60% total growth)',
      narrative:
        'Restructured highway development via the Hybrid Annuity Model (HAM), Bharatmala Pariyojana, and PM Gati Shakti GIS spatial planning. Daily construction velocity accelerated to a peak of 36.5 km/day in FY21 (34.0 km/day in FY24), expanding the total national highway network by 60%.',
      source: 'MoRTH & Economic Survey (2024)',
    },
  },
  {
    id: 'power-clean-energy',
    categoryEyebrow: 'PHYSICAL CAPITAL STOCK & CIVIL AVIATION',
    metricTitle: 'Installed Electricity Capacity, Solar Surge & Operational Airports',
    upa: {
      value: '248.5 GW Power (2.82 GW Solar) • 74 Airports',
      subtext: 'Peak electricity deficit stood at 4.2% in 2014',
      narrative:
        'Expanded thermal power generation capacity, though fuel supply shortages and state Discom accumulated losses led to persistent peak power deficits (4.2% in 2014). Operational commercial airports numbered 74 across the nation.',
      source: 'Central Electricity Authority (CEA) & Ministry of Civil Aviation',
    },
    nda: {
      value: '475.2 GW Power (110.9 GW Solar) • 157+ Airports',
      subtext: 'Solar scaled 39x to 110.9 GW; peak deficit fell to 0.1%',
      narrative:
        'Executed an unprecedented renewable energy transition: solar capacity surged 39-fold from 2.82 GW to 110.9 GW (and 150 GW by 2026), eliminating peak power deficits down to 0.1%. Regional aviation scheme RCS-UDAN doubled operational airports from 74 to 157+.',
      source: 'Central Electricity Authority, MNRE & MoCA',
    },
  },
  {
    id: 'digital-dpi',
    categoryEyebrow: 'DIGITAL PUBLIC INFRASTRUCTURE & WELFARE DELIVERY',
    metricTitle: 'Biometric Identity Inception vs. Scale Real-Time Welfare Grid',
    upa: {
      value: 'Aadhaar Rollout (Pilot DBT in 43 Dists)',
      subtext: 'Conceptualized UIDAI for targeted subsidy distribution',
      narrative:
        'Created the Unique Identification Authority of India (UIDAI) in 2009 under the Planning Commission, enrolling initial citizens and initiating pilot Direct Benefit Transfer mechanisms in 43 districts for LPG and educational scholarships.',
      source: 'Planning Commission / UIDAI Annual Reports',
    },
    nda: {
      value: '₹200 Lakh Cr UPI • 52 Cr Jan Dhan Accounts',
      subtext: 'Universal financial inclusion via the JAM Trinity',
      narrative:
        'Engineered the Unified Payments Interface (UPI) to process over ₹200 Lakh Cr ($2.4 Trillion) annually. Combined with 52 Crore Jan Dhan bank accounts, Direct Benefit Transfer saturated 300+ welfare schemes, eliminating ghost beneficiaries and saving over ₹2.7 Lakh Cr in leakages.',
      source: 'NPCI & Ministry of Finance DBT Mission',
    },
  },
];

// ========================================================
// 2. LAW & ORDER COMPARISON ITEMS
// ========================================================
export const LAW_ORDER_ITEMS: ComparisonItem[] = [
  {
    id: 'lwe-extremism',
    categoryEyebrow: 'TERRITORIAL SOVEREIGNTY & ANTI-MAOIST OPERATIONS',
    metricTitle: 'Left-Wing Extremism (Red Corridor) Containment',
    upa: {
      value: '126 Affected Districts • 6,984 Deaths',
      subtext: 'Peak crisis year 2010: 2,213 incidents and 1,005 deaths',
      narrative:
        'Maoist insurgency expanded into an almost unbroken Red Corridor encompassing 126 districts across 10 states. Prime Minister Dr. Manmohan Singh designated LWE as India’s single gravest internal security challenge. Fatalities peaked in 2010 with 1,005 deaths, including the massacre of 75 CRPF personnel at Dantewada.',
      source: 'Ministry of Home Affairs (MHA) Annual Reports',
    },
    nda: {
      value: '11 Districts (2026) • 2,020 Deaths (-91% Footprint)',
      subtext: 'Annual casualties declined 90% from peak to under 100',
      narrative:
        'Deployed a synchronized security-development doctrine combining specialized central CAPF forward operating bases with road, telecom, and banking saturation. Active LWE districts collapsed by 91% from 126 in 2014 to 38 in 2024, and 11 in early 2026, with annual deaths plummeting by 90%.',
      source: 'MHA Annual Reports & PIB Counter-LWE Dossier',
    },
  },
  {
    id: 'urban-terror',
    categoryEyebrow: 'URBAN CITIZEN PROTECTION & COUNTER-TERROR',
    metricTitle: 'Coordinated Civilian Bombings in Commercial Metropolises',
    upa: {
      value: '750+ Fatalities in 10+ Metros',
      subtext: 'Serial attacks in Mumbai, Delhi, Hyderabad, Jaipur, Bengaluru',
      narrative:
        'Mainland urban centers endured recurring synchronized blasts by Indian Mujahideen, LeT, and HuJI modules: Mumbai local trains (2006, 209 dead), 26/11 Mumbai maritime siege (2008, 166 dead), Delhi serial blasts (2005, 2008, 2011), Hyderabad (2007, 2013), and Jaipur/Ahmedabad (2008).',
      source: 'MHA Incident Dossiers & NIA Records',
    },
    nda: {
      value: '0 Coordinated Civilian Bombings',
      subtext: 'Zero synchronized civilian bombings in mainland centers',
      narrative:
        'Zero coordinated civilian terror bombings occurred in mainland Indian metropolises post-2014. Enhanced multi-agency intelligence fusion (24/7 MAC, NATGRID), extraterritorial NIA investigative mandates, and a zero-tolerance doctrine successfully dismantled terror syndicates before execution.',
      source: 'National Investigation Agency (NIA) Records',
    },
  },
  {
    id: 'jk-security',
    categoryEyebrow: 'JAMMU & KASHMIR CONFLICT RESOLUTION',
    metricTitle: 'Jammu & Kashmir Terror Incidents & Fatalities',
    upa: {
      value: '7,217 Incidents • 2,829 Fatalities',
      subtext: 'Recurring street agitation, shutdowns & stone-pelting',
      narrative:
        'The security environment remained contested with cross-border infiltration, terror strikes against security installations, and volatile summer unrest cycles (2008, 2010) shutting down schools and businesses. Total civilian and security forces fatalities stood at 2,829.',
      source: 'MHA Annual Reports (2004–2014)',
    },
    nda: {
      value: '2,197 Incidents • 891 Fatalities (-69%)',
      subtext: 'Post-Article 370 revocation: 0 organized stone-pelting',
      narrative:
        'Revocation of Article 370 in August 2019 dismantled institutional separatist financing networks. Organized stone-pelting ceased entirely, terror incidents dropped 70%, over 2.11 Crore tourists visited in 2023, and peaceful high-turnout assembly elections restored elected governance.',
      source: 'MHA Annual Reports (2014–2024)',
    },
  },
  {
    id: 'northeast-peace',
    categoryEyebrow: 'NORTHEAST BORDERLAND INTEGRATION',
    metricTitle: 'Insurgency Incidents & AFSPA Rollback',
    upa: {
      value: 'AFSPA Enforced Across 5 States',
      subtext: 'Active factional militancy across Assam, Nagaland, Manipur',
      narrative:
        'Armed Forces Special Powers Act (AFSPA) was maintained across the entirety of Assam, Nagaland, Manipur, Meghalaya border areas, and Tripura. Factional insurgencies and armed extortion checkpoints created persistent trade and connectivity bottlenecks.',
      source: 'MHA North-East Division Annual Reports',
    },
    nda: {
      value: '12 Historic Accords • 9,000+ Surrenders',
      subtext: 'AFSPA revoked in Tripura, Meghalaya & 85% of Assam',
      narrative:
        'Concluded 12 comprehensive peace settlements including Bodo (2020), Karbi (2021), Adivasi (2022), and ULFA (2023), resulting in the disarmament and surrender of over 9,000 cadres. Insurgency incidents declined 71%, allowing AFSPA to be revoked from over 85% of the Northeast.',
      source: 'MHA North-East Peace Process Dossier (2026)',
    },
  },
];

// ========================================================
// 3. WOMEN'S SAFETY COMPARISON ITEMS
// ========================================================
export const WOMENS_SAFETY_ITEMS: ComparisonItem[] = [
  {
    id: 'mmr-decline',
    categoryEyebrow: 'MATERNAL HEALTHCARE & SAFE MOTHERHOOD',
    metricTitle: 'National Maternal Mortality Ratio (MMR per 100k Live Births)',
    upa: {
      value: '254 (2004-06) → 167 (2011-13)',
      subtext: 'NRHM (2005) & Janani Suraksha cash incentives',
      narrative:
        'Instituted the National Rural Health Mission (2005) and Janani Suraksha Yojana, deploying conditional cash incentives to transition rural childbirth from unassisted homes to primary health centers. MMR declined by 87 points over the decade from 254 to 167.',
      source: 'RGI Sample Registration System (SRS)',
    },
    nda: {
      value: '97 (2018-20) → 93 (2019-21)',
      subtext: 'Surpassed UN Sustainable Development Goal target (<100)',
      narrative:
        'Pushed institutional delivery coverage above 90% via Pradhan Mantri Matru Vandana Yojana and LaQshya labor room quality certifications. National MMR fell to 93, achieving the UN Sustainable Development Goal benchmark (<100) ahead of schedule, with 8 states achieving <70.',
      source: 'RGI SRS & Ministry of Health & Family Welfare',
    },
  },
  {
    id: 'crime-reporting',
    categoryEyebrow: 'CRIME REPORTING & POLICE REGISTRATION',
    metricTitle: 'NCRB Registered Offenses vs. Lethal Crime Trajectory',
    upa: {
      value: '1,54,333 → 3,37,922 (+119%)',
      subtext: 'Section 498A (Cruelty) expanded from 58k to 122k',
      narrative:
        'Total registered crimes against women grew 119%, driven primarily by Section 498A (Cruelty by Husband/Relatives). The tragic 2012 Delhi gang-rape prompted nationwide civil society mobilization, leading to the Justice Verma Committee recommendations and the Nirbhaya Act (2013).',
      source: 'NCRB Crime in India (2004, 2014)',
    },
    nda: {
      value: '4,05,326 → 4,48,211 (+10.5%)',
      subtext: 'Mandatory FIR registration under Section 166A IPC',
      narrative:
        'Reported cases stabilized (+10.5% over 5 years) as mandatory registration under Section 166A IPC and CCTNS digital reporting took firm effect. Crucially, lethal gender crimes declined: dowry deaths contracted 27.2% from 8,455 in 2014 to 6,156 in 2023.',
      source: 'NCRB Crime in India (2019, 2023)',
    },
  },
  {
    id: 'statutory-safeguards',
    categoryEyebrow: 'STATUTORY REFORMS & LEGAL FRAMEWORKS',
    metricTitle: 'Landmark Legislative Enactments & Forensic Evidence Mandates',
    upa: {
      value: 'DV Act (2005) • Nirbhaya Act (2013)',
      subtext: 'Protection of Women from Domestic Violence & POSH',
      narrative:
        'Enacted the landmark Protection of Women from Domestic Violence Act (2005) and POSH Act (2013). Post-Nirbhaya amendments (2013) expanded the statutory definition of rape, introduced Section 166A penalizing police non-registration, and recognized stalking and acid attacks as specific crimes.',
      source: 'Gazette of India Acts No. 43 of 2005 & 13 of 2013',
    },
    nda: {
      value: 'POCSO Death Penalty • BNS (2023)',
      subtext: 'Mandatory crime-scene videography & forensic investigations',
      narrative:
        'Criminal Law (Amendment) 2018 introduced capital punishment for rape of girls under 12. The Bharatiya Nyaya Sanhita (BNS 2023) overhauled criminal procedure, establishing strict timelines for investigation, mandatory videography, and forensic evidence collection to address trial pendency.',
      source: 'Gazette of India Act No. 22 of 2018 & Act No. 45 of 2023',
    },
  },
  {
    id: 'crisis-infrastructure',
    categoryEyebrow: 'EXPEDITED JUSTICE & CRISIS SUPPORT',
    metricTitle: 'Fast Track Special Courts (FTSC) & One Stop Centres (Sakhi)',
    upa: {
      value: 'Ad-Hoc Helplines & ₹1,000 Cr Corpus',
      subtext: 'Nirbhaya Fund established in FY14 Union Budget',
      narrative:
        'Announced the creation of the dedicated Nirbhaya Fund in February 2013 with an initial ₹1,000 Crore corpus. Institutional deployment across state police departments and dedicated fast-track courts remained in preliminary inter-ministerial design stages.',
      source: 'Union Budget 2013-14 & MWCD Records',
    },
    nda: {
      value: '750+ Fast Track Courts • 700+ OSCs',
      subtext: '700+ Sakhi centres assisted >8.5 lakh women',
      narrative:
        'Operationalized 750+ Fast Track Special Courts (including 400+ dedicated POCSO courts) to expedite trial disposals. Established 700+ One Stop Centres (Sakhi) providing integrated medical, legal, and psychological relief under one roof, assisting over 8.5 lakh survivors.',
      source: 'Ministry of Law & Justice and MWCD Annual Reports',
    },
  },
];

// ========================================================
// 4. DEFENSE & FORCES COMPARISON ITEMS
// ========================================================
export const DEFENSE_ITEMS: ComparisonItem[] = [
  {
    id: 'defense-exports',
    categoryEyebrow: 'DEFENSE PRODUCTION & EXPORT EXPANSION',
    metricTitle: 'Annual Defence Equipment Exports Volume',
    upa: {
      value: '₹686 Crore (FY 2013-14)',
      subtext: 'Negligible global defense industrial footprint',
      narrative:
        'Domestic defense production functioned primarily through licensed assembly by DPSUs. High-technology sub-systems and weapons platforms were imported complete from foreign OEMs, resulting in annual defense exports of only ₹686 Crore ($110 Million).',
      source: 'Department of Defence Production (DDP / MoD)',
    },
    nda: {
      value: '₹21,083 Cr → ₹38,424 Cr (FY26)',
      subtext: '55-fold surge in exports across 85+ nations',
      narrative:
        'Streamlined defense export authorizations, liberalized FDI, and introduced positive indigenisation lists banning import of 4,600+ items. Defense exports surged 55-fold to ₹21,083 Cr in FY24 (and ₹38,424 Cr in FY26), supplying BrahMos missiles, Pinaka artillery, and aero-structures to 85+ nations.',
      source: 'Department of Defence Production (DDP / MoD)',
    },
  },
  {
    id: 'capital-modernization',
    categoryEyebrow: 'CAPITAL ALLOCATIONS & FORCE LETHALITY',
    metricTitle: 'Armed Forces Capital Acquisition Outlay & Domestic Earmarking',
    upa: {
      value: '₹79,125 Crore (FY 2013-14)',
      subtext: 'Strategic heavy-lift inductions (C-17, P-8I, C-130J)',
      narrative:
        'Successfully contracted and inducted strategic heavy-lift capabilities including C-17 Globemaster, P-8I Neptune, and C-130J Hercules. However, frontline fighter modernization was paralyzed by decade-long procedural deadlocks in the 126 MMRCA tender, and Scorpene submarine commissioning was delayed.',
      source: 'Ministry of Defence Demand for Grants & Standing Committee',
    },
    nda: {
      value: '₹1,80,000 Cr (75% Domestic Earmark)',
      subtext: '36 Rafale IGA • INS Vikrant • Nuclear Triad SSBNs',
      narrative:
        'Modernization capital outlay expanded to ₹1,80,000 Cr, with 75% (₹1.11 Lakh Cr) ring-fenced for domestic industry. Resolved fighter shortage via 36 Rafale IGA, commissioned indigenous aircraft carrier INS Vikrant and nuclear submarines INS Arihant/Arighaat, and contracted 180 LCA Tejas fighters.',
      source: 'Union Budget 2024-25 & MoD PIB',
    },
  },
  {
    id: 'border-roads',
    categoryEyebrow: 'FRONTIER DEFENSE & STRATEGIC CONNECTIVITY',
    metricTitle: 'Border Roads Organisation (BRO) Annual Budget & Pacing',
    upa: {
      value: '₹2,000 Cr Budget • 632 km/year',
      subtext: 'Environmental & procedural delays along LAC passes',
      narrative:
        'Border road construction averaged 632 km/year on a budget of ~₹2,000 Crore. Difficult environmental clearances, limited heavy tunneling machinery, and procedural delays hindered all-weather road connectivity along strategic Northern and Eastern borders.',
      source: 'Parliamentary Standing Committee on Defence Reports',
    },
    nda: {
      value: '₹16,690 Cr Budget • 1,500 km/year',
      subtext: 'Atal Tunnel (9 km) • Sela Tunnel (13,000 ft)',
      narrative:
        'Border roads capital allocation surged over 8-fold to ₹16,690 Crore. Constructed 3,610 km of strategic frontier roads, commissioned the engineering marvel Atal Tunnel (Rohtang), 13,000-ft Sela Tunnel in Arunachal Pradesh, and Mudh-Nyoma high-altitude fighter airbase in eastern Ladakh.',
      source: 'Border Roads Organisation (BRO) PIB Records',
    },
  },
  {
    id: 'veteran-orop',
    categoryEyebrow: 'COMMAND ARCHITECTURE & CADRE WELFARE',
    metricTitle: 'One Rank One Pension (OROP) & Joint Theaterization',
    upa: {
      value: 'Token ₹500 Cr Interim Allocation',
      subtext: '40-year veteran parity demand unfulfilled at tenure end',
      narrative:
        'The Koshyari Committee (2011) unanimously recommended implementation of One Rank One Pension. A token interim sum of ₹500 Crore was announced in the interim FY14 Budget, leaving full operationalization to the next government. Separate single-service headquarters structure persisted.',
      source: 'Rajya Sabha Petition Committee Report 2011',
    },
    nda: {
      value: '₹1.2 Lakh Cr Disbursed • CDS / DMA Created',
      subtext: 'Full OROP execution benefiting 25+ lakh veterans',
      narrative:
        'Notified and executed OROP across three successive revision cycles (OROP-1, 2, 3), disbursing over ₹1,20,000 Crore to 25+ lakh ex-servicemen. Established the Chief of Defence Staff (CDS) and Department of Military Affairs to build integrated theater commands.',
      source: 'Department of Ex-Servicemen Welfare (DESW / MoD)',
    },
  },
];
