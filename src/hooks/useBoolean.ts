import { useState } from "react";

export const useBoolean = (
  initValue: boolean
): readonly [
  boolean,
  { on: () => void; off: () => void; toggle: () => void }
] => {
  const [booleanValue, setBooleanValue] = useState<boolean>(initValue);

  const on = () => {
    setBooleanValue(true);
  };

  const off = () => {
    setBooleanValue(false);
  };

  const toggle = () => {
    setBooleanValue(!booleanValue);
  };

  return [booleanValue, { on, off, toggle }];
};
