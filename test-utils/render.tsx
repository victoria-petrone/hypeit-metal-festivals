import { MantineProvider } from '@mantine/core';
import {
  RenderResult,
  render as testingLibraryRender,
} from '@testing-library/react';
import { theme } from '../src/theme';
import { ReactHookFormProvider } from './ReactHookFormProvider';
import { TranslationProvider } from './TranslationProvider';

export const render = (ui: React.ReactNode): RenderResult => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>
        <ReactHookFormProvider>
          <TranslationProvider>{children}</TranslationProvider>
        </ReactHookFormProvider>
      </MantineProvider>
    ),
  });
};
