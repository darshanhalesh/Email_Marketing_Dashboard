import KPISection from '../components/KPISection'
import AnalyticsSection from '../components/AnalyticsSection'
import CampaignTable from '../components/CampaignTable'

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Your email marketing performance at a glance</p>
      </div>
      <KPISection />
      <AnalyticsSection />
      <CampaignTable />
    </div>
  )
}

export default Dashboard
