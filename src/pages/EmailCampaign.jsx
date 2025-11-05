import { MegaphoneIcon, PlusIcon } from '@heroicons/react/24/outline'
import CampaignTable from '../components/CampaignTable'

function EmailCampaign() {
  const stats = [
    { label: 'Total Campaigns', value: '86', color: 'from-blue-500 to-indigo-600' },
    { label: 'Active', value: '12', color: 'from-green-500 to-emerald-600' },
    { label: 'Scheduled', value: '5', color: 'from-purple-500 to-pink-600' },
    { label: 'Drafts', value: '18', color: 'from-orange-500 to-amber-600' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Campaigns</h1>
          <p className="mt-1 text-sm text-gray-500">Create and manage your email marketing campaigns</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-indigo-700 hover:to-purple-700">
          <PlusIcon className="h-5 w-5" />
          Create Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
            <div className="relative z-10">
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</div>
            </div>
            <div className={`absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-2xl transition-all duration-300 group-hover:scale-150`}></div>
          </div>
        ))}
      </div>

      <CampaignTable />
    </div>
  )
}

export default EmailCampaign
