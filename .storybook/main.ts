const path = require("path");
import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    [
      "apis",
      "components",
      "constants",
      "fetchers",
      "hooks",
      "pages",
      "providers",
      "themes",
      "utils",
      "",
    ].forEach((name) => {
      config!.resolve!.alias![`@${name}`] = path.resolve(
        __dirname,
        `../src/${name}`
      );
    });
    return config;
  },
};
export default config;
