/** GitHub Pages project path — keep in sync with next.config.ts */
export const basePath = "/albion-fish-bar-demo";

/** Prefix a root-absolute public asset or page path with the site basePath. */
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
