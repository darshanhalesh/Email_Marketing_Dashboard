# 📊 Email Marketing Dashboard (Frontend – React + Tailwind CSS)

### 🧠 Overview
This project is a **fully responsive Email Marketing Dashboard** built using **React (JavaScript)** and **Tailwind CSS**.  
It visualizes email campaign performance, engagement metrics, subscriber data, and provides quick-access actions.  
The dashboard is part of the **Frontend Developer Assessment** by **Globo Persona**.

> 🧩 Live Demo: [https://extraordinary-cucurucho-196a57.netlify.app/](https://extraordinary-cucurucho-196a57.netlify.app/)  
> 💻 GitHub Repo: [https://github.com/darshanhalesh/Email_Marketing_Dashboard](https://github.com/darshanhalesh/Email_Marketing_Dashboard)

---

<img width="1920" height="1080" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/6b02a0e3-fb1c-47fe-8879-c08329525e65" />
<img width="1920" height="1080" alt="Screenshot (30)" src="https://github.com/user-attachments/assets/75f403b0-d54e-4c38-a44d-a62026413413" />
<img width="1920" height="1080" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/cf9a399d-548f-4252-b7bc-2e156882a960" />
<img width="1920" height="1080" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/22215047-2a7a-4f34-8bb5-10e8697eb02a" />


## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React (JavaScript) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Data | Mock JSON / Static state |
| Charts | Recharts (for visualization) |
| State Management | React Hooks (`useState`, `useEffect`) |
| Deployment | Vercel |
| Build Tool | Vite |

---

## 🧩 Features

### 🌐 Layout
- Sidebar with navigation links: **Dashboard**, **Email Lists**, **Email Accounts**, **Email Campaign**, **Analytics**, **Master List**
- Topbar with:
  - Left: “Dashboard Overview”
  - Center: “Welcome back, Darshan K H”
  - Right: System status — 🟢 “All systems operational” + “+ 4 14 options operational”

---

### 📊 Dashboard Sections

#### 1️⃣ KPI Metrics (Top Row)
- Cards: Active Subscribers, Revenue Generated, Text Campaigns, Average Open Rate, Bounce Rate
- Animated progress bars built with Tailwind utilities.

#### 2️⃣ Analytics Section (Two Columns)
**Left Column**
- **Campaign Performance**: Circular metric showing campaign success rate + recent activities.  
- **Engagement Trends**: List of key metrics — Email Opens, Link Clicks, Forwards, Unsubscribes — with positive/negative trends.

**Right Column**
- **Quick Actions**: Cards for Create Campaign, Browse Templates, View Analytics, and Segment Lists with action buttons.  
- **Recent Campaigns**: Summary cards with recipients, opens, and revenue.

#### 3️⃣ Campaign Table
- Search bar (`Search campaigns…`)
- Table columns: Status, Recipients, Performance, Revenue, Date, Actions  
- Pagination (Previous | 1 | 2 | 3 … | Next)
- Color-coded status badges (Sent, Scheduled, Draft, Active)

---

## 🧠 State Management & Data
All data is local and can be replaced with dynamic data:
- `kpiCards`, `recentCampaigns`, and `campaignTableData` arrays simulate API responses.
- Use of React hooks:
  ```js
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Dashboard');
