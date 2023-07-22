import { ArrowExternal, BehanceSmall, GithubSmall } from '../../assets/icons';

interface Props {
  work: {
    href: string;
    title: string;
  };
  button: string;
  className?: string;
}
enum buttonType {
  Behance = 'Behance',
  More = 'View More',
  Github = 'Github',
  Live = 'Live',
}

export const WorkButton = ({ work, button, className }: Props) => {
  return (
    <a
      {...work}
      target="_blank"
      rel="noopener noreferrer"
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`button__anchor ${className ? className : ''}`}
    >
      {/* Title for the button and the icon */}
      {button}
      {button === buttonType.Live ? (
        <ArrowExternal />
      ) : button === buttonType.Github ? (
        <GithubSmall />
      ) : button === buttonType.Behance ? (
        <BehanceSmall />
      ) : (
        <BehanceSmall />
      )}
    </a>
  );
};
