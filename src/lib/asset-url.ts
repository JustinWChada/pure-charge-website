const LOVABLE_ASSET_ORIGIN =
  "https://id-preview--0267e87e-2d19-4d68-bc5b-167a89175811.lovable.app";

/**
 * The image files are served by the Lovable project asset host, not by the
 * Cloudflare deployment. Resolve its root-relative asset URLs against that
 * host so they don't incorrectly request /__l5e/... from the deployed site.
 */
export function resolveAssetUrl(path: string): string {
  return new URL(path, LOVABLE_ASSET_ORIGIN).toString();
}
