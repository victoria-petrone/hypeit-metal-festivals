import React from 'react';

type ExampleHeaderPropsType = {
  text: string;
};

export const ExampleHeader: React.FC<ExampleHeaderPropsType> = ({ text }) => {
  return <>{text && <h3>{text}</h3>}</>;
};
