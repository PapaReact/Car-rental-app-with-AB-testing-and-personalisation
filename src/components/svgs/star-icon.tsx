interface StarIconProps {
  inheritColor?: boolean;
  className?: string;
}

export default function StarIcon({className}: StarIconProps) {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_119_5612)">
        <path fill={"currentColor"}  d="M4.81854 19.3039C4.30361 19.5514 3.71933 19.1176 3.82338 18.5639L4.93059 12.6514L0.230937 8.45639C-0.207946 8.06389 0.0201667 7.34639 0.608457 7.26889L7.14235 6.39889L10.0558 0.990137C10.3186 0.502637 11.0296 0.502637 11.2924 0.990137L14.2058 6.39889L20.7397 7.26889C21.328 7.34639 21.5561 8.06389 21.1159 8.45639L16.4176 12.6514L17.5248 18.5639C17.6289 19.1176 17.0446 19.5514 16.5296 19.3039L10.6721 16.4839L4.8172 19.3039H4.81854Z" />
      </g>
      <defs>
        <clipPath id="clip0_119_5612">
          <rect width="21.3439" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  )
}
