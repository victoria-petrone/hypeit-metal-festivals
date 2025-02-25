import { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import { ExampleHeader } from './ExampleHeader';

type RenderComponentProps = ComponentProps<typeof ExampleHeader>;

const renderComponent = (overrides?: Partial<RenderComponentProps>) => {
  const mockProps: RenderComponentProps = {
    text: 'Example Header',
    ...overrides,
  };
  return render(<ExampleHeader {...mockProps} />);
};

describe('When ExampleHeader is rendered.', () => {
  describe('And a text prop is provided.', () => {
    describe('And text is a string.', () => {
      it('Then it should render the h3.', () => {
        const { getByRole } = renderComponent();
        const h3 = getByRole('heading', { level: 3 });

        expect(h3).toBeInTheDocument();
      });

      it('Then it should render the text.', () => {
        const { getByText } = renderComponent();
        const text = getByText('Example Header');

        expect(text).toBeInTheDocument();
      });
    });

    describe('And text is an empty string.', () => {
      it('Then it should not render the h3.', () => {
        const { queryByRole } = renderComponent({ text: '' });
        const h3 = queryByRole('heading', { level: 3 });

        expect(h3).not.toBeInTheDocument();
      });
    });
  });
});
