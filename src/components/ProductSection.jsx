import { FaPlay } from 'react-icons/fa';

const techStack = [
  { label: 'Python', filled: true },
  { label: 'TensorFlow', filled: true },
  { label: 'FastAPI', filled: true },
  { label: 'PostgreSQL', filled: true },
  { label: 'Kafka', filled: true },
  { label: 'AWS', filled: true },
  { label: 'React', filled: false },
  { label: 'Kubernetes', filled: false },
  { label: 'Redis', filled: false },
];

const aiTags = [
  { label: 'AI / Machine Learning', color: 'text-[#1a56db]', bg: 'bg-[#e3f2fd]', border: 'border-[#bdd3f7]' },
  { label: 'Alternative Data', color: 'text-[#0f9d58]', bg: 'bg-[#eefaf3]', border: 'border-[#b8e6cd]' },
  { label: 'Blockchain Audit Trail', color: 'text-[#e74c3c]', bg: 'bg-[#fef2f0]', border: 'border-[#f5c6be]' },
  { label: 'Real-time Decisioning', filled: false },
  { label: 'Open Banking API', filled: false },
];

const featureTags = [
  { label: 'Shariah-compliant', color: 'text-[#e5940b]', bg: 'bg-[#fef9ec]', border: 'border-[#f5dfa0]' },
  { label: 'API-first', color: 'text-white', bg: 'bg-[#1a56db]', border: 'border-[#1a56db]' },
  { label: 'No-collateral scoring', color: 'text-white', bg: 'bg-[#1a2332]', border: 'border-[#1a2332]' },
  { label: '48hr onboarding', color: 'text-[#0f9d58]', bg: 'bg-white', border: 'border-[#0f9d58]' },
];

const ProductSection = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Product Info */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-6">Product</h2>

        <div className="divide-y divide-[#e5e7eb]">
          <div className="flex items-center justify-between py-3">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold">Product Type</p>
            <p className="text-[16px] sm:text-[17px] font-medium text-text-dark">AI SaaS · API Platform</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold">Founded Year</p>
            <p className="text-[16px] sm:text-[17px] font-medium text-text-dark">2022</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold">Business Model</p>
            <p className="text-[16px] sm:text-[17px] font-medium text-text-dark">Per-score API fee + SaaS subscription</p>
          </div>
        </div>
      </div>

      {/* Problem Solved */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-4">Problem Solved</h2>
        <p className="text-[16px] sm:text-[17px] text-[#3a4a5c] leading-[1.8] mb-6">
          NexaScore is an AI-powered credit scoring platform for underbanked SMEs across MENA and South
          Asia. Using alternative data — telco patterns, cash flow analytics, and social signals — we unlock
          credit access for 8 million+ businesses excluded from traditional lending.
        </p>

        <div className="rounded-lg border border-[#e5e7eb] p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-1.5">Industry</p>
          <p className="text-[16px] sm:text-[17px] text-text-dark leading-[1.6]">
            Fintech · AI / ML · B2B SaaS · Credit Infrastructure
          </p>
        </div>
      </div>

      {/* Unique Value Proposition */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-4">Unique Value Proposition</h2>
        <p className="text-[16px] sm:text-[17px] text-[#3a4a5c] leading-[1.8] mb-5">
          95% credit decision accuracy using alternative data — 4× faster than traditional banks. No
          collateral required. Fully automated SME onboarding in 48 hours via a single REST API
          integration.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {featureTags.map((tag) => (
            <span
              key={tag.label}
              className={`px-4 py-1.5 text-[14px] sm:text-[15px] font-medium rounded-full border ${tag.color} ${tag.bg} ${tag.border} cursor-pointer hover:opacity-90 transition-opacity`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Demo / Product Video */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-4">Demo / Product Video</h2>
        <div className="relative bg-[#1a2332] rounded-2xl overflow-hidden flex flex-col items-center justify-center cursor-pointer group" style={{ height: '220px' }}>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/15">
            <FaPlay size={14} className="text-white/70 ml-0.5" />
          </div>
          <p className="text-white/50 text-[13px] mt-2.5">
            Watch Product Demo – 3min
          </p>
        </div>
      </div>

      {/* Technology */}
      <div className="bg-white rounded-xl border border-gray-border p-6 sm:p-8">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-text-dark mb-5">Technology</h2>

        <p className="text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((t) => (
            <span
              key={t.label}
              className={`px-3.5 py-1.5 text-[14px] sm:text-[15px] font-medium rounded-full cursor-pointer hover:opacity-90 transition-opacity ${
                t.filled
                  ? 'bg-[#1a2332] text-white'
                  : 'bg-white text-text-dark border border-[#e5e7eb]'
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>

        <p className="text-[15px] sm:text-[16px] text-[#6b7280] mb-3">AI / Blockchain / IoT Tags</p>
        <div className="flex flex-wrap gap-2">
          {aiTags.map((tag) => (
            <span
              key={tag.label}
              className={`px-3.5 py-1.5 text-[14px] sm:text-[15px] font-medium rounded-full cursor-pointer hover:opacity-90 transition-opacity ${
                tag.color
                  ? `${tag.color} ${tag.bg} border ${tag.border}`
                  : 'bg-white text-text-dark border border-[#e5e7eb]'
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
