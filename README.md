# Email Marketing Dashboard

A modern, responsive email marketing dashboard built with React, TypeScript, and Tailwind CSS. This application helps manage email campaigns, track analytics, and monitor key performance indicators.

## Features

- 📊 Real-time analytics and KPI tracking
- 📧 Email campaign management
- 📋 Master list and email list management
- 📈 Campaign performance metrics
- 📱 Responsive design with modern UI
- 📉 Engagement tracking and analytics

## Tech Stack

- React

- Tailwind CSS
- Vite
- ESLint

## Getting Started

### Prerequisites

- react
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd email-marketing-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Reusable React components
│   ├── ActionModal.jsx
│   ├── AnalyticsSection.jsx
│   ├── CampaignTable.jsx
│   ├── KPISection.jsx
│   ├── Sidebar.jsx
│   └── Topbar.jsx
├── data/          # Mock data and configurations
│   ├── activities.json
│   ├── campaigns.json
│   ├── engagement.json
│   └── kpis.json
└── pages/         # Page components
    ├── Analytics.jsx
    ├── Dashboard.jsx
    ├── EmailAccounts.jsx
    ├── EmailCampaign.jsx
    ├── EmailLists.jsx
    └── MasterList.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
