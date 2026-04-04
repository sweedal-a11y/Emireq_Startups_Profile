import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Stats Card */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="px-5 py-4 border-r border-b border-[#e5e7eb]">
            <p className="text-[24px] sm:text-[26px] font-bold text-[#e5940b]">$2.4M</p>
            <p className="text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold mt-1">Total Raised</p>
          </div>
          <div className="px-5 py-4 border-b border-[#e5e7eb]">
            <p className="text-[24px] sm:text-[26px] font-bold text-[#0f9d58]">18K+</p>
            <p className="text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold mt-1">Customers</p>
          </div>
          <div className="px-5 py-4 border-r border-[#e5e7eb]">
            <p className="text-[24px] sm:text-[26px] font-bold text-text-dark">38%</p>
            <p className="text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold mt-1">MoM Growth</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-[24px] sm:text-[26px] font-bold text-text-dark">14mo</p>
            <p className="text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold mt-1">Runway</p>
          </div>
        </div>
      </div>

      {/* Get in Touch Card */}
      <div className="bg-white rounded-2xl border border-gray-border p-6">
        <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark mb-4">Get in Touch</h3>
        <button className="w-full flex items-center justify-center gap-2.5 bg-[#f5a623] hover:bg-[#e69a1a] text-white font-semibold py-3.5 px-4 rounded-xl transition-colors cursor-pointer text-[17px] sm:text-[18px]">
          <HiOutlineChatAlt2 size={20} />
          Send Message
        </button>
        <p className="text-[15px] sm:text-[16px] text-[#9ca3af] mt-3 text-center">Connect directly with the founders</p>
      </div>

      {/* Get In Touch - Login Card */}
      <div className="bg-gradient-to-br from-[#1a3a8a] to-[#0f1f4e] rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute right-[-40px] bottom-[-40px] w-44 h-44 border-2 border-white/10 rounded-full"></div>
        <div className="absolute right-[-10px] bottom-[-10px] w-28 h-28 border-2 border-white/10 rounded-full"></div>
        <div className="absolute right-[60px] bottom-[30px] w-20 h-20 border border-white/8 rounded-full"></div>

        <h3 className="text-[20px] sm:text-[22px] font-bold mb-2.5 relative z-10">Get In Touch</h3>
        <p className="text-[16px] sm:text-[17px] text-white/75 mb-5 relative z-10 leading-[1.6]">
          login to access detailed diligence documents and request formal engagement.
        </p>
        <div className="flex gap-3 relative z-10">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-[#111] hover:bg-[#222] rounded-full text-[13px] font-medium transition-colors cursor-pointer whitespace-nowrap">
            Investor Login
            <HiArrowRight size={14} />
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border border-white/30 hover:bg-white/10 rounded-full text-[13px] font-medium transition-colors cursor-pointer whitespace-nowrap">
            Startup Login
            <HiArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
