import { EnvelopeIcon, PlusIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function EmailAccounts() {
  const accounts = [
    { id: 1, email: 'marketing@company.com', provider: 'Gmail', status: 'Connected', sent: 12450, limit: 15000 },
    { id: 2, email: 'support@company.com', provider: 'Outlook', status: 'Connected', sent: 8920, limit: 10000 },
    { id: 3, email: 'sales@company.com', provider: 'Gmail', status: 'Connected', sent: 5621, limit: 15000 },
    { id: 4, email: 'info@company.com', provider: 'SendGrid', status: 'Warning', sent: 14850, limit: 15000 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Accounts</h1>
          <p className="mt-1 text-sm text-gray-500">Connect and manage your sending accounts</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-indigo-700 hover:to-purple-700">
          <PlusIcon className="h-5 w-5" />
          Add Account
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-3 ${account.status === 'Connected' ? 'bg-green-50' : 'bg-yellow-50'}`}>
                  <EnvelopeIcon className={`h-6 w-6 ${account.status === 'Connected' ? 'text-green-600' : 'text-yellow-600'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{account.email}</h3>
                  <p className="text-sm text-gray-500">{account.provider}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {account.status === 'Connected' ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    <CheckCircleIcon className="h-4 w-4" />
                    {account.status}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    {account.status}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">Emails Sent</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{account.sent.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Daily Limit</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{account.limit.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Usage</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{Math.round((account.sent / account.limit) * 100)}%</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div 
                  className={`h-full rounded-full transition-all ${account.sent / account.limit > 0.9 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${(account.sent / account.limit) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                Settings
              </button>
              <button className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmailAccounts
