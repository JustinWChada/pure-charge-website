import { createFileRoute } from "@tanstack/react-router";

import { GalleryPage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Air Conditioning Installation Gallery | PureCharge Harare" },
      {
        name: "description",
        content:
          "View selected PureCharge air conditioning installation and service work across Harare homes and businesses.",
      },
      { property: "og:title", content: "PureCharge Installation Gallery | Harare" },
      {
        property: "og:description",
        content: "Selected air conditioning installation work in Harare homes and workplaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryRoute,
});

function GalleryRoute() {
  return (
    <SiteShell>
      <GalleryPage />
    </SiteShell>
  );
}
