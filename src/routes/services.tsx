import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Air Conditioning Services in Harare | PureCharge" },
      {
        name: "description",
        content:
          "Explore AC installation, diagnostics and repair, and preventative maintenance from PureCharge Climate Systems in Harare.",
      },
      { property: "og:title", content: "Air Conditioning Services in Harare | PureCharge" },
      {
        property: "og:description",
        content:
          "Professional air conditioning installation, repairs, and care for homes and workplaces across Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <SiteShell>
      <ServicesPage />
    </SiteShell>
  );
}
