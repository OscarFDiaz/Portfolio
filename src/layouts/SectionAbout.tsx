import { useTranslation } from 'react-i18next';
import { AboutParagraph, AboutStack, SectionTitle } from '../components/About';

interface Props {
  className: string;
}

export const SectionAbout = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <section className={`about ${className}`} id="about">
      <SectionTitle title={t('About')} />
      <AboutParagraph />
      <AboutStack />
    </section>
  );
};
