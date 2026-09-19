import React from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Receipt, 
  Boxes, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2, 
  Smartphone, 
  TrendingUp, 
  Lock, 
  Clock, 
  HelpCircle,
  Building2,
  Calendar
} from "lucide-react";
import { FEATURE_PAGES_DATA } from "./featurePagesData.js";

const iconMap = {
  "cash-flow-finance": DollarSign,
  "tax-compliance": Receipt,
  "inventory-operations": Boxes,
  "customers-whatsapp-crm": MessageSquare,
  "business-intelligence-growth": BarChart3
};

const badgeStyles = {
  "cash-flow-finance": "bg-emerald-50 text-emerald-800 border-emerald-200",
  "tax-compliance": "bg-amber-50 text-amber-900 border-amber-200",
  "inventory-operations": "bg-blue-50 text-blue-800 border-blue-200",
  "customers-whatsapp-crm": "bg-rose-50 text-rose-800 border-rose-200",
  "business-intelligence-growth": "bg-indigo-50 text-indigo-800 border-indigo-200"
};

const iconStyles = {
  "cash-flow-finance": "bg-emerald-600 text-white",
  "tax-compliance": "bg-amber-500 text-slate-950",
  "inventory-operations": "bg-blue-600 text-white",
  "customers-whatsapp-crm": "bg-rose-500 text-white",
  "business-intelligence-growth": "bg-indigo-600 text-white"
};

export function FeatureDetailPageComponent({
  pageKey,
  onNavigateHome,
  onNavigateFeature,
  onOpenRegister,
  onOpenDashboard
}) {
  const pageData = FEATURE_PAGES_DATA[pageKey] || FEATURE_PAGES_DATA["cash-flow-finance"];
  const PageIcon = iconMap[pageData.id] || DollarSign;

  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageKey]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900">
      {/* Breadcrumb & Sub-nav Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-20 z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span>/</span>
            <span className="text-slate-400">Features</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">{pageData.shortTitle}</span>
          </div>

          {/* Quick switcher to other feature pages */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 max-w-full text-xs">
            {Object.values(FEATURE_PAGES_DATA).map((item) => {
              const isCurrent = item.id === pageData.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigateFeature(item.id)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isCurrent
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  #{item.challengeNumber} {item.shortTitle}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-[#0B192C] to-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{pageData.badgeText}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg ${iconStyles[pageData.id] || "bg-emerald-600 text-white"}`}>
                <PageIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
                  {pageData.title}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-emerald-300 uppercase tracking-wider mt-1">
                  {pageData.subtitle}
                </p>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {pageData.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRegister}
                className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDashboard}
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>View in Live Dashboard</span>
              </button>
            </div>

            {/* Highlight Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
              {pageData.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Detailed Explanation Section */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              In-Depth Capability Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-4 leading-tight">
              {pageData.tagline}
            </h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              {pageData.detailedOverview}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageData.keyCapabilities.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:bg-slate-50 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-emerald-700 font-bold flex items-center justify-center text-sm mb-4 shadow-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Dashboard Screenshot / Interactive Mockup Section */}
        <section className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl text-white overflow-hidden relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Feature Console Interface</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {pageData.screenshot.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-medium text-slate-300">Live Simulation</span>
            </div>
          </div>

          {/* Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {pageData.screenshot.stats.map((st, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0B192C] border border-slate-800">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {st.label}
                </p>
                <p className="text-2xl font-extrabold text-white mt-1">
                  {st.value}
                </p>
                <p className={`text-[11px] font-medium mt-1 ${
                  st.status === "positive" ? "text-emerald-400" :
                  st.status === "warning" ? "text-amber-400" : "text-slate-300"
                }`}>
                  {st.change}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Mockup Table */}
          <div className="mt-6 rounded-2xl bg-[#081220] border border-slate-800 overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300">
              <span>Operational Ledger & Activity Log</span>
              <span className="text-emerald-400">Synchronized with Nairobi Node</span>
            </div>
            <div className="divide-y divide-slate-800/80">
              {pageData.screenshot.mockupRows.map((row, idx) => (
                <div key={idx} className="p-4 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      row.color === "emerald" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                      row.color === "amber" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                      row.color === "blue" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                      "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                    }`}>
                      #{idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{row.desc}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{row.time} • Ref: {row.ref}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:justify-end">
                    <span className="text-sm font-bold text-white font-mono">{row.amount}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {row.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Workflow */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              How It Operates
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-2">
              4 Steps to Master {pageData.shortTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.workflowSteps.map((ws, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-emerald-600 font-mono">
                    {ws.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-3">
                    {ws.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mandatory Disclaimer (Specific to Tax & Compliance, present if defined) */}
        {pageData.disclaimer && (
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-950">Important Notice:</p>
              <p className="mt-0.5 italic">{pageData.disclaimer}</p>
            </div>
          </div>
        )}

        {/* Other Challenges Navigation */}
        <section className="p-8 rounded-3xl bg-slate-100/80 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Explore All 5 Business Challenges
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Each module works independently or as one unified operating system.
              </p>
            </div>
            <button
              onClick={onNavigateHome}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1 cursor-pointer"
            >
              <span>Back to all cards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Object.values(FEATURE_PAGES_DATA).map((item) => {
              const ItemIcon = iconMap[item.id] || DollarSign;
              const isCurrent = item.id === pageData.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigateFeature(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/20"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs mb-2 ${iconStyles[item.id]}`}>
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-slate-900 line-clamp-1">
                    #{item.challengeNumber}. {item.shortTitle}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Final CTA Banner (Start Free Trial) */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#0D243F] to-[#006A4E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>7-Day Full Access Free Trial</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif">
              Ready to solve your {pageData.shortTitle.toLowerCase()} challenges?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
              Join 1,200+ Kenyan enterprises running smarter with BizHubKE. No credit card required. Cancel anytime.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start Free Trial Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDashboard}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer flex items-center justify-center"
            >
              <span>Launch Demo</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
