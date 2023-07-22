interface Props {
  className?: string;
}

export const Bootstrap = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className="icons__span">Bootstrap</span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_313_1257)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
          <path
            d="M23.1093 32C27.409 32 30 29.9723 30 26.6279C30 24.0998 28.1514 22.2697 25.4062 21.9798V21.8746C27.423 21.5586 29.0056 19.7547 29.0056 17.7402C29.0056 14.8698 26.6528 13 23.0673 13H15V32H23.1093ZM18.1372 15.4095H22.311C24.5799 15.4095 25.8684 16.384 25.8684 18.1484C25.8684 20.0312 24.3698 21.0845 21.6528 21.0845H18.1372V15.4095ZM18.1372 29.5905V23.3362H22.2829C25.2522 23.3362 26.7928 24.3895 26.7928 26.4436C26.7928 28.4976 25.2942 29.5905 22.465 29.5905H18.1372Z"
            fill="#C778DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_313_1257">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
