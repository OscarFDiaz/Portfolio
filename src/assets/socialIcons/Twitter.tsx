import { ArrowExternal } from '../icons/ArrowExternal';

interface Props {
  className?: string;
}

export const Twitter = ({ className }: Props) => {
  return (
    <a
      href="https://twitter.com/OscarOFDA"
      rel="noopener noreferrer"
      target="_blank"
      title="Twitter link"
      className="social__anchor"
    >
      <span className="social__svgspan">
        Link to my Twitter
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
        <g clipPath="url(#clip0_2_312)">
          <g clipPath="url(#clip1_2_312)">
            <rect x="1" y="1" width="52" height="52" stroke="#C778DD" strokeWidth="2" />
            <path
              d="M21.4237 39.3763C32.745 39.3763 38.9381 29.9957 38.9381 21.875C38.9381 21.6125 38.9381 21.3463 38.9269 21.0838C40.1326 20.211 41.1732 19.1303 42 17.8925C40.8737 18.3891 39.6802 18.7164 38.4581 18.8638C39.7454 18.0944 40.7095 16.8837 41.1712 15.4569C39.9619 16.1734 38.6382 16.6764 37.2581 16.9438C36.3303 15.9557 35.1026 15.3011 33.7652 15.0815C32.4277 14.8618 31.0551 15.0893 29.86 15.7287C28.6649 16.3681 27.714 17.3837 27.1546 18.6183C26.5952 19.8528 26.4585 21.2374 26.7656 22.5575C24.3183 22.4348 21.924 21.7991 19.7382 20.6914C17.5524 19.5838 15.6238 18.0291 14.0775 16.1282C13.2925 17.484 13.053 19.0877 13.4075 20.6137C13.762 22.1397 14.684 23.4735 15.9862 24.3444C15.0104 24.3113 14.056 24.0492 13.2 23.5794V23.6638C13.2017 25.0841 13.6937 26.4602 14.5929 27.5596C15.4921 28.659 16.7433 29.4142 18.135 29.6975C17.6067 29.8431 17.0611 29.9156 16.5131 29.9132C16.1268 29.9143 15.7413 29.8786 15.3619 29.8063C15.7552 31.0289 16.5211 32.0979 17.5523 32.8634C18.5835 33.629 19.8284 34.0529 21.1125 34.0757C18.931 35.789 16.2364 36.7183 13.4625 36.7138C12.9737 36.7159 12.4853 36.6877 12 36.6294C14.8153 38.4243 18.0849 39.3773 21.4237 39.3763Z"
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
