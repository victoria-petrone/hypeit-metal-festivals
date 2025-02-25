import { useState } from 'react';

type useCountReturnType = {
  value: number;
  convert: () => void;
};

export const useCount = (): useCountReturnType => {
  const [value, setValue] = useState<number>(0);

  const convert = () => {
    setValue(value + 1);
  };

  return { value, convert };
};
