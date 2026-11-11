import { createFileRoute } from "@tanstack/react-router";

import { BrandsPage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Inverter Air Conditioner Brands in Harare | PureCharge" },
      {
        name: "description",
        content:
          "Compare Electro Master, TCL, and Hisense inverter air conditioners available from PureCharge in Harare.",
      },
      { property: "og:title", content: "Inverter Air Conditioner Brands | PureCharge" },
      {
        property: "og:description",
        content:
          "Explore inverter air conditioning from Electro Master, TCL, and Hisense with local guidance in Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandsRoute,
});

function BrandsRoute() {
  return (
    <SiteShell>
      <BrandsPage />
    </SiteShell>
  );
}
