import { useTranslation } from 'react-i18next';
import Picture from '../../assets/picture.webp';

export const HomeImgText = () => {
  const { t } = useTranslation();

  return (
    <div className="home__imagetext">
      <picture className="imagetext__picture">
        <img loading="lazy" src={Picture} alt="Portrait of Oscar Diaz " />
      </picture>
      <div className="home__titles">
        <h1 className="titles__title">{t('IAM')}</h1>
        <div className="titles__subtitle">
          <p>#</p>
          <p className="subtitle__subtitles">
            <span className="subtitles__span">Front-end developer</span>
            <span className="subtitles__span">UI Designer</span>
            <span className="subtitles__span">Computer Engineer</span>
            <span className="subtitles__span">Front-end developer</span>
            <span className="subtitles__span">UI Designer</span>
          </p>
        </div>
      </div>
    </div>
  );
};
