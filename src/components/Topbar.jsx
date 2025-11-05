function Topbar() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4 shadow-sm">
      <div>
        <div className="text-lg font-bold text-gray-900">Dashboard Overview</div>
        <div className="text-xs text-gray-500">Real-time analytics and insights</div>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2">
        <div className="text-sm text-gray-700">
          Welcome back, <span className="font-semibold text-indigo-700">Darshan K H</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          All systems operational
        </span>
      </div>
    </div>
  )
}

export default Topbar
