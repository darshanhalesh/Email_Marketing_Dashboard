import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()
  
  const items = [
    { label: 'Dashboard', path: '/' },
    { label: 'Email Lists', path: '/email-lists' },
    { label: 'Email Accounts', path: '/email-accounts' },
    { label: 'Email Campaign', path: '/email-campaign' },
    { label: 'Analytics', path: '/analytics' },
    { label: 'Master List', path: '/master-list' },
  ]

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-gradient-to-b from-gray-50 to-white shadow-sm">
      <div className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="text-xl font-bold tracking-tight text-indigo-600">MailMetrics</div>
        <div className="mt-1 text-xs text-gray-500">Marketing Dashboard</div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map((it) => (
          <Link
            key={it.label}
            to={it.path}
            className={[
              'block rounded-lg px-4 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200',
              location.pathname === it.path
                ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
            ].join(' ')}
          >
            {it.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
