interface Props {
  className?: string;
}

export const Js = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className="icons__span">JavaScript</span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_313_1289)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
          <path
            d="M9.00015 28.5108L12.0184 26.63C12.6007 27.693 13.1304 28.5925 14.401 28.5925C15.6189 28.5925 16.3868 28.102 16.3868 26.194V13.2183H20.0934V26.2479C20.0934 30.2005 17.8431 31.9997 14.5599 31.9997C11.5948 31.9997 9.87372 30.4186 9 28.5104M22.1066 28.1018L25.1245 26.3028C25.919 27.6386 26.9516 28.6199 28.7782 28.6199C30.3142 28.6199 31.2934 27.8293 31.2934 26.7389C31.2934 25.4305 30.2873 24.9669 28.5929 24.2039L27.6665 23.7948C24.9923 22.6229 23.2184 21.1508 23.2184 18.0432C23.2184 15.1809 25.3365 13 28.6461 13C31.0024 13 32.6968 13.8452 33.9146 16.0532L31.0287 17.9613C30.3932 16.7892 29.7051 16.3259 28.6461 16.3259C27.5605 16.3259 26.8721 17.0346 26.8721 17.9613C26.8721 19.1062 27.5605 19.5697 29.1489 20.2786L30.0755 20.6874C33.2261 22.0778 35 23.495 35 26.6843C35 30.1193 32.379 32 28.8577 32C25.416 32 23.192 30.3099 22.1066 28.1018Z"
            fill="#C778DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_313_1289">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};