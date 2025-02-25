import React from 'react';
import { Button } from '@mantine/core';

type ExampleButtonPropsType = {
  label: string;
  onClick: () => void;
};

export const ExampleButton: React.FC<ExampleButtonPropsType> = ({
  label,
  onClick,
}) => {
  return <Button onClick={onClick}>{label}</Button>;
};
