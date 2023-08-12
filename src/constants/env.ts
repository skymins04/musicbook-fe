export type ReleaseEnv = "production" | "development";

export const RELEASE_ENV: ReleaseEnv =
  (process.env.RELEASE_ENV as ReleaseEnv) || "development";

export const RELEASE_ENV_EXTENSIONS_MAP: Record<ReleaseEnv, string> = {
  production: "",
  development: ".dev",
};

export const RELEASE_ENV_EXTENSION = RELEASE_ENV_EXTENSIONS_MAP[RELEASE_ENV];
