import { ArrowExternal } from '../../assets/icons/ArrowExternal';
import { useTranslation } from 'react-i18next';
export const AboutParagraph = () => {
  const { t } = useTranslation();
  return (
    <p className="about__paragraph">
      {t('about_p1', { spacer: '\n' })}
      <a
        href="https://wispok.com/"
        title="Wispok website"
        target="_blank"
        rel="noopener noreferrer"
        className="about__anchor"
      >
        Wispok <ArrowExternal />
      </a>
      {t('about_p1_after', { spacer: '\n' })}
      <a
        href="https://play.google.com/store/apps/details?id=app.gasomx"
        title="Playstore link to GasoMX"
        target="_blank"
        rel="noopener noreferrer"
        className="about__anchor"
      >
        GasoMX <ArrowExternal />
      </a>
      {t('about_and')}
      <a
        href="https://play.google.com/store/apps/details?id=com.oscar.diaz"
        title="Playstore link to Flynanz"
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
