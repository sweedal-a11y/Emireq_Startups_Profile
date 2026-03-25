const founders = [
  {
    initials: 'LN',
    name: 'Leila Nasser',
    role: 'Co-Founder & CEO · ex-Careem Product Lead · NUS Singapore · INSEAD Abu Dhabi',
    status: 'Active',
  },
  {
    initials: 'ZL',
    name: 'Zoe Lin',
    role: 'Co-Founder & CTO · ex-Vaultara Engineer · BITS Pilani',
    status: 'Active',
  },
];

const coreTeam = [
  {
    initials: 'RK',
    name: 'Rami Khoury',
    role: 'VP Engineering · 8 years in fintech infrastructure',
  },
  {
    initials: 'AD',
    name: 'Amara Diallo',
    role: 'Head of Product · ex-Stripe PM',
  },
  {
    initials: 'LF',
    name: 'Lucas Ferreira',
    role: 'CFO · ex-KPMG, Dubai · CPA',
  },
];

const advisors = [
  {
    initials: 'TA',
    name: 'Tariq Al-Amin',
    role: 'ex-Vaultara CPO · Advisor on product & growth strategy',
  },
  {
    initials: 'SR',
    name: 'Sofia Reyes',
    role: 'Partner, Meridian Ventures · Board observer',
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
      <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Investors</h2>

      {/* Founders */}
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#e5940b] font-semibold mb-4">Founders</p>
      <div className="divide-y divide-[#eef0f3] mb-8">
        {founders.map((f) => (
          <div key={f.name} className="flex items-center gap-4 py-4 sm:py-5 cursor-pointer hover:bg-[#f9fafb] -mx-2 px-2 rounded-lg transition-colors">
            <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#f0f1f3] flex items-center justify-center shrink-0">
              <span className="text-[14px] sm:text-[15px] font-semibold text-[#6b7280]">{f.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[16px] sm:text-[17px] font-semibold text-text-dark">{f.name}</p>
              <p className="text-[14px] sm:text-[15px] text-[#6b7280] mt-0.5">{f.role}</p>
            </div>
            <span className="text-[14px] sm:text-[15px] font-semibold text-[#0f9d58] bg-[#eefaf3] px-3 py-1 rounded-md whitespace-nowrap">
              {f.status}
            </span>
          </div>
        ))}
      </div>

      {/* Core Team Members */}
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-4">Core Team Members</p>
      <div className="divide-y divide-[#eef0f3] mb-8">
        {coreTeam.map((m) => (
          <div key={m.name} className="flex items-center gap-4 py-4 sm:py-5 cursor-pointer hover:bg-[#f9fafb] -mx-2 px-2 rounded-lg transition-colors">
            <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#f0f1f3] flex items-center justify-center shrink-0">
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#6b7280]">{m.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[16px] sm:text-[17px] font-semibold text-text-dark">{m.name}</p>
              <p className="text-[14px] sm:text-[15px] text-[#6b7280] mt-0.5">{m.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Advisors */}
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-4">Advisors</p>
      <div className="divide-y divide-[#eef0f3]">
        {advisors.map((a) => (
          <div key={a.name} className="flex items-center gap-4 py-4 sm:py-5 cursor-pointer hover:bg-[#f9fafb] -mx-2 px-2 rounded-lg transition-colors">
            <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#f0f1f3] flex items-center justify-center shrink-0">
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#6b7280]">{a.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[16px] sm:text-[17px] font-semibold text-text-dark">{a.name}</p>
              <p className="text-[14px] sm:text-[15px] text-[#6b7280] mt-0.5">{a.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
