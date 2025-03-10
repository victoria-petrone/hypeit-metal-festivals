import React from 'react';
import { Stack, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FestivalList } from 'src/components/festivalList';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack className="content" justify="center">
        <Title order={1} mt="lg">
          {t('FESTIVALS')}
        </Title>
        <FestivalList />
      </Stack>
    </>
  );
};
