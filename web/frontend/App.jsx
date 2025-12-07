import { useState } from "react";
import { AppProvider, Frame, Navigation, Page, Layout, Text, LegacyCard } from "@shopify/polaris";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("/apps/appmint/dashboard");

  const mainNavigationItems = [
    {
      label: "Home",
      url: "/",
      selected: selectedItem === "/",
      onClick: () => setSelectedItem("/"),
    },
    {
      label: "Orders",
      url: "/orders",
      selected: selectedItem === "/orders",
      onClick: () => setSelectedItem("/orders"),
    },
    {
      label: "Products",
      url: "/products",
      selected: selectedItem === "/products",
      onClick: () => setSelectedItem("/products"),
    },
    {
      label: "Customers",
      url: "/customers",
      selected: selectedItem === "/customers",
      onClick: () => setSelectedItem("/customers"),
    },
    {
      label: "Marketing",
      url: "/marketing",
      selected: selectedItem === "/marketing",
      onClick: () => setSelectedItem("/marketing"),
    },
    {
      label: "Discounts",
      url: "/discounts",
      selected: selectedItem === "/discounts",
      onClick: () => setSelectedItem("/discounts"),
    },
    {
      label: "Content",
      url: "/content",
      selected: selectedItem === "/content",
      onClick: () => setSelectedItem("/content"),
    },
    {
      label: "Markets",
      url: "/markets",
      selected: selectedItem === "/markets",
      onClick: () => setSelectedItem("/markets"),
    },
    {
      label: "Analytics",
      url: "/analytics",
      selected: selectedItem === "/analytics",
      onClick: () => setSelectedItem("/analytics"),
    },
  ];

  const salesChannelItems = [
    {
      label: "Online Store",
      url: "/online-store",
      selected: selectedItem === "/online-store",
      onClick: () => setSelectedItem("/online-store"),
    },
  ];

  const appsItems = [
    {
      label: "Flow",
      url: "/apps/flow",
      selected: selectedItem === "/apps/flow",
      onClick: () => setSelectedItem("/apps/flow"),
    },
    {
      label: "AppMint",
      url: "/apps/appmint",
      selected: selectedItem === "/apps/appmint",
      onClick: () => setSelectedItem("/apps/appmint"),
      subNavigationItems: [
        {
          label: "Dashboard",
          url: "/apps/appmint/dashboard",
          selected: selectedItem === "/apps/appmint/dashboard",
          onClick: () => setSelectedItem("/apps/appmint/dashboard"),
        },
        {
          label: "Content",
          url: "/apps/appmint/content",
          selected: selectedItem === "/apps/appmint/content",
          onClick: () => setSelectedItem("/apps/appmint/content"),
        },
        {
          label: "Pages",
          url: "/apps/appmint/pages",
          selected: selectedItem === "/apps/appmint/pages",
          onClick: () => setSelectedItem("/apps/appmint/pages"),
        },
        {
          label: "Settings",
          url: "/apps/appmint/settings",
          selected: selectedItem === "/apps/appmint/settings",
          onClick: () => setSelectedItem("/apps/appmint/settings"),
        },
      ],
    },
  ];

  const settingsItems = [
    {
      label: "Settings",
      url: "/settings",
      selected: selectedItem === "/settings",
      onClick: () => setSelectedItem("/settings"),
    },
  ];

  return (
    <AppProvider i18n={{}}>
      <Frame
        navigation={
          <Navigation location={selectedItem}>
            <Navigation.Section items={mainNavigationItems} />
            <Navigation.Section title="Sales channels" items={salesChannelItems} />
            <Navigation.Section title="Apps" items={appsItems} />
            <Navigation.Section items={settingsItems} separator />
          </Navigation>
        }
      >
        {selectedItem === "/apps/appmint/dashboard" && <DashboardPage />}
        {selectedItem === "/apps/appmint/content" && <PlaceholderPage title="Content" />}
        {selectedItem === "/apps/appmint/pages" && <PlaceholderPage title="Pages" />}
        {selectedItem === "/apps/appmint/settings" && <PlaceholderPage title="Settings" />}
        {selectedItem === "/" && <PlaceholderPage title="Home" />}
        {selectedItem === "/orders" && <PlaceholderPage title="Orders" />}
        {selectedItem === "/products" && <PlaceholderPage title="Products" />}
        {selectedItem === "/customers" && <PlaceholderPage title="Customers" />}
        {selectedItem === "/marketing" && <PlaceholderPage title="Marketing" />}
        {selectedItem === "/discounts" && <PlaceholderPage title="Discounts" />}
        {selectedItem === "/content" && <PlaceholderPage title="Content" />}
        {selectedItem === "/markets" && <PlaceholderPage title="Markets" />}
        {selectedItem === "/analytics" && <PlaceholderPage title="Analytics" />}
        {selectedItem === "/online-store" && <PlaceholderPage title="Online Store" />}
        {selectedItem === "/apps/flow" && <PlaceholderPage title="Flow" />}
        {selectedItem === "/settings" && <PlaceholderPage title="Settings" />}
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
