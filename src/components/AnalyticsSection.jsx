import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CheckCircleIcon, ChartBarIcon, Squares2X2Icon, UsersIcon, MegaphoneIcon } from '@heroicons/react/24/outline'
import ActionModal from './ActionModal'
import { campaignsData, activitiesData, engagementData } from '../data/mockData'

function Section({ title, subtitle, children }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div>
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function QuickActionCard({ icon: Icon, title, onClick }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-gray-100 p-2">
          <Icon className="h-5 w-5 text-gray-600" />
        </span>
        <div>
          <div className="text-sm font-medium text-gray-900">{title}</div>
          <div className="text-xs text-gray-500">Get started</div>
        </div>
      </div>
      <button 
        onClick={onClick}
        className="rounded-md border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
      >
        Get started
      </button>
    </div>
  )
}

function AnalyticsSection() {
  const [campaigns, setCampaigns] = useState([])
  const [activities, setActivities] = useState([])
  const [engagement, setEngagement] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  useEffect(() => {
    setLoading(true);
    try {
      // Using imported mock data directly
      setCampaigns(campaignsData);
      setActivities(activitiesData);
      setEngagement(engagementData);
      setError(null);
    } catch (error) {
      console.error('Error loading data:', error);
      setError('Failed to load dashboard data');
    }
    setLoading(false);

        setCampaigns(campaignsData)
        setActivities(activitiesData)
        setEngagement(engagementData)
      } catch (error) {
        console.error('Error loading analytics data:', error)
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        })
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const openModal = (title) => {
    setModalTitle(title)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalTitle('')
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
        <h3 className="text-lg font-semibold">Error Loading Data</h3>
        <p className="mt-1">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-3 rounded bg-red-100 px-4 py-2 hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
        <div className="space-y-4">
          <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    )
  }

  const sentCampaigns = campaigns.filter(c => c.status === 'Sent').length
  const activeCampaigns = campaigns.filter(c => c.status === 'Active').length
  const scheduledCampaigns = campaigns.filter(c => c.status === 'Scheduled').length
  const draftCampaigns = campaigns.filter(c => c.status === 'Draft').length

  const pieData = [
    { name: 'Sent', value: sentCampaigns, color: '#9ca3af' },
    { name: 'Active', value: activeCampaigns, color: '#22c55e' },
    { name: 'Scheduled', value: scheduledCampaigns, color: '#d1d5db' },
    { name: 'Draft', value: draftCampaigns, color: '#e5e7eb' }
  ]

  const totalCampaigns = sentCampaigns + activeCampaigns + scheduledCampaigns + draftCampaigns
  const successRate = totalCampaigns > 0 ? Math.round((sentCampaigns / totalCampaigns) * 100) : 0

  const recentCampaigns = campaigns.slice(0, 5)

  const overallRating = 72

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <Section title="Campaign Performance" subtitle="Success metrics breakdown">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      isAnimationActive={true}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center text-sm text-gray-600">
                Success Rate: {successRate}%
              </div>
              <div className="border-t pt-3">
                <div className="text-xs font-medium text-gray-700 mb-2">Recent Activity</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {activities.slice(0, 3).map((activity) => (
                    <li key={activity.id} className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 text-gray-400" />
                      <span>{activity.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Engagement Trends" subtitle="User interaction metrics">
            <div className="space-y-3">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={engagement}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#9ca3af" isAnimationActive={true} />
                </BarChart>
              </ResponsiveContainer>
              <div className="rounded-md bg-gray-50 p-3 text-sm">
                <div className="text-gray-500">Overall performance rating</div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div 
                    className="h-full rounded-full bg-gray-400 transition-all duration-1000" 
                    style={{ width: `${overallRating}%` }} 
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        <div className="space-y-4">
          <Section title="Quick Actions" subtitle="Jump into your most common tasks">
            <div className="space-y-3">
              <QuickActionCard icon={MegaphoneIcon} title="Create Campaign" onClick={() => openModal('Create Campaign')} />
              <QuickActionCard icon={Squares2X2Icon} title="Browse Templates" onClick={() => openModal('Browse Templates')} />
              <QuickActionCard icon={ChartBarIcon} title="View Analytics" onClick={() => openModal('View Analytics')} />
              <QuickActionCard icon={UsersIcon} title="Segment Lists" onClick={() => openModal('Segment Lists')} />
            </div>
          </Section>

          <Section title="Recent Campaigns" subtitle="Monitor your campaign performance">
            <ul className="space-y-2 text-sm text-gray-700">
              {recentCampaigns.map((campaign) => (
                <li key={campaign.id} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                  <div className="flex-1">
                    <div className="font-medium">{campaign.name}</div>
                    <div className="text-xs text-gray-500">
                      {campaign.status === 'Sent' || campaign.status === 'Active' 
                        ? `Opens: ${campaign.openRate}% • Revenue: $${campaign.revenue.toLocaleString()}`
                        : campaign.status
                      }
                    </div>
                  </div>
                  <span className={[
                    'h-2 w-2 rounded-full',
                    campaign.status === 'Sent' && 'bg-gray-400',
                    campaign.status === 'Scheduled' && 'bg-gray-300',
                    campaign.status === 'Draft' && 'bg-gray-200',
                    campaign.status === 'Active' && 'bg-green-500',
                  ].filter(Boolean).join(' ')} />
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      <ActionModal isOpen={modalOpen} onClose={closeModal} title={modalTitle} />
    </>
  )
}

export default AnalyticsSection
