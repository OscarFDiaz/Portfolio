import { ArrowExternal } from '../icons/ArrowExternal';
import { useTranslation } from 'react-i18next';
interface Props {
  className?: string;
}

export const Twitter = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <a
      href="https://x.com/OscarOFDA"
      rel="noopener noreferrer"
      target="_blank"
      title="Twitter link"
      className="social__anchor"
    >
      <span className={'social__svgspan animate__animated animate__fadeIn'}>
        {t('toTwitter')}
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
        <g clip-path="url(#clip0_2_312)">
          <g clip-path="url(#clip1_2_312)">
            <rect x="1" y="1" width="52" height="52" stroke="#C778DD" stroke-width="2" />
            <path
              d="M42 42L30.2681 24.5155L30.2881 24.5318L40.8662 12H37.3313L28.7141 22.2L21.8711 12H12.6003L23.5531 28.3241L23.5518 28.3227L12 42H15.5349L25.1152 30.6518L32.7292 42H42ZM20.4704 14.7273L36.9311 39.2727H34.1298L17.6558 14.7273H20.4704Z"
              fill="#C778DD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_312">
            <rect width="54" height="54" fill="white" />
          </clipPath>
          <clipPath id="clip1_2_312">
            <rect width="54" height="54" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
