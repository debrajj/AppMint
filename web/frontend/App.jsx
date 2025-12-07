import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { AppProvider, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider i18n={{}}>
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Sidebar Navigation */}
      <div style={{
        width: "240px",
        backgroundColor: "#f6f6f7",
        borderRight: "1px solid #e1e3e5",
        padding: "16px 0",
        position: "fixed",
        height: "100vh",
        overflowY: "auto"
      }}>
        <div style={{ padding: "0 16px 16px", borderBottom: "1px solid #e1e3e5", marginBottom: "16px" }}>
          <Text variant="headingMd" as="h2" fontWeight="semibold">
            AppMint
          </Text>
        </div>
        
        <nav>
          <NavItem 
            label="Dashboard" 
            to="/dashboard"
            active={currentPath === "/dashboard" || currentPath === "/"}
          />
          <NavItem 
            label="Content" 
            to="/content"
            active={currentPath === "/content"}
          />
          <NavItem 
            label="Pages" 
            to="/pages"
            active={currentPath === "/pages"}
          />
          <NavItem 
            label="Settings" 
            to="/settings"
            active={currentPath === "/settings"}
          />
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={{ marginLeft: "240px", flex: 1, backgroundColor: "#f6f6f7" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/content" element={<PlaceholderPage title="Content" />} />
          <Route path="/pages" element={<PlaceholderPage title="Pages" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        </Routes>
      </div>
    </div>
  );
}

function NavItem({ label, to, active }) {
  return (
    <Link
      to={to}
      style={{
        display: "block",
        width: "100%",
        padding: "10px 16px",
        backgroundColor: active ? "#ffffff" : "transparent",
        color: active ? "#202223" : "#6d7175",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: active ? "600" : "400",
        borderLeft: active ? "3px solid #008060" : "3px solid transparent",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.backgroundColor = "#f1f2f3";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.backgroundColor = "transparent";
        }
      }}
    >
      {label}
    </Link>
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
