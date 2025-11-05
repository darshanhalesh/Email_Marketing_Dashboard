import { useState, useEffect, useMemo } from 'react'

function CampaignTable() {
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 800))
      
      try {
        const response = await fetch('/src/data/campaigns.json')
        const data = await response.json()
        setCampaigns(data)
      } catch (error) {
        console.error('Error loading campaigns:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaigns()
  }, [])

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter(campaign =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [campaigns, searchTerm])

  const totalPages = Math.ceil(filteredCampaigns.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentCampaigns = filteredCampaigns.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  if (loading) {
    return (
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Campaign Management</h2>
          <p className="mt-1 text-sm text-gray-500">Track and manage all your campaigns</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by campaign name or status..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Campaign Name</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Recipients</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Performance</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Revenue</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Date</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentCampaigns.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-3 py-8 text-center text-gray-500">
                  No campaigns found
                </td>
              </tr>
            ) : (
              currentCampaigns.map((campaign) => (
                <tr key={campaign.id} className="transition-colors hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <span className={[
                      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
                      campaign.status === 'Sent' && 'bg-gray-100 text-gray-700',
                      campaign.status === 'Scheduled' && 'bg-blue-100 text-blue-700',
                      campaign.status === 'Draft' && 'bg-yellow-100 text-yellow-700',
                      campaign.status === 'Active' && 'bg-green-100 text-green-700',
                    ].filter(Boolean).join(' ')}>
                      <span className={[
                        'h-1.5 w-1.5 rounded-full',
                        campaign.status === 'Sent' && 'bg-gray-500',
                        campaign.status === 'Scheduled' && 'bg-blue-500',
                        campaign.status === 'Draft' && 'bg-yellow-500',
                        campaign.status === 'Active' && 'bg-green-500 animate-pulse',
                      ].filter(Boolean).join(' ')} />
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900">{campaign.name}</td>
                  <td className="px-4 py-4 text-gray-600">
                    {campaign.recipients > 0 ? campaign.recipients.toLocaleString() : '—'}
                  </td>
                  <td className="px-4 py-4 text-gray-600">
                    {campaign.openRate > 0 
                      ? <><span className="font-medium text-indigo-600">{campaign.openRate}%</span> Open · <span className="font-medium text-purple-600">{campaign.clickRate}%</span> CTR</>
                      : '—'
                    }
                  </td>
                  <td className="px-4 py-4 font-semibold text-green-600">
                    {campaign.revenue > 0 ? `$${campaign.revenue.toLocaleString()}` : '—'}
                  </td>
                  <td className="px-4 py-4 text-gray-600">{campaign.date}</td>
                  <td className="px-4 py-4">
                    <button className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100">
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{startIndex + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(endIndex, filteredCampaigns.length)}</span> of <span className="font-semibold text-gray-900">{filteredCampaigns.length}</span> campaigns
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={[
                'rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                currentPage === index + 1 
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm' 
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              ].join(' ')}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default CampaignTable
