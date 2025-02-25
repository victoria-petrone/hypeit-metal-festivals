import { ComponentProps } from 'react';
import { render } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { HomeHero } from './HomeHero';

type RenderComponentProps = ComponentProps<typeof HomeHero>;
const user = userEvent.setup();

const renderComponent = (overrides?: Partial<RenderComponentProps>) => {
  const mockProps: RenderComponentProps = {
    ...overrides,
  };
  return render(<HomeHero {...mockProps} />);
};

describe('When HomeHero is rendered.', () => {
  it('Then it should display the headline.', () => {
    const { getByText } = renderComponent();
    const headline = getByText(/willkommen in unserem template/i);

    expect(headline).toBeInTheDocument();
  });

  it('Then it should display the subtitle.', () => {
    const { getByText } = renderComponent();
    const headline = getByText(
      /das ist ein beispiel layout für eine react anwendung./i
    );

    expect(headline).toBeInTheDocument();
  });

  describe('And the user clicks the "Klick Mick" button.', () => {
    it('Then it should increment the count.', async () => {
      const { getByRole, getByTestId } = renderComponent();
      const button = getByRole('button', { name: /klick mich/i });
      const count = getByTestId('value');

      expect(count).toHaveTextContent('0');

      await user.click(button);

      expect(count).toHaveTextContent('1');
    });
  });

  describe('And the user clicks the "Hello" button.', () => {
    it('Then it should display "Hello World".', async () => {
      const { getByRole, getByTestId } = renderComponent();
      const button = getByRole('button', { name: /hallo/i });

      await user.click(button);

      const helloWorld = getByTestId('hello-world');

      expect(helloWorld).toHaveTextContent(/hello world/i);
    });
  });
});
