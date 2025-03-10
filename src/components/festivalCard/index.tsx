import React from 'react';
import {
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Image, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FestivalType } from 'src/api/generated/apiSchemas';
import { formatDate } from 'src/utils/formatDate';
import './styles.css';

type FestivalCardProps = {
  festival: FestivalType;
};

export const FestivalCard: React.FC<FestivalCardProps> = ({ festival }) => {
  const { name, start, end, location, image, id } = festival;
  const { t } = useTranslation();

  return (
    <Link to={id} state={festival}>
      <Card className="festival-card" padding="lg" radius="md" withBorder>
        <Card.Section className="festival-card__image-container">
          {image ? (
            <Image src={image} alt={name || 'Festival Image'} radius="md" />
          ) : (
            <Text size="xs" c="dimmed">
              {t('NO IMAGE')}
            </Text>
          )}
        </Card.Section>

        <Stack
          className="festival-card-text-container"
          gap="xs"
          pt="sm"
          pb="xs"
        >
          <Text fw={700} size="xl">
            {name}
          </Text>
          <Text size="xs">
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            {start ? formatDate(start) : t('TO_BE_ANNOUNCED')} -{' '}
            {end ? formatDate(end) : t('TO_BE_ANNOUNCED')}{' '}
          </Text>
          <Text size="xs" fs="italic">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            {location && location.city && location.country
              ? `${location.city}, ${location.country}`
              : t('TO_BE_ANNOUNCED')}
          </Text>
        </Stack>
      </Card>
    </Link>
  );
};
