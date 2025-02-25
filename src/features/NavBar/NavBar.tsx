import { Anchor, Flex } from '@mantine/core';
import { UserProfile } from './components';
import { useGetUser } from './hooks';

export const NavBar: React.FC = () => {
  const { userData } = useGetUser();

  return (
    <Flex
      w="100%"
      p="sm"
      justify="space-between"
      style={{ backgroundColor: 'darkslategrey' }}
    >
      <Flex gap="md" align="center">
        <Anchor href="/" c="dimmed">
          Home
        </Anchor>
        <Anchor href="/about" c="dimmed">
          About
        </Anchor>
      </Flex>
      <UserProfile userData={userData} />
    </Flex>
  );
};
