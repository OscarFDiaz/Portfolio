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
        <span
          className="footer__span"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <kbd>↑</kbd>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <kbd>↓</kbd>
          <kbd>⟵</kbd>
          <kbd>⟶</kbd>
          <kbd>⟵</kbd>
          <kbd>⟶</kbd>
          <kbd>B</kbd>
          <kbd>A</kbd>
        </span>
      </p>
    </div>
  );
};
