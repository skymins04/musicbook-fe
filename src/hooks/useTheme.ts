import { useEffect } from "react";
import Cookie from "js-cookie";
import useSWRImmutable from "swr/immutable";
import { DOT_DOMAIN } from "@constants/host";

export type ThemeType = "light" | "dark";

const setThemeClassNameToBody = (theme: ThemeType) => {
  const bodyClassList = document.body.classList;
  bodyClassList.remove(theme === "light" ? "dark" : "light");
  bodyClassList.add(theme);
};

export const useTheme = () => {
  const { data: theme, mutate: setTheme } = useSWRImmutable<ThemeType>(
    "theme",
    null,
    {
      fallbackData: "light",
      revalidateOnReconnect: false,
    }
  );

  const set = (_theme: ThemeType) => {
    setTheme(_theme);
    Cookie.set("theme", _theme, { domain: DOT_DOMAIN });
    setThemeClassNameToBody(_theme);
  };

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    Cookie.set("theme", newTheme, { domain: DOT_DOMAIN });
    setThemeClassNameToBody(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (window) {
      const _theme = (Cookie.get("theme") as ThemeType) || "light";
      setTheme(_theme);
    }
  }, []);

  return {
    theme,
    setTheme: set,
    toggleTheme: toggle,
  };
};
