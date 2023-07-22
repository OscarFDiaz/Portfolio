import { Behance, Github, LinkedIn, PlayStore, Twitter } from '../assets/socialIcons';

interface Props {
  className: string;
}

export const SocialIcons = ({ className }: Props) => {
  return (
    <div className={`social__container ${className}`}>
      <h2 className="social__h2">
        <span className="social__span">#</span>Social links
      </h2>
      <div className="social__icons">
        <LinkedIn className="social__svg" />
        <Github className="social__svg" />
        <Twitter className="social__svg" />
        <Behance className="social__svg" />
        <PlayStore className="social__svg" />
      </div>
    </div>
  );
};
