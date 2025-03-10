import React from 'react';
import {
  faCalendarDays,
  faLeftLong,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArtistType } from 'src/api';
import { useData } from 'src/providers/DataProvider';
import { formatDate } from 'src/utils/formatDate';
import './styles.css';

export const FestivalDetail: React.FC = () => {
  const { getFestival } = useData();
  const { id } = useParams();
  const { t } = useTranslation();

  if (!id) {
    return <div>Missing festival ID</div>;
  }

  const festival = getFestival(id);
  if (!festival) {
    return <div>Festival not found</div>;
  }

  const { name, start, end, image, location, artists } = festival;

  return (
    <Container size="lg" mt={30}>
      <Link to="/" relative="path" className="back-button">
        <FontAwesomeIcon icon={faLeftLong} className="icon" />
        <span>Back to all festivals</span>
      </Link>

      <Card shadow="sm" radius="md">
        <Grid align="flex-start">
          <Grid.Col span={{ xs: 12, md: 6 }}>
            {image && (
              <Image src={image} alt={name || 'Festival Image'} radius="md" />
            )}
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <Stack>
              <Title order={1}>{name}</Title>
              <Text size="lg">
                <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                {start ? formatDate(start) : t('TO_BE_ANNOUNCED')} -{' '}
                {end ? formatDate(end) : t('TO_BE_ANNOUNCED')}
              </Text>
              <Text size="md" fs="italic">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                {location && location.city && location.country
                  ? `${location.city}, ${location.country}`
                  : t('TO_BE_ANNOUNCED')}
              </Text>
              <Divider my="sm" />
              {artists && artists.length > 0 && (
                <Stack>
                  <Title order={3} mb="md">
                    {t('PERFORMERS')}
                  </Title>
                  <Group>
                    {artists.map((artist: ArtistType, index) => (
                      <Text key={index} size="sm" className="artist-item">
                        {artist.name}
                      </Text>
                    ))}
                  </Group>
                </Stack>
              )}
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};
