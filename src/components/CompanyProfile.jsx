const metrics = [
  {
    label: 'Monthly Revenue',
    value: '$82K',
    sub: '↑ 38% month-on-month',
    subColor: 'text-[#0f9d58]',
  },
  {
    label: 'Users / Customers',
    value: '18,400+',
    sub: '+3,200 last 30 day',
    subColor: 'text-[#1a56db]',
  },
  {
    label: 'Growth Rate',
    value: '38%',
    valueColor: 'text-[#e5940b]',
    sub: 'Month-on-month',
    subColor: 'text-[#6b7280]',
  },
  {
    label: 'Burn Rate',
    value: '$52K',
    sub: 'Per month',
    subColor: 'text-[#6b7280]',
  },
  {
    label: 'Runway',
    value: '14 mo',
    sub: 'At current burn rate',
    subColor: 'text-[#6b7280]',
  },
  {
    label: 'Default Rate',
    value: '1.8%',
    sub: 'Industry avg: ',
    subColor: 'text-[#6b7280]',
    subHighlight: '5.4%',
    subHighlightColor: 'text-[#e5940b]',
  },
];

const StartupMetrics = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
      <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Startup Metrics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-[#e5e7eb] p-4 sm:p-5 hover:shadow-sm transition-shadow cursor-pointer">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#e5940b] font-semibold mb-2">{m.label}</p>
            <p className={`text-[26px] sm:text-[30px] font-bold leading-tight ${m.valueColor || 'text-text-dark'}`}>
              {m.value}
            </p>
            <p className={`text-[14px] sm:text-[15px] mt-1 ${m.subColor}`}>
              {m.sub}
              {m.subHighlight && <span className={m.subHighlightColor}>{m.subHighlight}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupMetrics;
