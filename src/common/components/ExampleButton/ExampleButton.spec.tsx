import { ComponentProps } from 'react';
import { render } from '@test-utils';
import { ExampleButton } from './ExampleButton';

type RenderComponentProps = ComponentProps<typeof ExampleButton>;

const onClickMock = jest.fn();

const renderComponent = (overrides?: Partial<RenderComponentProps>) => {
  const mockProps: RenderComponentProps = {
    label: 'click me',
    onClick: onClickMock,
    ...overrides,
  };
  return render(<ExampleButton {...mockProps} />);
};

describe('When ExampleButton is rendered.', () => {
  describe('And a label prop is provided.', () => {
    it('Then it should render the label.', () => {
      const { getByText } = renderComponent();
      const label = getByText('click me');

      expect(label).toBeInTheDocument();
    });
  });

  describe('And an onClick prop is provided.', () => {
    it('Then it should call the onClick function when clicked.', () => {
      const { getByText } = renderComponent();
      const button = getByText('click me');

      button.click();

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
