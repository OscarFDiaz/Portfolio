import { ArrowExternal } from '../../assets/icons/ArrowExternal';
import { useTranslation } from 'react-i18next';
export const AboutParagraph = () => {
  const { t } = useTranslation();
  return (
    <p className="about__paragraph">
      {t('about_p1', { spacer: '\n' })}
      <a
        href="https://play.google.com/store/apps/details?id=com.oscar.diaz"
        title="Playstore link to my app"
        target="_blank"
        rel="noopener noreferrer"
        className="about__anchor"
      >
        Flynanz <ArrowExternal />
      </a>
      {t('about_p2', { spacer: '\n' })}

      <b className="about__b">{t('about_contact')}</b>
    </p>
  );
};
