import Picture from '../assets/picture.webp';

export const HomeImgText = () => {
  return (
    <div className="section__imagetext">
      <picture className="imagetext__picture">
        <img loading="lazy" src={Picture} alt="Portrait of Oscar Diaz " />
      </picture>
      <div className="section__titles">
        <h1 className="titles__title">I am Oscar Diaz</h1>
        <div className="titles__subtitle">
          <p>#</p>
          <p className="subtitle__subtitles">
            <span className="subtitles__span">Front-end developer</span>
            <span className="subtitles__span">UI Designer</span>
          </p>
        </div>
      </div>
    </div>
  );
};
