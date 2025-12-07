import { useState } from "react";
import { AppProvider, Frame, Navigation, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  const navigationItems = [
    {
      label: "Dashboard",
      url: "dashboard",
      selected: selectedItem === "dashboard",
      onClick: () => setSelectedItem("dashboard"),
    },
    {
      label: "Content",
      url: "content",
      selected: selectedItem === "content",
      onClick: () => setSelectedItem("content"),
    },
    {
      label: "Pages",
      url: "pages",
      selected: selectedItem === "pages",
      onClick: () => setSelectedItem("pages"),
    },
    {
      label: "Settings",
      url: "settings",
      selected: selectedItem === "settings",
      onClick: () => setSelectedItem("settings"),
    },
  ];

  return (
    <AppProvider i18n={{}}>
      <Frame
        navigation={
          <Navigation location={selectedItem}>
            <Navigation.Section title="AppMint" items={navigationItems} />
          </Navigation>
        }
      >
        {selectedItem === "dashboard" && <DashboardPage />}
        {selectedItem === "content" && <PlaceholderPage title="Content" />}
        {selectedItem === "pages" && <PlaceholderPage title="Pages" />}
        {selectedItem === "settings" && <PlaceholderPage title="Settings" />}
      </Frame>
    </AppProvider>
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
