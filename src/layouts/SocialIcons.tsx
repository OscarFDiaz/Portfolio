import { socialIcons } from '../helpers/json/socialIcons';

export const SocialIcons = () => {
  return (
    <>
      <div className="social__container"></div>
      <h2 className="social__h2">
        <span className="social__span">#</span>Social links
      </h2>
      {socialIcons.map((icon) => (
        <picture key={icon.id} style={{ width: '54px', height: '54px' }}>
          <img {...icon.anchor} />
        </picture>
      ))}
    </>
  );
};
