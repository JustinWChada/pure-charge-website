import { createFileRoute } from "@tanstack/react-router";

import { PricingPage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Air Conditioner Prices in Harare | PureCharge" },
      {
        name: "description",
        content:
          "See PureCharge Electro Master inverter prices from $460, plus professional standard installation for $90 per unit in Harare.",
      },
      { property: "og:title", content: "Air Conditioner Prices in Harare | PureCharge" },
      {
        property: "og:description",
        content:
          "Clear inverter air conditioner and installation pricing from PureCharge Climate Systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingRoute,
});

function PricingRoute() {
  return (
    <SiteShell>
      <PricingPage />
    </SiteShell>
  );
}
