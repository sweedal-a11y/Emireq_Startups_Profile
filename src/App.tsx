import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TabNavigation from './components/TabNavigation'
import AboutSection from './components/AboutSection'
import Sidebar from './components/Sidebar'
import StartupMetrics from './components/CompanyProfile'
import CapitalRaise from './components/TractionSnapshot'
import ProductSection from './components/ProductSection'
import FundingSection from './components/FundingSection'
import MarketSection from './components/WhatMakesUsDifferent'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Navbar />
      <HeroSection />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            {activeTab === 'Overview' && (
              <>
                <AboutSection />
                <StartupMetrics />
                <CapitalRaise />
              </>
            )}
            {activeTab === 'Product' && (
              <ProductSection />
            )}
            {activeTab === 'Funding' && (
              <FundingSection />
            )}
            {activeTab === 'Market' && (
              <MarketSection />
            )}
            {activeTab === 'Team' && (
              <TeamSection />
            )}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
