import { useState } from 'react';

const stages = ['IDEA', 'MVP', 'SEED', 'SERIES A', 'SERIES B/C'];

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState('SERIES A');
  return (
    <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
      <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-4">About NexaScore</h2>
      <p className="text-[16px] sm:text-[17px] text-[#3a4a5c] leading-[1.8] mb-6">
        NexaScore is an AI-powered credit scoring platform for underbanked SMEs across MENA and South
        Asia. Using alternative data — telco patterns, cash flow analytics, and social signals — we unlock
        credit access for 8 million+ businesses excluded from traditional lending.
      </p>

      {/* Industry */}
      <div className="rounded-lg border border-[#e5e7eb] p-4 sm:p-5 mb-6">
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-1.5">Industry</p>
        <p className="text-[16px] sm:text-[17px] text-text-dark leading-[1.6]">
          Fintech · AI / ML · B2B SaaS · Credit Infrastructure
        </p>
      </div>

      {/* Startup Stage */}
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-3">Startup Stage</p>
        <div className="flex">
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`flex-1 py-2.5 text-[14px] sm:text-[15px] font-medium border cursor-pointer transition-colors text-center ${
                stage === activeStage
                  ? 'bg-[#1a2332] text-white border-[#1a2332]'
                  : 'bg-white text-text-dark border-[#e5e7eb] hover:bg-gray-50'
              } ${stage === stages[0] ? 'rounded-l-lg' : ''} ${stage === stages[stages.length - 1] ? 'rounded-r-lg' : ''} -ml-[1px] first:ml-0`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-border mb-5"></div>

      {/* Highlights */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[15px] sm:text-[16px] text-[#4a5568]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0f9d58] shrink-0"></span>
          <span>Actively raising Series A — $5M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1a56db] shrink-0"></span>
          <span>18,400+ active customers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e5940b] shrink-0"></span>
          <span>Operating in 4 markets</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
