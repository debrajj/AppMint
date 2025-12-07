import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { AppProvider, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f6f6f7" }}>
      {/* Left Sidebar Navigation - OUTSIDE AppProvider with Polaris styling */}
      <nav className="Polaris-Navigation" style={{
        width: "240px",
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
        zIndex: 100
      }}>
        <div style={{ 
          padding: "16px 16px 12px", 
          borderBottom: "1px solid var(--p-color-border-subdued)",
          marginBottom: "8px"
        }}>
          <div style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "var(--p-color-text)"
          }}>
            AppMint
          </div>
        </div>
        
        <div className="Polaris-Navigation__SecondaryNavigation">
          <ul className="Polaris-Navigation__List">
            <NavItem 
              label="Dashboard" 
              onClick={() => navigate("/dashboard")}
              active={currentPath === "/dashboard" || currentPath === "/"}
            />
            <NavItem 
              label="Content" 
              onClick={() => navigate("/content")}
              active={currentPath === "/content"}
            />
            <NavItem 
              label="Pages" 
              onClick={() => navigate("/pages")}
              active={currentPath === "/pages"}
            />
            <NavItem 
              label="Settings" 
              onClick={() => navigate("/settings")}
              active={currentPath === "/settings"}
            />
          </ul>
        </div>
      </nav>

      {/* Main Content Area with AppProvider */}
      <div style={{ marginLeft: "240px", flex: 1, minHeight: "100vh" }}>
        <AppProvider i18n={{}}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/content" element={<PlaceholderPage title="Content" />} />
            <Route path="/pages" element={<PlaceholderPage title="Pages" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          </Routes>
        </AppProvider>
      </div>
    </div>
  );
}

function NavItem({ label, onClick, active }) {
  return (
    <li className="Polaris-Navigation__ListItem">
      <button
        onClick={onClick}
        className={`Polaris-Navigation__Item ${active ? 'Polaris-Navigation__Item--selected' : ''}`}
        type="button"
      >
        <span className="Polaris-Navigation__Text">{label}</span>
      </button>
    </li>
  );
}

function DashboardPage() {
  return (
    <Page title="Dashboard">
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <Text variant="headingMd" as="h2">
              Welcome to AppMint
            </Text>
          </LegacyCard>
        </Layout.Section>

        <Layout.Section secondary>
          <LegacyCard sectioned>
            <Text variant="headingSm" as="h3" fontWeight="semibold">
              Total Pages
            </Text>
            <div style={{ marginTop: "8px" }}>
              <Text variant="heading2xl" as="p">
                12
              </Text>
            </div>
          </LegacyCard>
        </Layout.Section>

        <Layout.Section secondary>
          <LegacyCard sectioned>
            <Text variant="headingSm" as="h3" fontWeight="semibold">
              Content Blocks
            </Text>
            <div style={{ marginTop: "8px" }}>
              <Text variant="heading2xl" as="p">
                7
              </Text>
            </div>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
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
