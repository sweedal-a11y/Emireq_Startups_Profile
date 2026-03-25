import { HiArrowLeft } from 'react-icons/hi';
import heroBg from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Hero Background */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.50), rgba(15, 23, 42, 0.60)), url(${heroBg})`,
          minHeight: '280px',
        }}
      >
        {/* Back to Startups - top left */}
        <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-5">
          <a href="#" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-[14px] font-medium transition-colors cursor-pointer">
            <HiArrowLeft size={14} />
            Back to Startups
          </a>
        </div>

        {/* Spacer to push profile info to bottom */}
        <div className="h-[60px] sm:h-[80px]" />

        {/* Startup info - bottom left */}
        <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pb-7 sm:pb-9">
          <div className="flex items-end gap-5 sm:gap-6">
            {/* Initials Avatar */}
            <div className="w-[82px] h-[82px] sm:w-[100px] sm:h-[100px] rounded-2xl overflow-hidden shrink-0 bg-[#9ca3af]/50 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <span className="text-white text-[30px] sm:text-[38px] font-bold">LN</span>
            </div>
            <div className="pb-1">
              <h1 className="text-white text-[28px] sm:text-[36px] font-bold leading-tight mb-1 tracking-[-0.02em]">NexaScore</h1>
              <p className="text-white/75 text-[15px] sm:text-[17px] mb-3 max-w-[520px] leading-[1.5] whitespace-nowrap">
                Credit intelligence for the unbanked — decisions in 48 hours, not 48 days.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-[3px] text-[12px] font-bold bg-[#d4a017] text-white rounded cursor-default tracking-wider uppercase">SERIES A</span>
                <span className="px-3 py-[3px] text-[12px] font-bold bg-[#27ae60] text-white rounded cursor-default tracking-wider uppercase">VERIFIED</span>
                <span className="px-3 py-[3px] text-[12px] font-bold border border-white/30 text-white rounded cursor-default tracking-wider uppercase">FINTECH · SAAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
