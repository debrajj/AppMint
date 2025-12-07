import { useState } from "react";
import { AppProvider, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  return (
    <AppProvider i18n={{}}>
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
              active={selectedItem === "dashboard"}
              onClick={() => setSelectedItem("dashboard")}
            />
            <NavItem 
              label="Content" 
              active={selectedItem === "content"}
              onClick={() => setSelectedItem("content")}
            />
            <NavItem 
              label="Pages" 
              active={selectedItem === "pages"}
              onClick={() => setSelectedItem("pages")}
            />
            <NavItem 
              label="Settings" 
              active={selectedItem === "settings"}
              onClick={() => setSelectedItem("settings")}
            />
          </nav>
        </div>

        {/* Main Content Area */}
        <div style={{ marginLeft: "240px", flex: 1, backgroundColor: "#f6f6f7" }}>
          {selectedItem === "dashboard" && <DashboardPage />}
          {selectedItem === "content" && <PlaceholderPage title="Content" />}
          {selectedItem === "pages" && <PlaceholderPage title="Pages" />}
          {selectedItem === "settings" && <PlaceholderPage title="Settings" />}
        </div>
      </div>
    </AppProvider>
  );
}

function NavItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
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
