interface IMGPlaceholderProps {
  className?: string;
  width?: number;
  height?: number;
}
export default function IMGPlaceholder({className, width, height}: IMGPlaceholderProps) {
  return (
    <svg style={{width, height}} className={className} viewBox="0 0 720 542" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect  width="720" height="542" fill="#EFF6FF"/>
      <path d="M556.251 400H165.152C162.492 400 161.148 396.795 163.012 394.898L248.695 307.668C252.545 303.749 258.834 303.669 262.782 307.487L308.523 351.731C312.934 355.998 320.113 355.321 323.649 350.304L417.838 216.661C421.834 210.991 430.249 211.013 434.216 216.703L558.712 395.284C560.099 397.273 558.676 400 556.251 400Z" fill="#DBEAFE"/>
      <circle cx="208" cy="190" r="50" fill="#DBEAFE"/>
    </svg>
  )
}
