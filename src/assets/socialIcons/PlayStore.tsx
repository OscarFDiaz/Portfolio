import { ArrowExternal } from '../icons/ArrowExternal';

interface Props {
  className?: string;
}

export const PlayStore = ({ className }: Props) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.oscar.diaz"
      rel="noopener noreferrer"
      target="_blank"
      title="Playstore link"
      className="social__anchor"
    >
      <span className="social__svgspan">
        Link to my App
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
        <g clipPath="url(#clip0_28_110)">
          <rect x="1" y="1" width="52" height="52" stroke="#C778DD" strokeWidth="2" />
          <path
            d="M11 11.1479V41.851C11.0002 41.9176 11.0201 41.9827 11.0571 42.0381C11.0942 42.0934 11.1467 42.1366 11.2082 42.1622C11.2697 42.1879 11.3374 42.1947 11.4028 42.182C11.4682 42.1693 11.5283 42.1376 11.5758 42.0909L27.5625 26.5002L11.5758 10.908C11.5283 10.8613 11.4682 10.8296 11.4028 10.8169C11.3374 10.8042 11.2697 10.811 11.2082 10.8367C11.1467 10.8623 11.0942 10.9055 11.0571 10.9608C11.0201 11.0162 11.0002 11.0813 11 11.1479ZM34.2656 20.094L14.2203 9.05023L14.2078 9.0432C13.8625 8.8557 13.5344 9.32289 13.8172 9.59476L29.5305 24.6198L34.2656 20.094ZM13.8188 43.4057C13.5344 43.6776 13.8625 44.1448 14.2094 43.9573L14.2219 43.9502L34.2656 32.9065L29.5305 28.3791L13.8188 43.4057ZM42.3578 24.5471L36.7602 21.4643L31.4969 26.5002L36.7602 31.5338L42.3578 28.4534C43.8805 27.6119 43.8805 25.3885 42.3578 24.5471Z"
            fill="#C778DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_110">
            <rect width="54" height="54" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
