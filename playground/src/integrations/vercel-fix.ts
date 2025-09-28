import { cpSync } from "node:fs";
import type { AstroConfig, AstroIntegration } from "astro";

var _config: AstroConfig;
var _buildOutput: "static" | "server";

export default function vercelFix(): AstroIntegration {
  return {
    name: "vercel-fix",
    hooks: {
      "astro:config:setup": ({ logger, updateConfig }) => {
        updateConfig({
          integrations: [
            {
              name: "vercel-fix:copy-vercel-output",
              hooks: {
                "astro:build:done": async () => {
                  logger.info("Copying static files to .vercel/output/static");
                  const _staticDir =
                    _buildOutput === "static"
                      ? _config.outDir
                      : _config.build.client;
                  cpSync(
                    _staticDir,
                    new URL("./.vercel/output/static/", _config.root),
                    {
                      recursive: true,
                    },
                  );
                },
              },
            },
          ],
        });
      },
      "astro:config:done": ({ config, buildOutput }) => {
        _config = config;
        _buildOutput = buildOutput;
      },
    },
  };
}
