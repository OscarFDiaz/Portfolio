import { useTranslation } from 'react-i18next';

interface Props {
  className: string;
}

export const Footer = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={`footer ${className}`}>
      <p className="footer__p">
        <span className="footer__span">#</span>
        {t('madeWith')}
      </p>
      <p className="footer__p footer__p--litle">
        <span className="footer__span">#</span>
        {t('konami')}
      </p>
    </div>
  );
};
