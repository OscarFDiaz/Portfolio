interface Props {
  className?: string;
}

export const Tailwind = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className={'icons__span animate__animated animate__fadeIn animate__faster'}>
        Tailwind
      </span>

      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_501_650)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
          <path
            d="M22.0002 13C17.5502 13 14.7835 15.2167 13.6668 19.6667C15.3335 17.45 17.2835 16.6167 19.5002 17.1667C20.7668 17.4833 21.6835 18.4 22.6835 19.4167C24.3168 21.0833 26.1668 23 30.3335 23C34.7835 23 37.5502 20.7833 38.6668 16.3333C37.0002 18.55 35.0502 19.3833 32.8335 18.8333C31.5668 18.5167 30.6668 17.6 29.6502 16.5833C28.0168 14.9167 26.1668 13 22.0002 13ZM13.6668 23C9.21683 23 6.45016 25.2167 5.3335 29.6667C7.00016 27.45 8.95016 26.6167 11.1668 27.1667C12.4335 27.4833 13.3335 28.4 14.3502 29.4167C15.9835 31.0833 17.8335 33 22.0002 33C26.4502 33 29.2168 30.7833 30.3335 26.3333C28.6668 28.55 26.7168 29.3833 24.5002 28.8333C23.2335 28.5167 22.3335 27.6 21.3168 26.5833C19.6835 24.9167 17.8335 23 13.6668 23Z"
            fill="#C778DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_501_650">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
