import { useEffect, DependencyList } from "react";

export const useDebounceEffect = (
  fn: () => void,
  waitTime: number,
  deps?: DependencyList
) => {
  useEffect(() => {
    const t = setTimeout(() => fn.apply({ ...deps }), waitTime);

    return () => {
      clearTimeout(t);
    };
  }, deps);
};
