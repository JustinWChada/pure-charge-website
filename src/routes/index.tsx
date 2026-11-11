import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PureCharge Climate Systems | Air Conditioning in Harare" },
      {
        name: "description",
        content:
          "Discover air conditioning supply, professional installation, repairs, and maintenance across Harare with PureCharge Climate Systems.",
      },
      { property: "og:title", content: "PureCharge Climate Systems | Harare" },
      {
        property: "og:description",
        content:
          "Air conditioning supply, installation, repairs, and maintenance across Greater Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
