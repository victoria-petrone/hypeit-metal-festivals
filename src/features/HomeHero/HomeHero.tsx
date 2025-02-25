import { convertToUppercase, ExampleButton, useCount } from '@common';
import { useTranslation } from 'react-i18next';
import { ExampleHeader } from './components';
import { convertToLowerCase } from './helpers';
import { useHelloWorld } from './hooks';

export const HomeHero: React.FC = () => {
  const { t } = useTranslation();
  const { value, convert } = useCount();
  const { helloWorld, onHelloWorld } = useHelloWorld();

  const handleClickCount = () => {
    convert();
  };

  const upperCase = convertToUppercase(t('HEADLINE'));
  const lowerCase = convertToLowerCase(t('SUBTITLE'));

  return (
    <>
      <h1>{upperCase}</h1>
      <ExampleHeader text={lowerCase} />
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <ExampleButton
          label={t('BUTTON.CLICK_ME')}
          onClick={handleClickCount}
        />
        <ExampleButton label={t('BUTTON.HELLO')} onClick={onHelloWorld} />
      </div>
      <p data-testid="value">{value}</p>
      {helloWorld && <p data-testid="hello-world">{helloWorld}</p>}
    </>
  );
};
