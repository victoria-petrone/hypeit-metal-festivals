import React from 'react';
import { Avatar, Flex, Text } from '@mantine/core';
import { UserDataAppType } from '../../types';

type UserProfilePropsType = {
  userData: UserDataAppType;
};

export const UserProfile: React.FC<UserProfilePropsType> = ({ userData }) => {
  const fullName = `${userData.firstName} ${userData.lastName}`;

  return (
    <Flex gap="sm">
      <Avatar name={fullName} />
      <div>
        <Text size="sm">{fullName}</Text>
        <Text size="xs" c="dimmed">
          {userData.email}
        </Text>
      </div>
    </Flex>
  );
};
