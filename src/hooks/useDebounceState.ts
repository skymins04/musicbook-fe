import { useRef, useState } from "react";

export const useDebounceState = <T>(
  initValue: T,
  waitTime: number
): readonly [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initValue);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setDebounceState = (value: T) => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    const t = setTimeout(() => setState(value), waitTime);
    timerRef.current = t;
  };

  return [state, setDebounceState];
};
