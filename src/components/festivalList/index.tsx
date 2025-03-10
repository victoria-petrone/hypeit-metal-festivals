import { Container, Grid, Loader, Text, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useData } from 'src/providers/DataProvider';
import { FestivalCard } from '../festivalCard';

export const FestivalList: React.FC = () => {
  const { search, setSearch, festivals, isLoading, isError, error } = useData();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Text>
        {' '}
        {t('ERORR_LOADING_FESTIVALS')} {error?.payload}
      </Text>
    );
  }

  return (
    <Container mt="xl">
      <TextInput
        placeholder="Search festivals by name, city, or country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb="xl"
        size="md"
        radius="md"
      />
      <Text size="xs" mb="xl">
        Your search has returned {festivals?.length} festivals!{' '}
      </Text>
      <Grid justify="flex-start" grow>
        {festivals?.length === 0 ? (
          <Text> {t('NO_FESTIVAL')}</Text>
        ) : (
          festivals &&
          festivals.map((festival, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
              <FestivalCard festival={festival} />
            </Grid.Col>
          ))
        )}
      </Grid>
    </Container>
  );
};
