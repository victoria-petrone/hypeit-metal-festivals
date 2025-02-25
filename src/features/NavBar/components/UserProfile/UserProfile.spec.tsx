import { ComponentProps } from 'react';
import { render } from '@test-utils';
import { screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';

type RenderComponentPropsType = ComponentProps<typeof UserProfile>;

const renderComponent = (overrides?: Partial<RenderComponentPropsType>) => {
  const mockProps: RenderComponentPropsType = {
    userData: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    },
    ...overrides,
  };
  return render(<UserProfile {...mockProps} />);
};

describe('When UserProfile is rendered', () => {
  describe('And user data is provided', () => {
    describe('And a firstName and a Lastname is valid', () => {
      it('Then it should render the user name', () => {
        renderComponent();
        expect(screen.getByText(/john doe/i)).toBeInTheDocument();
      });
      it('Then it should render the Avatar with the initials', () => {
        renderComponent();
        expect(screen.getByText(/jd/i)).toBeInTheDocument();
      });
    });

    describe('And an email is valid', () => {
      it('Then it should render the email', () => {
        renderComponent();
        expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
      });
    });
  });
});
