interface Props {
  className?: string;
}

export const Sass = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_488_680)">
        <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
        <path
          d="M21.4488 30.1684C21.4315 30.2034 21.4141 30.2314 21.4488 30.1684ZM35.8496 25.0938C34.6866 25.0938 33.5397 25.3621 32.4968 25.8812C32.1558 25.1871 31.8032 24.5805 31.7454 24.1255C31.676 23.5947 31.6008 23.2798 31.6818 22.6498C31.7627 22.0199 32.1269 21.1274 32.1211 21.0633C32.1153 20.9991 32.0402 20.6783 31.2945 20.6725C30.5488 20.6666 29.9071 20.8183 29.8319 21.0166C29.7 21.3789 29.5975 21.7515 29.5256 22.1307C29.3926 22.8131 28.0353 25.2513 27.2665 26.5228C27.0121 26.027 26.7982 25.5896 26.752 25.2396C26.6826 24.7088 26.6075 24.3938 26.6884 23.7639C26.7693 23.1339 27.1335 22.2415 27.1277 22.1773C27.122 22.1132 27.0468 21.7924 26.3023 21.7865C25.5577 21.7807 24.9149 21.9324 24.8398 22.1307C24.7646 22.329 24.6837 22.7956 24.5334 23.2448C24.3831 23.6939 22.5737 27.7536 22.1009 28.8093C21.8581 29.3459 21.65 29.7776 21.4997 30.0692C21.4766 30.1159 21.4592 30.145 21.4476 30.1684C21.465 30.1392 21.4766 30.11 21.4766 30.1217C21.3494 30.3725 21.2742 30.5125 21.2742 30.5125V30.5183C21.176 30.705 21.0661 30.8741 21.0141 30.8741C20.9794 30.8741 20.9043 30.3842 21.0314 29.7134C21.3031 28.3018 21.9448 26.1087 21.939 26.0329C21.9332 25.992 22.0604 25.6129 21.517 25.4087C20.991 25.2163 20.8002 25.5371 20.754 25.5371C20.7077 25.5371 20.673 25.6537 20.673 25.6537C20.673 25.6537 21.2569 23.1806 19.5516 23.1806C18.4879 23.1806 17.0081 24.3588 16.2809 25.4262C15.8242 25.6771 14.8357 26.2195 13.7952 26.797L12.5986 27.4619C12.5697 27.4328 12.5466 27.4036 12.5177 27.3744C10.4482 25.1463 6.62829 23.5714 6.79015 20.5791C6.84796 19.4884 7.2237 16.6245 14.1362 13.1481C19.8013 10.3016 24.3299 11.0832 25.1103 12.8214C26.2317 15.3004 22.6882 19.9142 16.8058 20.5791C14.5629 20.83 13.3848 19.955 13.0899 19.6284C12.7836 19.2842 12.7373 19.2667 12.6217 19.3309C12.4309 19.4359 12.5523 19.7392 12.6217 19.92C12.7951 20.3808 13.5177 21.1974 14.749 21.6057C15.83 21.9615 18.459 22.1598 21.6373 20.9174C25.2086 19.5292 27.9891 15.662 27.1728 12.4248C26.3427 9.13507 20.9366 8.056 15.8254 9.88751C12.7789 10.9783 9.48511 12.6931 7.11618 14.9271C4.30099 17.5869 3.85125 19.9025 4.03624 20.8708C4.69523 24.3063 9.38799 26.5462 11.2656 28.2027L11.0054 28.3485C10.0632 28.821 6.48609 30.7108 5.59008 32.7057C4.57846 34.9688 5.75772 36.5903 6.53118 36.812C8.9475 37.4886 11.4205 36.2695 12.75 34.2689C14.0796 32.2682 13.9177 29.6551 13.305 28.4652C13.2992 28.4477 13.2876 28.436 13.2819 28.4185C13.9755 28.0039 14.675 27.5995 15.3802 27.2053C15.149 27.8352 14.9814 28.5935 14.8947 29.6901C14.7906 30.9733 15.3167 32.6357 15.9988 33.2889C16.2994 33.5747 16.6624 33.5806 16.889 33.5806C17.6867 33.5806 18.0451 32.9156 18.444 32.1224C18.9354 31.1541 19.3689 30.0284 19.3689 30.0284C19.3689 30.0284 18.8255 33.0731 20.3112 33.0731C20.8546 33.0731 21.3979 32.3673 21.6407 32.0057V32.0115C21.6407 32.0115 21.6523 31.9882 21.6812 31.9416C21.739 31.8541 21.7679 31.8016 21.7679 31.8016V31.7841C21.9876 31.4049 22.4674 30.5358 23.1899 29.1009C24.1264 27.2461 25.0213 24.9305 25.0213 24.9305C25.108 25.4391 25.2282 25.9419 25.3797 26.4353C25.5415 26.9895 25.8826 27.5961 26.1543 28.1852C25.9346 28.4885 25.8017 28.6635 25.8017 28.6635C25.8017 28.6682 25.804 28.6716 25.8074 28.6751C25.634 28.9085 25.4375 29.1593 25.2352 29.4043C24.4964 30.2909 23.6166 31.3058 23.5009 31.5974C23.3622 31.9416 23.3969 32.1982 23.6628 32.3965C23.8593 32.5482 24.2062 32.5715 24.5704 32.5423C25.2351 32.4957 25.7034 32.3324 25.9288 32.2274C26.3447 32.077 26.7377 31.8689 27.0965 31.6091C27.8191 31.0725 28.2584 30.3025 28.218 29.2876C28.1949 28.7276 28.0157 28.1677 27.796 27.6427C27.8596 27.5494 27.9289 27.4502 27.9925 27.3511C28.7448 26.2185 29.4226 25.0374 30.0216 23.8152C30.1083 24.3238 30.2273 24.8266 30.38 25.3201C30.5187 25.7926 30.7904 26.3117 31.039 26.8191C29.9637 27.6999 29.299 28.7206 29.0689 29.3914C28.6411 30.6338 28.9764 31.1938 29.6065 31.3221C29.8898 31.3804 30.2944 31.2463 30.595 31.1179C31.0413 30.9675 31.4621 30.7493 31.8425 30.4705C32.5651 29.9339 33.2645 29.1814 33.2171 28.1607C33.1998 27.6999 33.0726 27.2391 32.905 26.7958C33.8125 26.4108 34.9918 26.2009 36.4948 26.3758C39.7134 26.755 40.3435 28.7848 40.2221 29.6306C40.1007 30.4763 39.4244 30.9488 39.199 31.0888C38.9735 31.2288 38.9041 31.2813 38.9215 31.3863C38.9504 31.5379 39.0544 31.5321 39.2452 31.4971C39.5111 31.4504 40.9332 30.8088 40.9968 29.2398C41.0892 27.2566 39.199 25.0751 35.8519 25.0926L35.8496 25.0938ZM11.0401 33.5339C9.97646 34.7063 8.4862 35.1496 7.84455 34.7763C7.15665 34.3727 7.42834 32.6473 8.7394 31.3979C9.53713 30.6397 10.5661 29.9397 11.2482 29.5081C11.4043 29.4148 11.6297 29.2748 11.9072 29.1056C11.9298 29.091 11.9529 29.0774 11.9766 29.0648C12.0286 29.0298 12.0864 29.0006 12.1442 28.9656C12.6229 30.7388 12.1616 32.3032 11.0401 33.5339ZM18.807 28.2027C18.4371 29.1184 17.6578 31.4516 17.1827 31.3291C16.778 31.2241 16.5294 29.4451 17.1017 27.6952C17.3908 26.8145 18.0035 25.7646 18.3677 25.3563C18.9516 24.6971 19.5932 24.4872 19.7435 24.7496C19.9458 25.0938 19.0383 27.6311 18.807 28.2027ZM25.2236 31.2941C25.0675 31.3758 24.923 31.4283 24.8536 31.3874C24.8016 31.3583 24.9172 31.2474 24.9172 31.2474C24.9172 31.2474 25.7207 30.3783 26.0387 29.9817C26.2236 29.7484 26.4375 29.4743 26.6688 29.1709C26.6688 29.2001 26.6745 29.2293 26.6745 29.2643C26.6676 30.3084 25.6745 31.0141 25.2236 31.2941ZM30.1719 30.1567C30.0562 30.075 30.0736 29.8009 30.4609 28.9493C30.6112 28.6168 30.958 28.0569 31.5592 27.5202C31.6274 27.7232 31.6644 27.9355 31.669 28.1502C31.6633 29.4626 30.7326 29.9525 30.1719 30.1567Z"
          fill="#C778DD"
        />
      </g>
      <defs>
        <clipPath id="clip0_488_680">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
