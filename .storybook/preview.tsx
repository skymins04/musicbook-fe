import type { Preview } from "@storybook/react";
import "../src/themes/base.css";
import { useEffect } from "react";
import React from "react";
import { ProviderRoot } from "../src/providers";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story, context) => {
    const colorMode = context.globals.colorMode;

    useEffect(() => {
      const nodes = document.querySelectorAll("body");
      for (const node of nodes) {
        node.classList.remove(colorMode === "light" ? "dark" : "light");
        node.classList.add(colorMode === "light" ? "light" : "dark");
      }
    }, [colorMode]);

    return (
      <ProviderRoot>
        <Story />
      </ProviderRoot>
    );
  },
];

export const globalTypes = {
  colorMode: {
    name: "Color Mode",
    defaultValue: "light",
    toolbar: {
      items: [
        { title: "Light", value: "light" },
        { title: "Dark", value: "dark" },
      ],
      dynamicTitle: true,
    },
  },
};
