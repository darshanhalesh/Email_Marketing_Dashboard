import { UsersIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function MasterList() {
  const [searchTerm, setSearchTerm] = useState('')

  const subscribers = [
    { id: 1, email: 'john.doe@example.com', name: 'John Doe', status: 'Active', joined: '2025-01-15', campaigns: 24 },
    { id: 2, email: 'jane.smith@example.com', name: 'Jane Smith', status: 'Active', joined: '2025-02-20', campaigns: 18 },
    { id: 3, email: 'bob.wilson@example.com', name: 'Bob Wilson', status: 'Active', joined: '2025-03-10', campaigns: 32 },
    { id: 4, email: 'alice.brown@example.com', name: 'Alice Brown', status: 'Unsubscribed', joined: '2024-12-05', campaigns: 12 },
    { id: 5, email: 'charlie.davis@example.com', name: 'Charlie Davis', status: 'Active', joined: '2025-01-28', campaigns: 21 },
    { id: 6, email: 'emma.johnson@example.com', name: 'Emma Johnson', status: 'Active', joined: '2025-03-15', campaigns: 15 },
    { id: 7, email: 'david.miller@example.com', name: 'David Miller', status: 'Bounced', joined: '2025-02-08', campaigns: 8 },
    { id: 8, email: 'sarah.anderson@example.com', name: 'Sarah Anderson', status: 'Active', joined: '2025-04-01', campaigns: 5 },
  ]

  const filteredSubscribers = subscribers.filter(sub =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = [
    { label: 'Total Subscribers', value: '42,815', color: 'text-blue-600' },
    { label: 'Active', value: '40,234', color: 'text-green-600' },
    { label: 'Unsubscribed', value: '2,145', color: 'text-red-600' },
    { label: 'Bounced', value: '436', color: 'text-yellow-600' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-3">
          <UsersIcon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Master List</h1>
          <p className="mt-1 text-sm text-gray-500">Manage all your subscribers in one place</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            <div className={`mt-2 text-3xl font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <FunnelIcon className="h-5 w-5" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Subscriber</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Email</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Joined Date</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Campaigns</th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredSubscribers.map((sub) => (
                <tr key={sub.id} className="transition-colors hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">{sub.name}</td>
                  <td className="px-4 py-4 text-gray-600">{sub.email}</td>
                  <td className="px-4 py-4">
                    <span className={[
                      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
                      sub.status === 'Active' && 'bg-green-100 text-green-700',
                      sub.status === 'Unsubscribed' && 'bg-red-100 text-red-700',
                      sub.status === 'Bounced' && 'bg-yellow-100 text-yellow-700',
                    ].filter(Boolean).join(' ')}>
                      <span className={[
                        'h-1.5 w-1.5 rounded-full',
                        sub.status === 'Active' && 'bg-green-500',
                        sub.status === 'Unsubscribed' && 'bg-red-500',
                        sub.status === 'Bounced' && 'bg-yellow-500',
                      ].filter(Boolean).join(' ')} />
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{sub.joined}</td>
                  <td className="px-4 py-4 text-gray-600">{sub.campaigns}</td>
                  <td className="px-4 py-4">
                    <button className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MasterList
