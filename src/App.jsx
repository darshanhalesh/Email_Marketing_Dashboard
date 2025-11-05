import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import EmailLists from './pages/EmailLists'
import EmailAccounts from './pages/EmailAccounts'
import EmailCampaign from './pages/EmailCampaign'
import Analytics from './pages/Analytics'
import MasterList from './pages/MasterList'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="mx-auto w-full max-w-[1400px] flex-1 space-y-6 px-8 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/email-lists" element={<EmailLists />} />
              <Route path="/email-accounts" element={<EmailAccounts />} />
              <Route path="/email-campaign" element={<EmailCampaign />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/master-list" element={<MasterList />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
