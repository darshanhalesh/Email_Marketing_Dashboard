import { useState, useEffect } from 'react'

function KPICard({ title, value, progress }) {
  const getColor = () => {
    if (title.includes('Revenue')) return 'from-green-500 to-emerald-600'
    if (title.includes('Subscribers')) return 'from-blue-500 to-indigo-600'
    if (title.includes('Campaigns')) return 'from-purple-500 to-pink-600'
    if (title.includes('Open Rate')) return 'from-orange-500 to-amber-600'
    if (title.includes('Bounce')) return 'from-red-500 to-rose-600'
    return 'from-gray-500 to-gray-600'
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative z-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{title}</div>
        <div className="mt-3 text-3xl font-bold text-gray-900">
          {typeof value === 'number' && value > 1000 ? value.toLocaleString() : value}
        </div>
        {typeof progress === 'number' && (
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${getColor()} transition-all duration-1000 ease-out`}
              style={{ width: `${progress}%` }} 
            />
          </div>
        )}
        <div className="mt-2 text-xs font-medium text-gray-500">{progress}% Complete</div>
      </div>
      <div className={`absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${getColor()} opacity-10 blur-2xl transition-all duration-300 group-hover:scale-150`}></div>
    </div>
  )
}

function KPISection() {
  const [kpis, setKpis] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchKpis = async () => {
      setLoading(true)
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      try {
        const response = await fetch('/src/data/kpis.json')
        const data = await response.json()
        setKpis(data)
      } catch (error) {
        console.error('Error loading KPIs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchKpis()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-28 animate-pulse rounded-lg bg-gray-200"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {kpis.map((kpi) => (
        <KPICard 
          key={kpi.label} 
          title={kpi.label} 
          value={kpi.value} 
          progress={kpi.progress} 
        />
      ))}
    </div>
  )
}

export default KPISection
