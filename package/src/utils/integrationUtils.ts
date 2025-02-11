import type { AstroConfig, AstroIntegration } from "astro";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object | undefined
      ? DeepPartial<T[P]>
      : T[P];
};

export const createUpdateConfigIntegration = (
  name: string,
  newConfig: DeepPartial<AstroConfig>,
): AstroIntegration => ({
  name,
  hooks: {
    "astro:config:setup": (o) => {
      o.updateConfig(newConfig);
    },
  },
});
