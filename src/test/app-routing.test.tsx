import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { equipment, standardInstallationPrice } from "@/lib/purecharge-data";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(["/services", "/brands", "/pricing", "/why-us", "/gallery", "/contact"])(
    "matches the separate %s page",
    (path) => {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    },
  );

  it("retains the source inverter unit prices", () => {
    expect(equipment.map((unit) => [unit.capacity, unit.price])).toEqual([
      ["9,000 BTU", 460],
      ["12,000 BTU", 480],
      ["18,000 BTU", 680],
      ["24,000 BTU", 790],
    ]);
  });

  it("retains the source $90 standard installation price", () => {
    expect(standardInstallationPrice).toBe(90);
  });
});
