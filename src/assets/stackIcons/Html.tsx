interface Props {
  className?: string;
}

export const Html = ({ className }: Props) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={className}>
      <span className="icons__span">HTML</span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_313_1269)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
          <path
            d="M14 12L14.9686 23.2139H27.4235L27.0056 28.0236L22.9954 29.1425L18.9927 28.0253L18.7251 24.9369H15.1182L15.6341 30.8903L22.9946 33L30.3645 30.8903L31.3526 19.5061H18.2552L17.9264 15.7086H31.6781L32 12H14Z"
            fill="#C778DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_313_1269">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
