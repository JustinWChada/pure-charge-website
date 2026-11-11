import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/purecharge/pages";
import { SiteShell } from "@/components/purecharge/site-shell";
import { equipment, type EquipmentCapacity } from "@/lib/purecharge-data";

function validateContactSearch(search: Record<string, unknown>): { capacity?: EquipmentCapacity } {
  if (typeof search["capacity"] !== "string") return {};
  const selected = equipment.find((unit) => unit.capacity === search["capacity"]);
  return selected ? { capacity: selected.capacity } : {};
}

export const Route = createFileRoute("/contact")({
  validateSearch: validateContactSearch,
  head: () => ({
    meta: [
      { title: "Contact PureCharge | AC Quotes in Harare" },
      {
        name: "description",
        content:
          "Request an air conditioning quotation or contact the PureCharge team for installation, repairs, and service in Harare.",
      },
      { property: "og:title", content: "Contact PureCharge | Harare" },
      {
        property: "og:description",
        content:
          "Get in touch with PureCharge for air conditioning quotations, installation, repair, and service across Harare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const { capacity } = Route.useSearch();
  return (
    <SiteShell>
      <ContactPage initialCapacity={capacity} />
    </SiteShell>
  );
}
