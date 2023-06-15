import React from "react";
import type { Preview } from "@storybook/react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { useDarkMode } from "storybook-dark-mode";
import "../src/themes/base.css";
import { useEffect } from "react";

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

type ColorModeProps = {
  colorMode: "light" | "dark";
  children: JSX.Element;
};

function ColorMode(props: ColorModeProps) {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(props.colorMode);
  }, [props.colorMode]);

  return props.children;
}

function ThemeWrapper(props: { children: React.ReactNode }) {
  const isDarkMode = useDarkMode();
  const colorMode = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const bodys = document.querySelectorAll("body");
    for (const body of bodys) {
      body.classList.remove(isDarkMode ? "light" : "dark");
      body.classList.add(colorMode);
    }
  }, [colorMode]);

  return (
    <ChakraProvider>
      <ColorMode colorMode={colorMode}>{props.children}</ColorMode>
    </ChakraProvider>
  );
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
