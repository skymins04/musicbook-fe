import NextNProgress from "nextjs-progressbar";
import { useTheme } from "@hooks";

export const RouterProgressProvider = () => {
  const { theme } = useTheme();

  return (
    <NextNProgress
      color={theme === "light" ? "#81E6D9" : "#319795"}
      height={5}
      showOnShallow
    />
  );
};
