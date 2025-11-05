function ActionModal({ isOpen, onClose, title }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md scale-100 transform rounded-2xl bg-white p-6 shadow-2xl transition-all animate-slideUp">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-sm text-gray-500">Complete this action</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-8 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
          <p className="text-sm text-gray-700">
            This is a placeholder for <span className="font-semibold text-indigo-700">{title}</span>. 
            You can implement your custom action logic here.
          </p>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:from-indigo-700 hover:to-purple-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActionModal
