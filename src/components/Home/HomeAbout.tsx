import { useTranslation } from 'react-i18next';

export const HomeAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="home__shortabout">
      <p className="shortabout__paragraph">
        {t('graduated')}
        <b className="paragraph__b">{t('career')}</b> {t('from')} &#10; &#10;
        {t('focus1')}
        <b className="paragraph__b">{t('focus')}</b>
        {t('exp', { spacer: '\n' })} &#10;
      </p>
    </div>
  );
};
