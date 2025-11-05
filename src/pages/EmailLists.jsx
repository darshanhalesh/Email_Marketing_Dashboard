import { UsersIcon, PlusIcon } from '@heroicons/react/24/outline'

function EmailLists() {
  const lists = [
    { id: 1, name: 'Newsletter Subscribers', count: 15420, growth: '+12%', status: 'Active' },
    { id: 2, name: 'Premium Members', count: 3240, growth: '+8%', status: 'Active' },
    { id: 3, name: 'VIP Customers', count: 856, growth: '+15%', status: 'Active' },
    { id: 4, name: 'Trial Users', count: 5621, growth: '+5%', status: 'Active' },
    { id: 5, name: 'Inactive Users', count: 2145, growth: '-3%', status: 'Paused' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Lists</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your subscriber segments and lists</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-indigo-700 hover:to-purple-700">
          <PlusIcon className="h-5 w-5" />
          Create New List
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lists.map((list) => (
          <div key={list.id} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-50 p-3">
                  <UsersIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{list.name}</h3>
                  <p className="text-sm text-gray-500">{list.status}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900">{list.count.toLocaleString()}</div>
                <div className="mt-1 text-sm text-gray-500">Subscribers</div>
              </div>
              <div className={`text-sm font-semibold ${list.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {list.growth}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                View
              </button>
              <button className="flex-1 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmailLists
