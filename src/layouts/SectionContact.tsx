import { useTranslation } from 'react-i18next';
import { SectionSubtitle, SectionTitle } from '../components';
import { ContactButton } from '../components/Contact/ContactButton';

interface Props {
  className: string;
}

export const SectionContact = ({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <section className={`contact ${className}`} id="contact">
      <SectionTitle title={t('Contact')} />
      <SectionSubtitle title={t('loveTo')} />
      <ContactButton />
    </section>
  );
};
