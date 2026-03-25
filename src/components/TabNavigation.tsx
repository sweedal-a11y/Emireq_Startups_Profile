const tabs = ['Overview', 'Product', 'Funding', 'Market', 'Team'];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="bg-white border-b border-[#e5e7eb]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex gap-8 sm:gap-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`py-4 text-[18px] sm:text-[19px] font-medium whitespace-nowrap cursor-pointer transition-colors relative ${
                activeTab === tab
                  ? 'text-[#1a1a1a]'
                  : 'text-[#9ca3af] hover:text-[#4b5563]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f5a623] rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
