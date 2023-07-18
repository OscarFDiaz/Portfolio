interface Props {
  className?: string;
}

export const Figma = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_313_1232)">
        <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
        <mask
          id="mask0_313_1232"
          maskUnits="userSpaceOnUse"
          x="13"
          y="8"
          width="20"
          height="30"
        >
          <path d="M13.5 8.5H32.4972V37.4898H13.5V8.5Z" fill="white" stroke="white" />
        </mask>
        <g mask="url(#mask0_313_1232)">
          <path
            d="M22.4986 32.9916C22.4986 35.4745 20.4833 37.4898 18.0004 37.4898C15.5174 37.4898 13.502 35.4745 13.502 32.9916C13.502 30.5086 15.5174 28.4932 18.0004 28.4932H22.4986V32.9916Z"
            fill="#C778DD"
            stroke="#282C33"
          />
          <path
            d="M13.502 22.9948C13.502 20.5119 15.5174 18.4966 18.0004 18.4966H22.4986V27.4931H18.0004C15.5174 27.4931 13.502 25.4777 13.502 22.9948Z"
            fill="#C778DD"
            stroke="#282C33"
          />
          <path
            d="M13.5022 12.9983C13.5022 10.5154 15.5177 8.5 18.0006 8.5H22.4989V17.4967H18.0006C15.5177 17.4967 13.5022 15.4812 13.5022 12.9983Z"
            fill="#C778DD"
            stroke="#282C33"
          />
          <path
            d="M23.4986 8.5H27.9968C30.4798 8.5 32.4952 10.5154 32.4952 12.9983C32.4952 15.4812 30.4798 17.4967 27.9968 17.4967H23.4986V8.5Z"
            fill="#C778DD"
            stroke="#282C33"
          />
          <path
            d="M32.4952 22.9948C32.4952 25.4777 30.4798 27.4931 27.9968 27.4931C25.5139 27.4931 23.4986 25.4778 23.4986 22.9948C23.4986 20.5119 25.5139 18.4966 27.9968 18.4966C30.4798 18.4966 32.4952 20.5119 32.4952 22.9948Z"
            fill="#C778DD"
            stroke="#282C33"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_313_1232">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
