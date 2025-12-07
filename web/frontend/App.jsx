import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { AppProvider, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  // Get Shopify parameters from URL
  const host = new URLSearchParams(window.location.search).get("host");
  const shop = new URLSearchParams(window.location.search).get("shop");

  const config = {
    apiKey: import.meta.env.VITE_SHOPIFY_API_KEY || "your-api-key",
    host: host || window.btoa(`${shop}/admin`),
    forceRedirect: false,
  };

  return (
    <BrowserRouter>
      <AppBridgeProvider config={config}>
        <AppProvider i18n={{}}>
          <AppContent />
        </AppProvider>
      </AppBridgeProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
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

function NavItem({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "block",
        width: "100%",
        padding: "10px 16px",
        border: "none",
        backgroundColor: active ? "#ffffff" : "transparent",
        color: active ? "#202223" : "#6d7175",
        textAlign: "left",
        cursor: "pointer",
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
    </button>
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
