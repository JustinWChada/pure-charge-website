import { createFileRoute } from "@tanstack/react-router";

import { WhyUsPage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose PureCharge | Harare Climate Specialists" },
      {
        name: "description",
        content:
          "Learn about PureCharge professional equipment sizing, certified air conditioning installations, Greater Harare coverage, and ongoing support.",
      },
      { property: "og:title", content: "Why Choose PureCharge in Harare" },
      {
        property: "og:description",
        content:
          "Local climate specialists, careful installations, clear pricing, and ongoing service across Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyUsRoute,
});

function WhyUsRoute() {
  return (
    <SiteShell>
      <WhyUsPage />
    </SiteShell>
  );
}
