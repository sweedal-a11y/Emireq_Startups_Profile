const fundingOverview = [
  { label: 'Total Funding Raised', value: '$2.4M', sub: 'SEED STAGE', valueColor: 'text-[#e5940b]' },
  { label: 'Valuation', value: '$14M', sub: 'PRE-MONEY, SEED', valueColor: 'text-text-dark' },
  { label: 'Currently Raising', value: '$5M', sub: 'SERIES A ROUND', valueColor: 'text-[#0f9d58]' },
];

const fundingTable = [
  {
    round: 'Seed',
    roundColor: 'bg-[#eef2ff] text-[#4f6ef7] border border-[#c7d2fe]',
    amount: '$2.0M',
    date: 'Mar 2023',
    leadInvestor: 'Meridian Ventures',
    coInvestor: 'Beenext, 2 angels',
    valuation: '$10M',
  },
  {
    round: 'Pre-Seed',
    roundColor: 'bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]',
    amount: '$400K',
    date: 'Aug 2022',
    leadInvestor: 'Founders (self)',
    coInvestor: 'Angel syndicate',
    valuation: '$2.5M',
  },
];

const investors = [
  {
    initials: 'AR',
    bg: 'bg-[#1a2332]',
    textColor: 'text-white',
    name: 'Meridian Ventures',
    description: 'Lead investor · Seed round · MENA-focused VC',
    tag: 'LEAD',
    tagColor: 'text-[#4f6ef7] border-[#c7d2fe] bg-[#eef2ff]',
  },
  {
    initials: 'CL',
    bg: 'bg-[#1a2332]',
    textColor: 'text-white',
    name: 'Beenext',
    description: 'Co-investor · Seed round · Asia-Pacific VC',
    tag: 'CO-INVESTOR',
    tagColor: 'text-[#6b7280] border-[#e5e7eb] bg-white',
  },
  {
    initials: 'LF',
    bg: 'bg-[#1a2332]',
    textColor: 'text-white',
    name: 'Angel Syndicate',
    description: '2 angels · Pre-seed round',
    tag: 'ANGEL',
    tagColor: 'text-[#6b7280] border-[#e5e7eb] bg-white',
  },
];

const FundingSection = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Funding Overview */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Funding Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fundingOverview.map((item) => (
            <div key={item.label} className="rounded-xl border border-[#e5e7eb] p-5 sm:p-6 hover:shadow-sm transition-shadow cursor-pointer">
              <p className="text-[14px] sm:text-[15px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold mb-3">{item.label}</p>
              <p className={`text-[34px] sm:text-[40px] font-bold leading-tight ${item.valueColor}`}>{item.value}</p>
              <p className="text-[14px] sm:text-[15px] uppercase tracking-[0.1em] text-[#9ca3af] font-medium mt-1.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Funding Rounds */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[24px] sm:text-[28px] font-bold text-text-dark mb-6">Funding Rounds</h2>

        {/* Desktop Table */}
        <div className="hidden sm:block rounded-xl border border-[#e5e7eb] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f9fafb]">
                <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold">Round</th>
                <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold">Amount</th>
                <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold">Date</th>
                <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold">Lead Investor</th>
                <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold">Co-Investor</th>
                <th className="text-left px-6 py-4 text-[13px] uppercase tracking-[0.1em] text-[#9ca3af] font-semibold">Valuation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eef0f3]">
              {fundingTable.map((row, i) => (
                <tr key={i} className="hover:bg-[#f9fafb] transition-colors cursor-pointer">
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[13px] font-semibold rounded-md ${row.roundColor}`}>{row.round}</span>
                  </td>
                  <td className="px-6 py-5 text-[16px] text-text-dark font-medium">{row.amount}</td>
                  <td className="px-6 py-5 text-[16px] text-[#6b7280]">{row.date}</td>
                  <td className="px-6 py-5 text-[16px] text-text-dark">{row.leadInvestor}</td>
                  <td className="px-6 py-5 text-[16px] text-text-dark">{row.coInvestor}</td>
                  <td className="px-6 py-5 text-[16px] text-text-dark font-bold">{row.valuation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden flex flex-col gap-4">
          {fundingTable.map((row, i) => (
            <div key={i} className="rounded-xl border border-[#e5e7eb] p-4 bg-[#f9fafb] cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-0.5 text-[12px] font-semibold rounded ${row.roundColor}`}>{row.round}</span>
                <span className="text-[14px] font-bold text-text-dark">{row.valuation}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 text-[13px]">
                <div>
                  <p className="text-[#9ca3af] text-[11px] uppercase tracking-[0.08em] font-semibold">Amount</p>
                  <p className="text-text-dark font-medium">{row.amount}</p>
                </div>
                <div>
                  <p className="text-[#9ca3af] text-[11px] uppercase tracking-[0.08em] font-semibold">Date</p>
                  <p className="text-[#6b7280]">{row.date}</p>
                </div>
                <div>
                  <p className="text-[#9ca3af] text-[11px] uppercase tracking-[0.08em] font-semibold">Lead</p>
                  <p className="text-text-dark">{row.leadInvestor}</p>
                </div>
                <div>
                  <p className="text-[#9ca3af] text-[11px] uppercase tracking-[0.08em] font-semibold">Co-Investor</p>
                  <p className="text-text-dark">{row.coInvestor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investors */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Investors</h2>
        <div className="flex flex-col gap-4">
          {investors.map((inv) => (
            <div key={inv.name} className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl border border-[#e5e7eb] hover:bg-[#f9fafb] transition-colors cursor-pointer">
              <div className={`w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-xl ${inv.bg} flex items-center justify-center shrink-0`}>
                <span className={`text-[16px] sm:text-[17px] font-bold ${inv.textColor || 'text-text-dark'}`}>{inv.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[18px] sm:text-[20px] font-semibold text-text-dark">{inv.name}</p>
                <p className="text-[15px] sm:text-[16px] text-[#6b7280] mt-0.5">{inv.description}</p>
              </div>
              <span className={`px-3.5 py-1 text-[14px] sm:text-[15px] font-semibold border rounded-md whitespace-nowrap ${inv.tagColor}`}>
                {inv.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingSection;
