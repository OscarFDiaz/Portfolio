interface Props {
  className?: string;
}

export const Css = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_313_1278)">
        <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
        <path
          d="M13.6464 19.5058L13.968 23.2142H22V19.5058H13.6464ZM21.9999 12H13L13.3263 15.7084H21.9999V12ZM21.9999 32.9952V29.137L21.9842 29.1413L17.9869 28.0261L17.7314 25.0684H14.1284L14.6312 30.8912L21.9834 33L21.9999 32.9952Z"
          fill="#C778DD"
        />
        <path
          d="M26.4241 23.2152L26.0071 28.0251L22 29.1416V33L29.3655 30.8929L30.2637 20.5025L30.3513 19.5065L31 12H21.9999V15.7084L27.0626 15.7087L26.7357 19.5065L22 19.5058V23.2142L26.4241 23.2152Z"
          fill="#C778DD"
        />
      </g>
      <defs>
        <clipPath id="clip0_313_1278">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
