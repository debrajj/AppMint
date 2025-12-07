import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, Page, Layout, Text, LegacyCard } from "@shopify/polaris";
import { NavMenu } from "@shopify/app-bridge-react";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  return (
    <>
      <NavMenu>
        <a href="/" rel="home">Dashboard</a>
        <a href="/content">Content</a>
        <a href="/pages">Pages</a>
        <a href="/settings">Settings</a>
      </NavMenu>
      
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
