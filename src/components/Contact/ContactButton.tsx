import { useTranslation } from 'react-i18next';
import { EmailSend } from '../../assets/icons/EmailSend';

interface Props {
  className?: string;
}

export const ContactButton = ({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <a
      className={`contact__anchor ${className ? className : ''}`}
      href={'mailto:oscarfco.da@gmail.com'}
      rel="noopener noreferrer"
      target="_blank"
      title="Send email"
    >
      {t('sendMessage')}
      <EmailSend />
    </a>
  );
};
