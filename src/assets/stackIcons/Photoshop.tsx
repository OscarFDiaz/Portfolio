interface Props {
  className?: string;
}

export const Photoshop = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className="icons__span">Photoshop</span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_313_1223)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#C778DD" />
          <path
            d="M10 31.4018V13.299C10 13.1758 10.0519 13.1056 10.1732 13.1056C10.4674 13.1056 10.7445 13.1056 11.1426 13.0879C11.5581 13.0703 11.9909 13.0703 12.4584 13.0528C12.9258 13.0351 13.4278 13.0351 13.9645 13.0175C14.5011 13 15.0204 13 15.5398 13C16.9594 13 18.1366 13.1758 19.1062 13.5453C19.9752 13.8452 20.7676 14.338 21.4259 14.9879C21.9837 15.5567 22.4148 16.2406 22.6897 16.9935C22.9494 17.7324 23.0879 18.4889 23.0879 19.2806C23.0879 20.7935 22.7417 22.0425 22.0491 23.0278C21.3566 24.0129 20.3872 24.7518 19.262 25.174C18.0846 25.6139 16.7862 25.7722 15.3668 25.7722C14.9513 25.7722 14.6742 25.7722 14.5011 25.7546C14.3281 25.7369 14.0856 25.7369 13.7568 25.7369V31.3841C13.774 31.5074 13.6875 31.6129 13.5662 31.6306H10.2077C10.0693 31.6306 10 31.5601 10 31.4018ZM13.774 16.5008V22.4119C14.0164 22.4296 14.2414 22.4472 14.4491 22.4472H15.3668C16.0419 22.4472 16.7171 22.3417 17.3575 22.1306C17.9116 21.9722 18.3963 21.6379 18.7772 21.198C19.1407 20.7583 19.3139 20.1601 19.3139 19.3861C19.3302 18.8363 19.192 18.2932 18.9156 17.8203C18.6214 17.3629 18.2059 17.0111 17.7039 16.8175C17.0633 16.5536 16.3708 16.448 15.661 16.4657C15.211 16.4657 14.8127 16.4657 14.4839 16.4833C14.1375 16.4657 13.8952 16.4833 13.774 16.5008ZM33.8905 21.3389C33.3712 21.0574 32.8173 20.8639 32.2286 20.7407C31.588 20.6 30.9476 20.5119 30.2896 20.5119C29.9434 20.4944 29.5799 20.5472 29.2509 20.6351C29.0259 20.6879 28.8354 20.8111 28.7143 20.9869C28.6276 21.1278 28.5757 21.3036 28.5757 21.4619C28.5757 21.6203 28.645 21.7786 28.7489 21.9194C28.9047 22.1129 29.1124 22.2712 29.3375 22.3944C29.7389 22.6057 30.149 22.7994 30.5666 22.975C31.5015 23.2917 32.4018 23.7314 33.2327 24.2591C33.804 24.6286 34.2715 25.1212 34.6003 25.7194C34.8773 26.2824 35.0158 26.898 34.9986 27.5314C35.0158 28.3583 34.7735 29.1851 34.3234 29.8712C33.8405 30.5735 33.1667 31.1176 32.3844 31.4369C31.5361 31.8064 30.4973 32 29.2509 32C28.4546 32 27.6756 31.9296 26.8966 31.7712C26.286 31.6641 25.6922 31.4748 25.1307 31.2083C25.0095 31.1379 24.923 31.0147 24.9402 30.874V27.8129C24.9402 27.7601 24.9576 27.6897 25.0095 27.6546C25.0614 27.6194 25.1134 27.6369 25.1653 27.6722C25.8405 28.0768 26.5502 28.3583 27.312 28.5341C27.9698 28.7101 28.6624 28.798 29.3548 28.798C30.0127 28.798 30.4801 28.7101 30.7918 28.5518C31.0686 28.4286 31.2592 28.1296 31.2592 27.8129C31.2592 27.5667 31.1206 27.3379 30.8437 27.1091C30.5666 26.8806 29.9953 26.6167 29.147 26.2824C28.2768 25.9707 27.4504 25.5449 26.6888 25.0157C26.1463 24.6228 25.6968 24.1119 25.373 23.5203C25.096 22.9574 24.9576 22.3417 24.9749 21.7258C24.9749 20.9694 25.1827 20.248 25.5634 19.5972C25.9963 18.8935 26.6369 18.3306 27.3812 17.9786C28.195 17.5564 29.2163 17.3629 30.4454 17.3629C31.1553 17.3629 31.8824 17.4157 32.5921 17.5212C33.1115 17.5917 33.6135 17.7324 34.0809 17.9258C34.1502 17.9435 34.2195 18.0139 34.2541 18.0841C34.2715 18.1546 34.2887 18.225 34.2887 18.2953V21.1629C34.2887 21.2333 34.2541 21.3036 34.2022 21.3389C34.0464 21.374 33.9599 21.374 33.8905 21.3389Z"
            fill="#C778DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_313_1223">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};