import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import KPISection from './components/KPISection'
import AnalyticsSection from './components/AnalyticsSection'
import CampaignTable from './components/CampaignTable'

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="mx-auto w-full max-w-[1400px] flex-1 space-y-6 px-6 py-6">
          {/* Section A: KPIs */}
          <KPISection />

          {/* Section B: Analytics and Quick Actions */}
          <AnalyticsSection />

          {/* Section C: Campaign Table */}
          <CampaignTable />
        </main>
      </div>
    </div>
  )
}
