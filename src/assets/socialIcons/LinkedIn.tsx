import { useTranslation } from 'react-i18next';
import { ArrowExternal } from '../icons/ArrowExternal';

interface Props {
  className?: string;
}

export const LinkedIn = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <a
      href="https://www.linkedin.com/in/oscarfcodiaz/"
      rel="noopener noreferrer"
      target="_blank"
      title="LinkedIn link"
      className="social__anchor"
    >
      <span className="social__svgspan">
        {t('toLinkedin')}
        <ArrowExternal />
      </span>
      <svg
        className={className}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_260)">
          <g clipPath="url(#clip1_2_260)">
            <rect x="1" y="1" width="52" height="52" stroke="#C778DD" strokeWidth={2} />
            <path
              d="M17.06 20.12C18.76 20.12 20.12 18.7387 20.12 17.06C20.12 15.3813 18.7387 14 17.06 14C15.3813 14 14 15.3813 14 17.06C14 18.7387 15.3813 20.12 17.06 20.12ZM23.0312 22.4362V39.4788H28.3012V31.0637C28.3012 28.8325 28.7263 26.6863 31.4675 26.6863C34.2087 26.6863 34.2087 29.2362 34.2087 31.1912V39.4788H39.5V30.1287C39.5 25.5387 38.5225 22.0113 33.1675 22.0113C30.5963 22.0113 28.875 23.4138 28.1737 24.7525H28.11V22.415H23.0525L23.0312 22.4362ZM14.425 22.4362H19.7162V39.4788H14.425V22.4362Z"
              fill="#C778DD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_260">
            <rect width="54" height="54" fill="white" />
          </clipPath>
          <clipPath id="clip1_2_260">
            <rect width="54" height="54" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
