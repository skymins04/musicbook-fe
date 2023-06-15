import { useColorMode } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";

type ColorModeProviderProps = {
  children: ReactNode;
};

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    const savedColorMode = localStorage.getItem("COLOR_MODE");
    if (!savedColorMode) {
      localStorage.setItem("COLOR_MODE", colorMode);
    } else {
      setColorMode(savedColorMode);
    }
  }, []);

  useEffect(() => {
    const bodys = document.querySelectorAll("body");
    bodys.forEach((body) => {
      body.classList.remove(colorMode === "dark" ? "light" : "dark");
      body.classList.add(colorMode);
    });
  }, [colorMode]);

  return <>{children}</>;
};
