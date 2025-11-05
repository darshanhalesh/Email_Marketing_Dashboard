import { ChartBarIcon } from '@heroicons/react/24/outline'
import AnalyticsSection from '../components/AnalyticsSection'
import KPISection from '../components/KPISection'

function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-3">
          <ChartBarIcon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Deep dive into your campaign performance metrics</p>
        </div>
      </div>

      <KPISection />
      <AnalyticsSection />
    </div>
  )
}

export default Analytics
