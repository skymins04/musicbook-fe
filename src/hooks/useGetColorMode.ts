import { ColorMode, useColorMode } from "@chakra-ui/react";

export const useGetColorMode = () => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();

  const _setColorMode = (value: ColorMode) => {
    localStorage.setItem("COLOR_MODE", value);
    setColorMode(value);
  };

  const _toggleColorMode = () => {
    localStorage.setItem("COLOR_MODE", colorMode === "dark" ? "light" : "dark");
    toggleColorMode();
  };

  return {
    colorMode,
    setColorMode: _setColorMode,
    toggleColorMode: _toggleColorMode,
  };
};
