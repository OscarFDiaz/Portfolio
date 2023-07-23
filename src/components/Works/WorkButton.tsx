import { useTranslation } from 'react-i18next';
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
  More = 'View_More',
  Github = 'Github',
  Live = 'Live',
}

export const WorkButton = ({ work, button, className }: Props) => {
  const { t } = useTranslation();

  return (
    <a
      {...work}
      target="_blank"
      rel="noopener noreferrer"
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`button__anchor ${className ? className : ''}`}
    >
      {/* Title for the button and the icon */}
      {t(button)}
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
