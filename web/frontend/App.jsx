import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { useState } from "react";

// Import the full app flow
import WelcomeView from "./views/WelcomeView";
import ConfigView from "./views/ConfigView";
import SyncSuccessView from "./views/SyncSuccessView";
import AdminDashboard from "./views/AdminDashboard";

export default function App() {
  return (
    <>
      <ui-nav-menu>
        <a href="/" rel="home">Dashboard</a>
        <a href="/content">Content</a>
        <a href="/pages">Pages</a>
        <a href="/settings">Settings</a>
      </ui-nav-menu>
      
      <BrowserRouter>
        <AppProvider i18n={{}}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/content" element={<PlaceholderPage title="Content" />} />
            <Route path="/pages" element={<PlaceholderPage title="Pages" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

// Dashboard shows your full app flow (Welcome -> Config -> Dashboard)
function DashboardPage() {
  const [currentView, setCurrentView] = useState('WELCOME');
  const [appConfigs, setAppConfigs] = useState({});

  const defaultConfig = {
    clientName: '',
    clientKey: '',
    apiBaseUrl: 'https://api.example.com/app',
    adminApiBaseUrl: 'https://api.example.com/app/admin',
    appName: '',
    primaryColor: '#E91E63',
    bundleId: 'com.example.app',
    packageName: 'com.example.app',
    logoUrl: '',
    environment: 'Development',
    storefrontToken: '',
    adminShopToken: ''
  };

  const handleNewStart = () => {
    setAppConfigs({
      'Development': { ...defaultConfig, environment: 'Development' },
      'Production': { ...defaultConfig, environment: 'Production' }
    });
    setCurrentView('CONFIGURATION');
  };

  const handleExistingConnect = (configs) => {
    setAppConfigs(configs);
    setCurrentView('DASHBOARD');
  };

  const handleConfigSave = (configs) => {
    setAppConfigs(configs);
    setCurrentView('SYNC_SUCCESS');
  };

  const handleLogout = () => {
    setCurrentView('WELCOME');
  };

  const initialConfig = appConfigs['Development'] || defaultConfig;

  // Render the appropriate view
  switch (currentView) {
    case 'WELCOME':
      return (
        <WelcomeView 
          logoUrl={initialConfig.logoUrl} 
          onStartNew={handleNewStart}
          onConnectExisting={handleExistingConnect}
        />
      );
    case 'CONFIGURATION':
      return (
        <ConfigView 
          initialConfig={initialConfig} 
          onSave={handleConfigSave} 
        />
      );
    case 'SYNC_SUCCESS':
      return (
        <SyncSuccessView 
          clientKey={initialConfig.clientKey}
          appName={initialConfig.appName}
          onContinue={() => setCurrentView('DASHBOARD')} 
        />
      );
    case 'DASHBOARD':
      return (
        <AdminDashboard configs={appConfigs} onLogout={handleLogout} />
      );
    default:
      return <div>Unknown View</div>;
  }
}

function PlaceholderPage({ title }) {
  return (
    <Page title={title}>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <Text variant="bodyMd" as="p">
              {title} page coming soon...
            </Text>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
