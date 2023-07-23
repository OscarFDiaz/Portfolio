import { ArrowDown } from '../../assets/icons/ArrowDown';
import MyPDF from '../../assets/cv.pdf';
import { useTranslation } from 'react-i18next';

interface Props {
  className: string;
}

export const HomeButton = ({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <a
      className={`home__anchor ${className}`}
      href={MyPDF}
      rel="noopener noreferrer"
      target="_blank"
      title={t('HomeButton')}
    >
      {t('HomeButton')}
      <ArrowDown />
    </a>
  );
};
