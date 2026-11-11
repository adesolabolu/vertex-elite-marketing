import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Compass,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  BarChart3,
  Mail
} from 'lucide-react';

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  client: string;
  sector: string;
  headlineMetric: string;
  summary: string;
  image: string;
  thumb: string;
  challenge: string;
  execution: string[];
  metrics: { label: string; value: string; delta: string }[];
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  outcome: string;
  image: string;
}

const HERO_IMAGE = '/src/assets/images/hero_lagos_fintech_founders_1794233869755.jpg';

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'payverse',
    tag: 'Market Entry & Trust',
    title: 'PayVerse Africa',
    client: 'PayVerse Digital Bank (CBN Tier-1 MFB)',
    sector: 'Consumer & SME Neobank',
    headlineMetric: '+₦42B Monthly TPV',
    summary:
      'Institutional trust re-architecture and low-CAC salary-account acquisition across Lagos, Abuja, and Port Harcourt.',
    image: '/src/assets/images/case_neobank_growth_1794233871046.jpg',
    thumb: '/src/assets/images/case_neobank_growth_1794233871046.jpg',
    challenge:
      'Following a $22M Series A, PayVerse suffered from high dormant-account rates—users downloaded the app for free transfers but kept their primary salary and business float in legacy Tier-1 commercial banks.',
    execution: [
      'Repositioned brand identity around CBN-licensed reliability, instant dispute resolution, and 99.98% uptime transparency',
      'Engineered an automated payroll-switching and SME invoice-financing acquisition funnel across LinkedIn, Google Search, and creator syndicates',
      'Deployed behavioral BVN/NIN onboarding nudges that cut KYC drop-off by 54% within 45 days'
    ],
    metrics: [
      { label: 'Monthly Transaction Volume', value: '₦42.6B', delta: '+215% in 6 Months' },
      { label: 'Funded Active Accounts', value: '640K+', delta: '3.4x Activation Lift' },
      { label: 'Blended CAC Payback', value: '41 Days', delta: '-48% vs. Industry' }
    ]
  },
  {
    id: 'kobofloat',
    tag: 'Growth Systems',
    title: 'KoboFloat POS Network',
    client: 'KoboFloat Merchant Services',
    sector: 'Omnichannel Retail & Agency Banking',
    headlineMetric: '185K Active Merchants',
    summary:
      'Hyper-local merchant acquisition engine and WhatsApp-automated terminal retention across 18 Nigerian states.',
    image: '/src/assets/images/case_merchant_pos_scale_1794233873070.jpg',
    thumb: '/src/assets/images/case_merchant_pos_scale_1794233873070.jpg',
    challenge:
      'Rising hardware subsidies and aggressive field-agent poaching in Balogun, Trade Fair, and Ariaria markets caused high 60-day POS terminal churn among modern retail and supermarket operators.',
    execution: [
      'Built a synchronized online-to-offline (O2O) lead engine routing verified merchant applications directly to state field-deployment teams in under 15 minutes',
      'Launched instant working-capital credit scoring communications tied to daily POS settlement velocity',
      'Integrated automated WhatsApp Business lifecycle check-ins and instant settlement status alerts'
    ],
    metrics: [
      { label: 'Active Smart Terminals', value: '185,000', delta: '+142% Net Active' },
      { label: '90-Day Merchant Retention', value: '88.4%', delta: '+29% Cohort Lift' },
      { label: 'Blended Acquisition ROAS', value: '4.6x', delta: 'Across 18 States' }
    ]
  },
  {
    id: 'cedarbridge',
    tag: 'Brand Visuals',
    title: 'CedarBridge Treasury',
    client: 'CedarBridge FX & Corporate Liquidity',
    sector: 'Cross-Border B2B Treasury',
    headlineMetric: '$310M Corridor Flow',
    summary:
      'Category-defining brand architecture and enterprise ABM demand engine across the Lagos–London–Delaware trade corridor.',
    image: '/src/assets/images/case_crossborder_treasury_1794233874267.jpg',
    thumb: '/src/assets/images/case_crossborder_treasury_1794233874267.jpg',
    challenge:
      'Nigerian importers, SaaS exporters, and multinational CFOs needed compliant multi-currency treasury rails, but perceived emerging fintech platforms as too risky for seven-figure USD/GBP settlements.',
    execution: [
      'Crafted an institutional-grade visual identity, live liquidity benchmark reports, and CFO regulatory dossiers',
      'Executed precision Account-Based Marketing (ABM) targeting 600 CFOs and Heads of Treasury across Victoria Island, Ikeja Industrial Estate, and London',
      'Built an interactive multi-currency FX spread and settlement-time calculator driving direct treasury desk bookings'
    ],
    metrics: [
      { label: 'Quarterly Corridor Volume', value: '$310M+', delta: '+178% YoY Growth' },
      { label: 'Enterprise CFO Accounts', value: '410', delta: '$750K Avg. Monthly Float' },
      { label: 'Enterprise Sales Cycle', value: '28 Days', delta: '-44% Faster Close' }
    ]
  },
  {
    id: 'lagoshaul',
    tag: 'Digital Evolution',
    title: 'HaulGrid Mobility',
    client: 'HaulGrid Supply Chain Technologies',
    sector: 'B2B Logistics & Fleet SaaS',
    headlineMetric: '3.9x Enterprise Pipeline',
    summary:
      'Full-funnel B2B demand generation and enterprise re-positioning for West Africa’s digital freight network.',
    image: '/src/assets/images/case_b2b_logistics_tech_1794233874328.jpg',
    thumb: '/src/assets/images/case_b2b_logistics_tech_1794233874328.jpg',
    challenge:
      'Despite operating 4,200+ tracked haulage assets from Apapa/Tin Can ports to northern distribution hubs, HaulGrid was losing annual FMCG tenders to traditional offline fleet contractors.',
    execution: [
      'Redesigned the digital flagship around real-time telematics visibility, GIT insurance guarantees, and cost-per-kilometer transparency',
      'Deployed targeted search and executive roundtables for supply chain directors in FMCG, cement, and agro-processing',
      'Automated RFQ-to-contract quoting workflows integrated directly with HubSpot and fleet dispatch telemetry'
    ],
    metrics: [
      { label: 'Annualized Contract Pipeline', value: '₦19.4B', delta: '3.9x Pipeline Lift' },
      { label: 'Enterprise Fleet Utilization', value: '91%', delta: '+24% Efficiency' },
      { label: 'Multi-Year FMCG Retainers', value: '34', delta: 'Zero Churn in 12 Mo' }
    ]
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Vertex Elite understands the realities of scaling a fintech in Nigeria. They didn’t hand us vanity impressions—they fixed our KYC drop-off, rebuilt our institutional trust, and scaled our monthly transaction volume past ₦42 billion.',
    name: 'Tunde Bakare',
    title: 'Co-Founder & CEO',
    company: 'PayVerse Africa',
    outcome: '+₦42.6B monthly TPV in 6 months',
    image: '/src/assets/images/hero_lagos_fintech_founders_1794233869755.jpg'
  },
  {
    quote:
      'Expanding from Lagos into London and Nairobi required a brand that global regulators and enterprise CFOs immediately respected. Vertex Elite re-engineered our positioning and delivered $310M in qualified corridor volume.',
    name: 'Folashade Balogun',
    title: 'Chief Financial Officer',
    company: 'CedarBridge Treasury',
    outcome: '$310M+ quarterly corridor volume',
    image: '/src/assets/images/case_crossborder_treasury_1794233874267.jpg'
  },
  {
    quote:
      'Most agencies don’t understand how digital acquisition connects to field agent networks in Aba, Kano, and Lagos. Vertex built an O2O growth machine that scaled us to 185,000 active merchants with an 88% retention rate.',
    name: 'Chidi Nwosu',
    title: 'VP of Growth',
    company: 'KoboFloat POS Network',
    outcome: '185,000 active merchants · 4.6x ROAS',
    image: '/src/assets/images/case_merchant_pos_scale_1794233873070.jpg'
  }
];

const SERVICE_PILLARS = [
  {
    id: 'strategy',
    index: '01',
    kicker: 'Market Entry & Trust',
    title: 'Trust Architecture',
    description:
      'In a high-skepticism market, trust is your primary conversion lever. We position venture-backed startups to command the credibility of heritage institutions.',
    deliverables: [
      'CBN / SEC Regulatory-Grade Brand Positioning',
      'Competitor & Category White-Space Intelligence',
      'Pan-African & Diaspora Go-To-Market Playbooks'
    ],
    benchmark: '2.9x Higher KYB/KYC Verification Rate',
    featured: false
  },
  {
    id: 'curation',
    index: '02',
    kicker: 'User & Merchant Scale',
    title: 'High-Velocity Acquisition',
    description:
      'We connect digital precision with street-level commercial reality—scaling both self-serve app installs and nationwide B2B/merchant field pipelines.',
    deliverables: [
      'Full-Funnel Paid Acquisition (Meta, Google, LinkedIn, Apple)',
      'Online-to-Offline (O2O) Field & Agent Lead Routing',
      'Creator Ecosystems, Tech PR & Executive Authority'
    ],
    benchmark: '-44% Blended CAC Payback Period',
    featured: true
  },
  {
    id: 'evolution',
    index: '03',
    kicker: 'Retention & Economics',
    title: 'Unit Economics Engine',
    description:
      'Downloads mean nothing without active float and repeat usage. We engineer lifecycle systems that protect Naira/FX margins and compound LTV.',
    deliverables: [
      'BVN/NIN Onboarding & First-Deposit Activation Flows',
      'Automated WhatsApp, Push & Email Lifecycle Loops',
      'Weekly Cohort Telemetry & Revenue Attribution'
    ],
    benchmark: '3.8x Blended ROAS Across Cohorts',
    featured: false
  }
];

const INFO_MODALS: Record<
  string,
  { title: string; subtitle: string; body: string[]; meta: string }
> = {
  story: {
    title: 'Built in Lagos for Africa’s Category Leaders',
    subtitle:
      'Why we built an embedded growth engineering partner specifically for African technology companies.',
    body: [
      'Global playbooks break when copied blindly into Lagos, Nairobi, or Accra. High-friction onboarding, trust deficits, offline distribution dynamics, and currency volatility require a fundamentally different growth architecture.',
      'Founded in Victoria Island, Lagos, Vertex Elite brings together former fintech VPs of Growth, institutional brand architects, and performance engineers under one roof.',
      'We partner with at most eight Seed to Series C+ companies per quarter—operating as an embedded extension of your leadership team to turn venture capital into durable market dominance.'
    ],
    meta: 'Established in Lagos · Victoria Island · Abuja · London'
  },
  careers: {
    title: 'Careers at Vertex Elite',
    subtitle:
      'Join a team of growth engineers, product marketers, and editorial designers in Lagos and London.',
    body: [
      'Open Role: Principal Growth Strategist, Fintech & B2B SaaS (Victoria Island, Lagos / Hybrid) — Own full-funnel attribution, CAC payback modeling, and lifecycle retention for Series A–C portfolio partners.',
      'Open Role: Senior Brand & Design Systems Lead (Lagos / Remote) — Architect world-class visual identities and high-converting web flagships for Pan-African category leaders.',
      'Competitive Naira or USD-indexed compensation plus quarterly performance profit-sharing. Apply via our executive inquiry desk below.'
    ],
    meta: 'Victoria Island, Lagos · Remote-Friendly Across WAT/GMT'
  },
  privacy: {
    title: 'NDPR & GDPR Data Privacy Policy',
    subtitle:
      'Strict confidentiality and regulatory compliance for high-growth technology partners.',
    body: [
      'Vertex Elite Strategic Group operates in full compliance with the Nigeria Data Protection Regulation (NDPR / NDPA) and UK/EU GDPR frameworks.',
      'All founder inquiries, cohort metrics, unit economics, and product roadmaps shared during discovery are protected by mutual non-disclosure protocols.',
      'We never broker, syndicate, or expose client telemetry to external third parties.'
    ],
    meta: 'NDPA 2023 & GDPR Compliant · Audited Data Governance'
  },
  terms: {
    title: 'Terms of Engagement',
    subtitle:
      'Aligned incentives built around measurable pipeline, activation, and revenue milestones.',
    body: [
      'Every partnership starts with a 30-day Deep Discovery & Attribution Diagnostic before transitioning into a multi-quarter embedded growth retainer.',
      'All creative systems, attribution dashboards, and custom CRM/WhatsApp automation workflows transfer 100% to your internal team.',
      'Retainer billing is available in NGN (₦) or USD ($) for Delaware/UK parent entities.'
    ],
    meta: 'Vertex Elite Strategic Group · Lagos & Delaware Entities'
  },
  security: {
    title: 'Enterprise & Fintech Security Posture',
    subtitle:
      'Clean-room analytics handling for CBN-regulated fintechs, banks, and enterprise platforms.',
    body: [
      'We work solely with anonymized cohort aggregates and role-restricted analytics environments—never requiring raw customer PII or BVN/card data.',
      'Hardware-key MFA, SOC 2 aligned cloud workspaces, and strict access governance across all client ad accounts and data warehouses.',
      'Full vendor compliance documentation ready for bank, Telco, and Tier-1 enterprise procurement reviews.'
    ],
    meta: 'Zero-PII Analytics Protocol · ISO/IEC 27001 Aligned'
  }
};

function SmartImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Vertex Elite'
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`bg-gradient-to-br from-[#651C24] via-[#3d1015] to-[#050505] flex flex-col items-center justify-center p-6 text-center text-white ${className}`}
      >
        <Layers className="w-8 h-8 text-white/70 mb-2" />
        <span className="font-primary text-sm tracking-wide text-white/90">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}

export default function App() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('payverse');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);
  const [portfolioDrawerOpen, setPortfolioDrawerOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');
  const [selectedPillarId, setSelectedPillarId] = useState<string>('curation');
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);

  // Testimonial slider state
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState<boolean>(false);

  // Info modal state (footer links)
  const [activeInfoKey, setActiveInfoKey] = useState<string | null>(null);

  // Interactive ROI Estimator in Process Section (Supports NGN ₦ and USD $)
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [monthlyRevNGN, setMonthlyRevNGN] = useState<number>(250); // in Millions of Naira (₦250M)
  const [monthlyRevUSD, setMonthlyRevUSD] = useState<number>(300); // in Thousands of USD ($300k)
  const [adSpendRatio, setAdSpendRatio] = useState<number>(12);

  // Consultation Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    stage: 'Series A / Scaling across Nigeria',
    focus: 'User & Merchant Scale — High-Velocity Acquisition',
    budget: '₦15M – ₦35M / mo ($10k – $25k)',
    notes: ''
  });
  const [formError, setFormError] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isTestimonialPaused) return;
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isTestimonialPaused]);

  const currentCase =
    CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  const filteredPortfolio =
    portfolioFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) =>
          c.tag.toLowerCase().includes(portfolioFilter.toLowerCase())
        );

  // Calculate 12-month incremental lift
  const liftMultiplier = 0.45 + (adSpendRatio / 100) * 1.75;
  const projectedAnnualLiftNGNBillions = (
    (monthlyRevNGN * 12 * liftMultiplier) /
    1000
  ).toFixed(2);
  const projectedAnnualLiftUSDMillions = (
    (monthlyRevUSD * 12 * liftMultiplier) /
    1000
  ).toFixed(2);

  const handleSelectPillarForConsultation = (pillarTitle: string) => {
    setFormState((prev) => ({ ...prev, focus: pillarTitle }));
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formState.name.trim() || !formState.company.trim()) {
      setFormError('Please provide your full name and company name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setFormError('Please enter a valid work email address.');
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <div
      id="app-root"
      className="font-secondary bg-neutral-background text-text-secondary overflow-x-hidden min-h-screen flex flex-col w-full relative"
    >
      {/* Top Navigation Bar — Strict 3-Zone Contract */}
      <header className="w-full fixed top-0 left-0 z-40 bg-neutral-background/95 backdrop-blur-md border-b border-neutral-border">
        <div className="max-w-[1200px] mx-auto h-[76px] px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="font-mono text-xl font-bold tracking-tight text-brand-dark whitespace-nowrap shrink-0"
          >
            Vertex<span className="text-brand-primary">.</span>Elite
          </a>

          {/* Zone 2: 4 concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium tracking-tight text-text-secondary hover:text-brand-primary hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Capabilities
            </a>
            <a
              href="#work"
              className="text-sm font-medium tracking-tight text-text-secondary hover:text-brand-primary hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Case Studies
            </a>
            <a
              href="#process"
              className="text-sm font-medium tracking-tight text-text-secondary hover:text-brand-primary hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Growth Engine
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium tracking-tight text-text-secondary hover:text-brand-primary hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Founder Voices
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <a
            href="#contact"
            className="bg-brand-primary text-white pl-5 pr-1.5 rounded-full h-[44px] flex items-center gap-3 hover:opacity-95 transition-opacity group whitespace-nowrap shrink-0"
          >
            <span className="text-sm font-medium tracking-tight whitespace-nowrap">
              Book Growth Audit
            </span>
            <span className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-4 h-4 text-brand-primary transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </header>

      <main id="top" className="flex-grow pt-[76px]">
        <div className="relative w-full overflow-hidden flex flex-col items-center">
          {/* Hero Section */}
          <section className="w-full pb-10 pt-8 md:pt-12 px-6 flex flex-col items-center gap-[42px]">
            <div className="max-w-[1200px] w-full bg-brand-primary rounded-2xl p-5 md:p-8 lg:p-10 flex flex-col items-center overflow-hidden shadow-2xl">
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Hero Copy Column */}
                <div className="lg:col-span-7 py-6 lg:py-12 lg:pl-4 flex flex-col justify-between items-start gap-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div
                      className="flex items-center gap-0.5"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-[18px] h-[18px] fill-white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white/90 font-medium text-sm md:text-base tracking-tight">
                      Silicon Lagoon’s growth partner for Seed to Series C+ leaders
                    </span>
                  </div>

                  <div className="space-y-5">
                    <h1
                      className="font-primary text-[40px] sm:text-[48px] lg:text-[54px] leading-[1.08] text-white tracking-tight max-w-[610px]"
                      style={{ textWrap: 'balance' }}
                    >
                      Engineering category leaders from Lagos to the global stage
                    </h1>
                    <p className="text-white/85 font-normal text-lg md:text-xl leading-[1.55] max-w-[520px]">
                      We turn venture capital into durable market dominance. Full-stack brand trust, high-velocity acquisition, and unit-economics retention built for Nigeria’s fastest-scaling tech companies.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <a
                      href="#contact"
                      className="bg-white text-brand-dark pl-6 pr-1.5 rounded-full h-[48px] flex items-center gap-3 hover:bg-neutral-100 transition-colors group whitespace-nowrap shrink-0"
                    >
                      <span className="text-base font-medium tracking-tight whitespace-nowrap">
                        Schedule Growth Audit
                      </span>
                      <span className="w-[36px] h-[36px] bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                    <a
                      href="#work"
                      className="text-white text-base md:text-lg font-medium tracking-tight hover:underline underline-offset-4 whitespace-nowrap shrink-0 py-2"
                    >
                      Explore Nigerian Case Studies
                    </a>
                  </div>
                </div>

                {/* Hero Portrait Column */}
                <div className="lg:col-span-5 min-h-[380px] lg:min-h-[540px] w-full">
                  <SmartImage
                    src={HERO_IMAGE}
                    alt="Nigerian fintech founders and growth strategists collaborating in Victoria Island, Lagos"
                    fallbackTitle="Victoria Island Growth Studio"
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Partner Logos Marquee */}
            <div className="w-full flex flex-col items-center gap-7 mt-8">
              <p className="text-brand-dark/70 text-xs font-semibold tracking-widest uppercase">
                Trusted by operators and teams scaling across Africa’s flagship ecosystems
              </p>
              <div className="w-full max-w-[1200px] h-14 overflow-hidden relative mask-fade-edges flex items-center">
                <div className="flex items-center gap-[72px] w-max animate-scroll">
                  {[
                    'PAYSTACK',
                    'MONIEPOINT',
                    'PIGGYVEST',
                    'FLUTTERWAVE',
                    'CHOWDECK',
                    'NOMBA',
                    'THRIVEAGRIC',
                    'PAYSTACK',
                    'MONIEPOINT',
                    'PIGGYVEST',
                    'FLUTTERWAVE',
                    'CHOWDECK',
                    'NOMBA',
                    'THRIVEAGRIC'
                  ].map((brand, idx) => (
                    <span
                      key={`${brand}-${idx}`}
                      className="font-primary text-2xl md:text-3xl font-bold text-brand-primary tracking-tight select-none"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="w-full pt-16 pb-16 lg:pt-24 lg:pb-20 px-6 bg-neutral-background flex flex-col items-center"
          >
            <div className="max-w-[1200px] mx-auto w-full">
              {/* Top Asymmetric Editorial Header */}
              <div className="lg:mb-[72px] mb-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[40px] items-end">
                  <div className="lg:col-span-7">
                    <h2 className="text-[48px] sm:text-[64px] lg:text-[96px] font-primary font-semibold leading-[0.9] tracking-tight text-brand-dark">
                      <span className="block">Built for</span>
                      <span className="block">Scale.</span>
                    </h2>
                  </div>
                  <div className="lg:col-span-5 pb-1">
                    <div className="flex flex-col gap-7">
                      <p className="text-lg lg:text-[21px] font-primary font-light leading-[1.45] text-brand-dark/85">
                        Foreign playbooks fail when they hit Nigerian market friction. We combine institutional brand authority with street-smart acquisition and retention mechanics that protect your unit economics.
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center w-fit px-7 py-3.5 bg-brand-primary text-white rounded-lg text-xs font-primary font-semibold uppercase tracking-[2px] transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
                      >
                        Architect Your Growth Engine
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Interactive Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch border-t border-brand-dark/10 pt-14">
                {SERVICE_PILLARS.map((pillar) => {
                  const isFeatured = pillar.featured;
                  const isSelected = selectedPillarId === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      onClick={() => setSelectedPillarId(pillar.id)}
                      className={`rounded-xl p-7 md:p-9 flex flex-col justify-between gap-6 h-full cursor-pointer transition-all duration-200 ${
                        isFeatured
                          ? 'bg-brand-primary text-white shadow-xl'
                          : isSelected
                          ? 'bg-neutral-surface border border-brand-primary/40'
                          : 'bg-neutral-surface border border-neutral-border hover:border-brand-primary/25'
                      }`}
                    >
                      <div className="space-y-5">
                        <div>
                          <p
                            className={`text-xs font-primary font-semibold tracking-wider mb-3 ${
                              isFeatured ? 'text-white/70' : 'text-brand-primary'
                            }`}
                          >
                            {pillar.index}. {pillar.kicker}
                          </p>
                          <h3
                            className={`font-primary text-2xl md:text-3xl font-bold leading-tight tracking-tight ${
                              isFeatured ? 'text-white' : 'text-brand-dark'
                            }`}
                          >
                            {pillar.title}
                          </h3>
                        </div>

                        <p
                          className={`text-base leading-relaxed ${
                            isFeatured ? 'text-white/90' : 'text-text-secondary'
                          }`}
                        >
                          {pillar.description}
                        </p>

                        <ul className="space-y-2 pt-2 border-t border-current/10">
                          {pillar.deliverables.map((item) => (
                            <li
                              key={item}
                              className={`text-xs flex items-center gap-2 ${
                                isFeatured ? 'text-white/85' : 'text-brand-dark/80'
                              }`}
                            >
                              <CheckCircle2
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  isFeatured ? 'text-white' : 'text-brand-primary'
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-current/10 flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-mono tabular-nums ${
                            isFeatured
                              ? 'text-white/80'
                              : 'text-brand-primary font-medium'
                          }`}
                        >
                          {pillar.benchmark}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectPillarForConsultation(
                              `${pillar.kicker} — ${pillar.title}`
                            );
                          }}
                          className={`text-xs font-semibold inline-flex items-center gap-1 hover:underline whitespace-nowrap shrink-0 ${
                            isFeatured ? 'text-white' : 'text-brand-dark'
                          }`}
                        >
                          <span>Select Track</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Featured Work / Selected Case History */}
          <section
            id="work"
            className="w-full pt-8 pb-24 bg-neutral-background flex flex-col items-center"
          >
            <div className="max-w-[1200px] w-full px-6 space-y-6">
              {/* Section Header Bar */}
              <div className="bg-neutral-surface border border-neutral-border rounded-xl px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-brand-primary font-primary font-bold text-lg tracking-wide">
                    Selected Nigerian & Pan-African Case Dossiers
                  </h2>
                  <span aria-hidden="true" className="text-text-secondary/40">
                    ·
                  </span>
                  <span className="text-xs font-mono tabular-nums text-text-secondary">
                    4 Audited Growth Transformations
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPortfolioDrawerOpen(true)}
                  className="text-sm font-primary font-semibold text-brand-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <span>View Complete Archive</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3-Column Asymmetric Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_320px] gap-6 items-stretch">
                {/* Left: Capability Proof Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
                  <div
                    onClick={() => setSelectedCaseId('kobofloat')}
                    className="bg-neutral-surface rounded-xl p-6 flex flex-col justify-between h-full min-h-[190px] group hover:border-brand-primary/30 transition-colors border border-neutral-border cursor-pointer"
                  >
                    <TrendingUp className="w-7 h-7 text-brand-primary mb-3" />
                    <div>
                      <h3 className="font-primary text-base leading-tight mb-2 text-brand-primary font-bold">
                        O2O & Digital Funnels
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Synchronizing digital performance ads with nationwide field agent and POS networks at an average{' '}
                        <span className="font-mono tabular-nums font-semibold text-brand-dark">
                          3.8x–4.6x ROAS
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setSelectedCaseId('cedarbridge')}
                    className="bg-neutral-surface rounded-xl p-6 flex flex-col justify-between h-full min-h-[190px] group hover:border-brand-primary/30 transition-colors border border-neutral-border cursor-pointer"
                  >
                    <Compass className="w-7 h-7 text-brand-primary mb-3" />
                    <div>
                      <h3 className="font-primary text-base leading-tight mb-2 text-brand-primary font-bold">
                        Institutional Trust
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Category-defining design systems that win CBN regulatory confidence, enterprise CFOs, and everyday depositors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center: Active Featured Project Spotlight */}
                <div
                  onClick={() => setActiveModalCase(currentCase)}
                  className="bg-brand-secondary rounded-xl overflow-hidden relative min-h-[420px] h-full shadow-lg group cursor-pointer"
                >
                  <SmartImage
                    src={currentCase.image}
                    alt={currentCase.title}
                    fallbackTitle={currentCase.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col justify-end p-8">
                    <div className="flex items-center gap-2 text-white/85 text-xs font-medium mb-2">
                      <span>{currentCase.tag}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums text-white font-semibold">
                        {currentCase.headlineMetric}
                      </span>
                    </div>
                    <h3 className="text-white font-primary text-3xl lg:text-5xl font-bold leading-none mb-3">
                      {currentCase.title}
                    </h3>
                    <p className="text-white/85 text-sm font-secondary max-w-md mb-5">
                      {currentCase.summary}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-white group-hover:underline">
                      <span>Inspect Full Case Dossier</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Project Switcher List */}
                <div className="flex flex-col gap-3.5 h-full">
                  {CASE_STUDIES.map((study) => {
                    const isActive = study.id === selectedCaseId;
                    return (
                      <button
                        key={study.id}
                        type="button"
                        onClick={() => setSelectedCaseId(study.id)}
                        className={`rounded-xl p-3.5 flex items-center gap-4 flex-1 text-left transition-all cursor-pointer group border ${
                          isActive
                            ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                            : 'bg-neutral-surface text-brand-dark border-neutral-border hover:border-brand-primary/30'
                        }`}
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <SmartImage
                            src={study.thumb}
                            alt={study.title}
                            fallbackTitle={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4
                            className={`font-primary text-sm font-bold truncate ${
                              isActive ? 'text-white' : 'text-brand-primary'
                            }`}
                          >
                            {study.title}
                          </h4>
                          <div
                            className={`flex items-center gap-1.5 text-xs font-medium truncate mt-0.5 ${
                              isActive ? 'text-white/85' : 'text-text-secondary'
                            }`}
                          >
                            <span className="truncate">{study.sector}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums shrink-0">
                              {study.headlineMetric}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Stats & Process ("The Vertex Growth Engine") */}
          <section
            id="process"
            className="w-full py-20 px-6 flex flex-col items-center overflow-hidden"
          >
            <div className="max-w-[1200px] w-full bg-brand-primary rounded-2xl overflow-hidden relative">
              {/* Subtle geometric light plane */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none" />

              <div className="relative z-10 px-6 py-12 md:p-14 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: 3-Step Method */}
                <div className="space-y-10">
                  <div>
                    <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-2">
                      Silicon Lagoon Operating System
                    </p>
                    <h2 className="font-primary text-3xl md:text-5xl text-white tracking-tight leading-tight font-semibold">
                      The Vertex Growth Method
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: 'Unit Economics & Funnel Audit',
                        duration: 'Weeks 1–2',
                        desc: 'We dissect your BVN/KYB onboarding drop-offs, channel CAC payback, and cohort retention to uncover immediate Naira and FX leverage.'
                      },
                      {
                        step: 2,
                        title: 'Trust & Acquisition Architecture',
                        duration: 'Weeks 3–5',
                        desc: 'Rebuilding your brand narrative, product landing systems, and omnichannel acquisition loops across digital, creator, and field networks.'
                      },
                      {
                        step: 3,
                        title: 'Weekly Sprint Execution',
                        duration: 'Ongoing Embedded Retainer',
                        desc: 'High-velocity creative testing, WhatsApp/push lifecycle automation, and weekly boardroom telemetry tied directly to net active revenue.'
                      }
                    ].map((item, idx) => {
                      const isCurrent = activeMethodStep === idx;
                      return (
                        <div
                          key={item.step}
                          onClick={() => setActiveMethodStep(idx)}
                          className={`flex gap-5 p-4 rounded-xl transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-white/10 border border-white/20'
                              : 'hover:bg-white/5 border border-transparent'
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 font-mono tabular-nums font-bold text-sm ${
                              isCurrent
                                ? 'bg-white text-brand-primary border-white'
                                : 'border-white/30 text-white'
                            }`}
                          >
                            {item.step}
                          </div>
                          <div>
                            <div className="flex items-center gap-2.5 mb-1">
                              <h3 className="text-white text-lg md:text-xl font-bold">
                                {item.title}
                              </h3>
                              <span aria-hidden="true" className="text-white/40">
                                ·
                              </span>
                              <span className="text-xs font-mono text-white/75">
                                {item.duration}
                              </span>
                            </div>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: 2x2 KPI Grid + Interactive Dual-Currency Growth Calculator */}
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/15 flex flex-col gap-2">
                      <span className="text-3xl md:text-4xl font-primary font-bold text-white tabular-nums">
                        ₦680B+
                      </span>
                      <span className="text-white/70 font-medium text-xs md:text-sm">
                        Client TPV Scaled
                      </span>
                    </div>
                    <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/15 flex flex-col gap-2 translate-y-3 md:translate-y-6">
                      <span className="text-3xl md:text-4xl font-primary font-bold text-white tabular-nums">
                        3.8x
                      </span>
                      <span className="text-white/70 font-medium text-xs md:text-sm">
                        Blended Cohort ROAS
                      </span>
                    </div>
                    <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/15 flex flex-col gap-2">
                      <span className="text-3xl md:text-4xl font-primary font-bold text-white tabular-nums">
                        32+
                      </span>
                      <span className="text-white/70 font-medium text-xs md:text-sm">
                        Venture-Backed Leaders
                      </span>
                    </div>
                    <div className="bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/15 flex flex-col gap-2 translate-y-3 md:translate-y-6">
                      <span className="text-3xl md:text-4xl font-primary font-bold text-white tabular-nums">
                        41d
                      </span>
                      <span className="text-white/70 font-medium text-xs md:text-sm">
                        Avg. CAC Payback
                      </span>
                    </div>
                  </div>

                  {/* Interactive Benchmark Simulator with NGN / USD Switch */}
                  <div className="bg-black/25 border border-white/15 rounded-xl p-6 mt-8 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-white/85">
                        Interactive Growth & TPV Estimator
                      </span>
                      <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-md">
                        <button
                          type="button"
                          onClick={() => setCurrency('NGN')}
                          className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 ${
                            currency === 'NGN'
                              ? 'bg-white text-brand-primary font-semibold'
                              : 'text-white/75 hover:text-white'
                          }`}
                        >
                          ₦ NGN
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrency('USD')}
                          className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 ${
                            currency === 'USD'
                              ? 'bg-white text-brand-primary font-semibold'
                              : 'text-white/75 hover:text-white'
                          }`}
                        >
                          $ USD
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {currency === 'NGN' ? (
                        <div>
                          <div className="flex justify-between text-xs text-white/85 mb-1">
                            <span>Current Monthly Net Revenue / Float</span>
                            <span className="font-mono tabular-nums font-semibold">
                              ₦{monthlyRevNGN}M / mo
                            </span>
                          </div>
                          <input
                            type="range"
                            min={50}
                            max={2000}
                            step={50}
                            value={monthlyRevNGN}
                            onChange={(e) =>
                              setMonthlyRevNGN(Number(e.target.value))
                            }
                            className="w-full accent-white cursor-pointer"
                            aria-label="Current Monthly Revenue in Naira Millions"
                          />
                        </div>
                      ) : (
                        <div>
                          <div className="flex justify-between text-xs text-white/85 mb-1">
                            <span>Current Monthly Net Revenue (USD)</span>
                            <span className="font-mono tabular-nums font-semibold">
                              ${monthlyRevUSD}k / mo
                            </span>
                          </div>
                          <input
                            type="range"
                            min={50}
                            max={2000}
                            step={50}
                            value={monthlyRevUSD}
                            onChange={(e) =>
                              setMonthlyRevUSD(Number(e.target.value))
                            }
                            className="w-full accent-white cursor-pointer"
                            aria-label="Current Monthly Revenue in USD Thousands"
                          />
                        </div>
                      )}

                      <div>
                        <div className="flex justify-between text-xs text-white/85 mb-1">
                          <span>Growth & Acquisition Reinvestment</span>
                          <span className="font-mono tabular-nums font-semibold">
                            {adSpendRatio}% of Revenue
                          </span>
                        </div>
                        <input
                          type="range"
                          min={5}
                          max={25}
                          step={1}
                          value={adSpendRatio}
                          onChange={(e) => setAdSpendRatio(Number(e.target.value))}
                          className="w-full accent-white cursor-pointer"
                          aria-label="Growth Reinvestment Allocation"
                        />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                      <span className="text-xs text-white/75">
                        Projected 12-Month Incremental Lift
                      </span>
                      <span className="font-primary text-2xl font-bold text-white tabular-nums">
                        {currency === 'NGN'
                          ? `+₦${projectedAnnualLiftNGNBillions}B`
                          : `+$${projectedAnnualLiftUSDMillions}M`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Slider ("Founder & Executive Voices") */}
          <section
            id="testimonials"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
            className="w-full py-24 px-6 flex flex-col items-center bg-neutral-surface relative overflow-hidden"
          >
            <div className="max-w-[1200px] w-full text-center space-y-10">
              <div className="w-16 h-1 bg-brand-primary mx-auto" />

              <div className="relative min-h-[180px] flex items-center justify-center px-4">
                <blockquote
                  className="font-primary text-[26px] sm:text-[34px] md:text-[40px] text-brand-dark leading-[1.22] tracking-tight max-w-4xl mx-auto transition-opacity duration-200"
                  style={{ textWrap: 'balance' }}
                >
                  "{TESTIMONIALS[testimonialIdx].quote}"
                </blockquote>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-neutral-200 overflow-hidden border-2 border-brand-primary/20 shadow-sm">
                  <SmartImage
                    src={TESTIMONIALS[testimonialIdx].image}
                    alt={TESTIMONIALS[testimonialIdx].name}
                    fallbackTitle={TESTIMONIALS[testimonialIdx].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-brand-dark">
                    {TESTIMONIALS[testimonialIdx].name}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-brand-dark/65">
                    <span>
                      {TESTIMONIALS[testimonialIdx].title},{' '}
                      {TESTIMONIALS[testimonialIdx].company}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums text-brand-primary font-medium">
                      {TESTIMONIALS[testimonialIdx].outcome}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Controls & Pagination Dots */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setTestimonialIdx(
                      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-neutral-border bg-white flex items-center justify-center text-brand-dark hover:border-brand-primary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2.5">
                  {TESTIMONIALS.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setTestimonialIdx(i)}
                      aria-label={`Show testimonial from ${t.name}`}
                      className={`h-2.5 rounded-full transition-all duration-200 ${
                        i === testimonialIdx
                          ? 'w-7 bg-brand-primary'
                          : 'w-2.5 bg-brand-primary/25 hover:bg-brand-primary/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
                  }
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-neutral-border bg-white flex items-center justify-center text-brand-dark hover:border-brand-primary transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Final CTA & Executive Consultation Form */}
          <section
            id="contact"
            className="w-full py-24 md:py-32 px-6 flex flex-col items-center"
          >
            <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Editorial CTA */}
              <div className="lg:col-span-6 space-y-8">
                <div className="text-xs font-mono text-brand-primary tracking-wider uppercase">
                  Lagos · Abuja · London Partner Allocation
                </div>
                <h2
                  className="font-primary text-[46px] sm:text-[58px] lg:text-[66px] text-brand-dark tracking-tight leading-[0.98]"
                  style={{ textWrap: 'balance' }}
                >
                  Ready to own your category?
                </h2>
                <p className="text-brand-dark/70 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                  We partner with a maximum of eight high-growth technology companies per quarter so our managing principals remain directly embedded in your execution.
                </p>

                <div className="pt-2">
                  <a
                    href="mailto:lagos@vertexelite.com"
                    className="bg-brand-primary text-white pl-8 pr-2 rounded-full h-[64px] inline-flex items-center gap-5 hover:opacity-95 transition-opacity group whitespace-nowrap shrink-0"
                  >
                    <span className="text-lg font-medium tracking-tight whitespace-nowrap">
                      Speak with a Managing Partner
                    </span>
                    <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-brand-primary transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </div>

                <div className="pt-6 border-t border-neutral-border grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-brand-dark mb-1">
                      Lagos Advisory Desk
                    </p>
                    <p className="text-text-secondary font-mono text-xs">
                      lagos@vertexelite.com
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark mb-1">
                      Operating Hubs
                    </p>
                    <p className="text-text-secondary text-xs">
                      Victoria Island, Lagos · Abuja · London
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Validated Lead Capture Form */}
              <div className="lg:col-span-6 w-full bg-neutral-surface border border-neutral-border rounded-2xl p-6 sm:p-10">
                {formSubmitted ? (
                  <div className="py-10 text-center space-y-5">
                    <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-primary text-2xl font-bold text-brand-dark">
                      Growth Audit Request Confirmed
                    </h3>
                    <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                      Thank you,{' '}
                      <span className="font-semibold text-brand-dark">
                        {formState.name}
                      </span>
                      . Our Lagos Managing Partner for{' '}
                      <span className="font-semibold text-brand-dark">
                        {formState.focus}
                      </span>{' '}
                      will reach out to{' '}
                      <span className="font-mono text-xs text-brand-primary">
                        {formState.email}
                      </span>{' '}
                      within 24 hours with an initial unit-economics & funnel diagnostic for{' '}
                      <span className="font-semibold text-brand-dark">
                        {formState.company}
                      </span>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          company: '',
                          stage: 'Series A / Scaling across Nigeria',
                          focus: 'User & Merchant Scale — High-Velocity Acquisition',
                          budget: '₦15M – ₦35M / mo ($10k – $25k)',
                          notes: ''
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-brand-primary border border-brand-primary/30 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                    <div className="flex items-center justify-between border-b border-neutral-border pb-4">
                      <h3 className="font-primary text-xl font-bold text-brand-dark">
                        Book 30-Minute Growth Diagnostic
                      </h3>
                      <span className="text-xs font-mono text-text-secondary">
                        NDPA / NDA Protected
                      </span>
                    </div>

                    {formError && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 font-medium">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="lead-name"
                          className="block text-xs font-medium text-brand-dark mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="lead-name"
                          type="text"
                          required
                          placeholder="Tunde Bakare"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-neutral-border rounded-lg text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lead-email"
                          className="block text-xs font-medium text-brand-dark mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          required
                          placeholder="tunde@payverse.ng"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-neutral-border rounded-lg text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="lead-company"
                          className="block text-xs font-medium text-brand-dark mb-1.5"
                        >
                          Company / Product Name *
                        </label>
                        <input
                          id="lead-company"
                          type="text"
                          required
                          placeholder="PayVerse Africa"
                          value={formState.company}
                          onChange={(e) =>
                            setFormState({ ...formState, company: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-neutral-border rounded-lg text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lead-budget"
                          className="block text-xs font-medium text-brand-dark mb-1.5"
                        >
                          Monthly Growth Allocation
                        </label>
                        <select
                          id="lead-budget"
                          value={formState.budget}
                          onChange={(e) =>
                            setFormState({ ...formState, budget: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-neutral-border rounded-lg text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
                        >
                          <option value="₦15M – ₦35M / mo ($10k – $25k)">
                            ₦15M – ₦35M / mo ($10k – $25k)
                          </option>
                          <option value="₦35M – ₦75M / mo ($25k – $50k)">
                            ₦35M – ₦75M / mo ($25k – $50k)
                          </option>
                          <option value="₦75M+ / mo ($50k+ Enterprise)">
                            ₦75M+ / mo ($50k+ Enterprise)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="lead-focus"
                        className="block text-xs font-medium text-brand-dark mb-1.5"
                      >
                        Primary Growth Priority
                      </label>
                      <select
                        id="lead-focus"
                        value={formState.focus}
                        onChange={(e) =>
                          setFormState({ ...formState, focus: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-border rounded-lg text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
                      >
                        <option value="Market Entry & Trust — Trust Architecture">
                          Market Entry & Trust — Trust Architecture
                        </option>
                        <option value="User & Merchant Scale — High-Velocity Acquisition">
                          User & Merchant Scale — High-Velocity Acquisition
                        </option>
                        <option value="Retention & Economics — Unit Economics Engine">
                          Retention & Economics — Unit Economics Engine
                        </option>
                        <option value="Full-Stack Pan-African Expansion">
                          Full-Stack Pan-African Expansion (All 3 Tracks)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="lead-notes"
                        className="block text-xs font-medium text-brand-dark mb-1.5"
                      >
                        Target Metrics & Bottlenecks (Next 2 Quarters)
                      </label>
                      <textarea
                        id="lead-notes"
                        rows={3}
                        placeholder="e.g., Reducing BVN onboarding drop-off, scaling active merchant POS float, or launching B2B treasury sales in Lagos and London..."
                        value={formState.notes}
                        onChange={(e) =>
                          setFormState({ ...formState, notes: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-border rounded-lg text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-brand-primary text-white rounded-lg text-sm font-medium hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Executive Growth Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-surface border-t border-neutral-border pt-20 pb-14 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-isometric-grid opacity-20 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand Column */}
            <div className="space-y-5">
              <a
                href="#top"
                className="font-mono text-2xl font-bold tracking-tight text-brand-dark block"
              >
                Vertex<span className="text-brand-primary">.</span>Elite
              </a>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                Silicon Lagoon’s embedded growth engineering partner. Turning venture capital into durable market dominance across Nigeria and Africa.
              </p>
              <div className="flex gap-3">
                <a
                  href="#contact"
                  aria-label="Contact Lagos Advisory Desk"
                  className="w-10 h-10 border border-neutral-border bg-white rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#work"
                  aria-label="View Nigerian Case Studies"
                  className="w-10 h-10 border border-neutral-border bg-white rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-colors"
                >
                  <BarChart3 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Expertise Column */}
            <div>
              <h4 className="text-brand-dark font-primary font-bold text-sm mb-5 tracking-wider uppercase">
                Capabilities
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPillarForConsultation(
                        'User & Merchant Scale — High-Velocity Acquisition'
                      )
                    }
                    className="text-text-secondary hover:text-brand-primary transition-colors text-left"
                  >
                    Fintech & O2O User Acquisition
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPillarForConsultation(
                        'Market Entry & Trust — Trust Architecture'
                      )
                    }
                    className="text-text-secondary hover:text-brand-primary transition-colors text-left"
                  >
                    Institutional Brand Architecture
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectPillarForConsultation(
                        'Retention & Economics — Unit Economics Engine'
                      )
                    }
                    className="text-text-secondary hover:text-brand-primary transition-colors text-left"
                  >
                    KYC Activation & Lifecycle Retention
                  </button>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-text-secondary hover:text-brand-primary transition-colors block"
                  >
                    Naira & FX Unit Economics Modeling
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-brand-dark font-primary font-bold text-sm mb-5 tracking-wider uppercase">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoKey('story')}
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Our Lagos Story
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setPortfolioDrawerOpen(true)}
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Case Dossiers
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoKey('careers')}
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Careers (Lagos & Remote)
                  </button>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-text-secondary hover:text-brand-primary transition-colors block"
                  >
                    Book Growth Audit
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-brand-dark font-primary font-bold text-sm mb-5 tracking-wider uppercase">
                Governance
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoKey('privacy')}
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    NDPR & GDPR Privacy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoKey('terms')}
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Terms of Engagement
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveInfoKey('security')}
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Fintech Security Posture
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-secondary font-mono">
            <p>© 2026 Vertex Elite Strategic Group. All rights reserved.</p>
            <p>Victoria Island, Lagos · Maitama, Abuja · London</p>
          </div>
        </div>
      </footer>

      {/* Case Study Detail Modal */}
      {activeModalCase && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalCase(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-border my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72 w-full">
              <SmartImage
                src={activeModalCase.image}
                alt={activeModalCase.title}
                fallbackTitle={activeModalCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                  <span>{activeModalCase.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalCase.sector}</span>
                </div>
                <h3 className="font-primary text-3xl sm:text-4xl font-bold text-white">
                  {activeModalCase.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCase(null)}
                aria-label="Close case study modal"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Quantified Outcome Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeModalCase.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-neutral-surface border border-neutral-border rounded-xl p-4"
                  >
                    <p className="text-xs text-text-secondary mb-1">{m.label}</p>
                    <p className="font-primary text-2xl font-bold text-brand-primary tabular-nums">
                      {m.value}
                    </p>
                    <p className="text-xs font-mono text-brand-dark/70 tabular-nums mt-0.5">
                      {m.delta}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-primary text-sm font-bold uppercase tracking-wider text-brand-dark mb-2">
                  Market Challenge
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {activeModalCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-primary text-sm font-bold uppercase tracking-wider text-brand-dark mb-2.5">
                  Growth Engineering Execution
                </h4>
                <ul className="space-y-2">
                  {activeModalCase.execution.map((step) => (
                    <li
                      key={step}
                      className="text-sm text-text-secondary flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-border flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveModalCase(null)}
                  className="text-xs font-semibold text-text-secondary hover:text-brand-dark"
                >
                  Close Dossier
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalCase.title;
                    setActiveModalCase(null);
                    handleSelectPillarForConsultation(`Case Benchmark: ${title}`);
                  }}
                  className="px-5 py-2.5 bg-brand-primary text-white text-xs font-semibold rounded-lg hover:opacity-95 transition-opacity inline-flex items-center gap-2"
                >
                  <span>Deploy Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Portfolio Explorer Modal */}
      {portfolioDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setPortfolioDrawerOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-border my-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-border pb-4">
              <div>
                <h3 className="font-primary text-2xl font-bold text-brand-dark">
                  Nigerian & Pan-African Case Archive
                </h3>
                <p className="text-xs text-text-secondary">
                  Audited growth transformations across digital banking, agency POS networks, cross-border FX, and B2B mobility
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPortfolioDrawerOpen(false)}
                aria-label="Close portfolio archive"
                className="w-9 h-9 rounded-full bg-neutral-surface flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-surface rounded-lg w-fit">
              {[
                { id: 'all', label: 'All Engagements' },
                { id: 'Trust', label: 'Market Entry & Trust' },
                { id: 'Growth', label: 'O2O Growth Systems' },
                { id: 'Visuals', label: 'Brand Architecture' },
                { id: 'Evolution', label: 'B2B Digital Evolution' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPortfolioFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    portfolioFilter === tab.id
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-text-secondary hover:text-brand-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredPortfolio.map((study) => (
                <div
                  key={study.id}
                  onClick={() => {
                    setPortfolioDrawerOpen(false);
                    setActiveModalCase(study);
                  }}
                  className="group border border-neutral-border rounded-xl overflow-hidden bg-neutral-surface hover:border-brand-primary/40 transition-all cursor-pointer flex flex-col"
                >
                  <div className="h-44 overflow-hidden relative">
                    <SmartImage
                      src={study.image}
                      alt={study.title}
                      fallbackTitle={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-text-secondary mb-1">
                        <span>{study.sector}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums text-brand-primary font-semibold">
                          {study.headlineMetric}
                        </span>
                      </div>
                      <h4 className="font-primary text-xl font-bold text-brand-dark">
                        {study.title}
                      </h4>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {study.summary}
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-brand-primary inline-flex items-center gap-1 group-hover:underline">
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Informational Modal for Company & Governance Links */}
      {activeInfoKey && INFO_MODALS[activeInfoKey] && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveInfoKey(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-border space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-neutral-border pb-4">
              <div>
                <h3 className="font-primary text-2xl font-bold text-brand-dark">
                  {INFO_MODALS[activeInfoKey].title}
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  {INFO_MODALS[activeInfoKey].subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveInfoKey(null)}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-neutral-surface flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              {INFO_MODALS[activeInfoKey].body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-border flex items-center justify-between text-xs text-text-secondary font-mono">
              <span>{INFO_MODALS[activeInfoKey].meta}</span>
              <button
                type="button"
                onClick={() => setActiveInfoKey(null)}
                className="px-4 py-2 bg-brand-primary text-white font-secondary font-semibold rounded-lg hover:opacity-95"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
