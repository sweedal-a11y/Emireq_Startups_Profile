const CapitalRaise = () => {
  const raised = 2.4;
  const target = 5.0;
  const progress = Math.round((raised / target) * 100);

  return (
    <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-2">Capital Raise</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
        <div>
          <p className="text-[36px] sm:text-[44px] font-bold text-text-dark leading-tight">$5,000,000</p>
          <p className="text-[15px] sm:text-[16px] text-[#6b7280] mt-1">
            Target: Series A Round · $2.4M raised to date
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold">Progress</p>
          <p className="text-[32px] sm:text-[40px] font-bold text-text-dark">{progress}<span className="text-[24px] sm:text-[30px]">%</span></p>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-[8px] bg-[#e5e7eb] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#1a2332] rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CapitalRaise;
