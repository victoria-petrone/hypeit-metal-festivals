import React from 'react';
import { DataProvider } from './DataProvider';
import { MantineProvider } from './MantineProvider';
import { ReactQueryProvider } from './ReactQueryProvider';

type AppProviderPropsType = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderPropsType> = ({ children }) => {
  return (
    <MantineProvider>
      <ReactQueryProvider>
        <DataProvider>{children}</DataProvider>
      </ReactQueryProvider>
    </MantineProvider>
  );
};
