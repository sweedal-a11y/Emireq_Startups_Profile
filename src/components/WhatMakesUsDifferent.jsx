import { HiGlobeAlt } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

const partnerships = [
  {
    initials: 'SB',
    bg: 'bg-[#1a2332]',
    name: 'Summit Bank MENA',
    description: 'API integration — Credit bureau data partner',
    tag: 'BANKING',
    tagStyle: 'text-[#4f6ef7] border-[#c5d0f7] bg-white',
  },
  {
    initials: 'GS',
    bg: 'bg-[#1a2332]',
    name: 'Google for Startups',
    description: 'Cloud credits & accelerator program',
    tag: 'ACCELERATOR',
    tagStyle: 'text-[#0f9d58] border-[#b8e6cd] bg-white',
  },
  {
    initials: 'NF',
    bg: 'bg-[#1a2332]',
    name: 'NoviFin NBFC',
    description: 'Embedded lending API — live in production',
    tag: 'NBFC',
    tagStyle: 'text-[#e74c3c] border-transparent bg-[#fde8e4]',
  },
];

const caseStudies = [
  {
    tag: 'BANKING',
    title: 'Summit Bank — SME Loan Decisioning',
    description: 'Deployed NexaScore API to evaluate 12,000 SME loan applications. Replaced manual review with automated scoring, reducing TAT from 14 days to under 48 hours.',
    result: '✓ 68% reduction in decision time · Default rate maintained at 1.9%',
  },
  {
    tag: 'BANKING',
    title: 'NoviFin — Embedded Credit for E-commerce Sellers',
    description: "Integrated NexaScore into NoviFin's onboarding flow to offer instant working capital to marketplace sellers without collateral requirements.",
    result: '✓ 3,200 sellers approved in 90 days · $4.1M disbursed',
  },
];

const MarketSection = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Market Overview */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Market</h2>

        <div className="divide-y divide-[#eef0f3]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-4">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#8b9db5] font-semibold">Target Market</p>
            <p className="text-[16px] sm:text-[17px] font-medium text-text-dark">Underbanked SMEs · MENA & South Asia</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-4">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#8b9db5] font-semibold">Competitors</p>
            <p className="text-[16px] sm:text-[17px] font-medium text-text-dark">Perfios · CreditVidya · Bureau · Finbox</p>
          </div>
        </div>
      </div>

      {/* TAM/SAM/SOM */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-8">TAM/SAM/SOM</h2>
        <div className="space-y-6">
          {/* TAM */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[15px] sm:text-[16px] text-[#6b7280]">TAM — Total Addressable Market</p>
              <p className="text-[16px] sm:text-[17px] font-bold text-text-dark">$180B</p>
            </div>
            <div className="w-full h-[6px] bg-[#eef0f3] rounded-sm overflow-hidden" />
          </div>
          {/* SAM */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[15px] sm:text-[16px] text-[#6b7280]">SAM — Serviceable Addressable Market</p>
              <p className="text-[16px] sm:text-[17px] font-bold text-text-dark">$32B</p>
            </div>
            <div className="w-full h-[6px] bg-[#eef0f3] rounded-sm overflow-hidden">
              <div className="h-full bg-[#1a2332] rounded-sm" style={{ width: '65%' }} />
            </div>
          </div>
          {/* SOM */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[15px] sm:text-[16px] text-[#6b7280]">SOM — Serviceable Obtainable Market</p>
              <p className="text-[16px] sm:text-[17px] font-bold text-text-dark">$1.2B</p>
            </div>
            <div className="w-full h-[6px] bg-[#eef0f3] rounded-sm overflow-hidden">
              <div className="h-full bg-[#0f9d58] rounded-sm" style={{ width: '20%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Traction */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Traction</h2>

        {/* Previous Exits */}
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-3">Previous Exits</p>
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-6 border-b border-[#eef0f3]">
          <span className="text-[16px] sm:text-[17px] font-semibold text-text-dark">18,400+ active SME customers</span>
          <span className="text-[16px] text-[#6b7280]">·</span>
          <span className="text-[16px] sm:text-[17px] text-[#0f9d58] font-medium">+3,200 added last 30 days</span>
        </div>

        {/* Partnerships */}
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-4">Partnerships</p>
        <div className="divide-y divide-[#eef0f3] mb-8">
          {partnerships.map((p) => (
            <div key={p.name} className="flex items-center gap-4 py-4 sm:py-5 cursor-pointer hover:bg-[#f9fafb] -mx-2 px-2 rounded-lg transition-colors">
              <div className={`w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-xl ${p.bg} flex items-center justify-center shrink-0`}>
                <span className="text-[13px] sm:text-[14px] font-semibold text-white">{p.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[16px] sm:text-[17px] font-semibold text-text-dark">{p.name}</p>
                <p className="text-[14px] sm:text-[15px] text-[#6b7280] mt-0.5">{p.description}</p>
              </div>
              <span className={`px-3 py-1 text-[12px] sm:text-[13px] font-semibold border rounded-md whitespace-nowrap ${p.tagStyle}`}>
                {p.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-4">Case Studies</p>
        <div className="flex flex-col gap-4 mb-8">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="rounded-xl bg-[#f8f9fb] p-5 sm:p-6 cursor-pointer hover:bg-[#f1f3f5] transition-colors">
              <span className="inline-block px-3 py-1 text-[13px] sm:text-[14px] font-semibold border border-[#c5d0f7] text-[#4f6ef7] bg-[#eef2ff] rounded-md mb-3">{cs.tag}</span>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-text-dark mb-2">{cs.title}</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6b7280] leading-[1.7] mb-3">{cs.description}</p>
              <p className="text-[15px] sm:text-[16px] font-semibold text-[#0f9d58]">
                {cs.result}
              </p>
            </div>
          ))}
        </div>

        {/* Digital Presence */}
        <div className="pt-6 border-t border-[#eef0f3]">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-3">Digital Presence</p>
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-border rounded-full text-[15px] sm:text-[16px] font-medium text-text-dark hover:bg-gray-50 transition-colors cursor-pointer">
              <HiGlobeAlt size={15} />
              Website
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#006097] text-white rounded-full text-[15px] sm:text-[16px] font-medium transition-colors cursor-pointer">
              <FaLinkedinIn size={13} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
