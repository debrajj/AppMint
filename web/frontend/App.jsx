import { useState } from "react";
import { AppProvider, Frame, Navigation, Page, Card, Layout, Text, LegacyCard } from "@shopify/polaris";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  const navigationItems = [
    {
      label: "Dashboard",
      onClick: () => setSelectedItem("dashboard"),
      selected: selectedItem === "dashboard",
    },
    {
      label: "Content",
      onClick: () => setSelectedItem("content"),
      selected: selectedItem === "content",
    },
    {
      label: "Pages",
      onClick: () => setSelectedItem("pages"),
      selected: selectedItem === "pages",
    },
    {
      label: "Settings",
      onClick: () => setSelectedItem("settings"),
      selected: selectedItem === "settings",
    },
  ];

  return (
    <AppProvider i18n={{}}>
      <Frame
        navigation={
          <Navigation location="/">
            <Navigation.Section items={navigationItems} />
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
