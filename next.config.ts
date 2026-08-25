import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoName = "Richfield-Trailer-Supply-Website";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const configDir = path.dirname(fileURLToPath(import.meta.url));

const exporting = process.env.npm_lifecycle_event === "build";

const nextConfig: NextConfig = {
  output: "export",
  distDir: exporting ? "site" : ".next",
  images: { unoptimized: true, dangerouslyAllowSVG: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  turbopack: {
    root: configDir,
  },
  agentRules: false,
};

export default nextConfig;
