import { useState } from 'react';

type UseHelloWorldReturnType = {
  helloWorld: string | null;
  onHelloWorld: () => void;
};

export const useHelloWorld = (): UseHelloWorldReturnType => {
  const [helloWorld, setHelloWorld] = useState<string | null>(null);

  const onHelloWorld = () => {
    if (helloWorld) {
      setHelloWorld(null);
    } else {
      setHelloWorld('Hello World');
    }
  };

  return {
    helloWorld,
    onHelloWorld,
  };
};
