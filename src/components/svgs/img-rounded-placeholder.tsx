interface IMGRoundedPlaceholderProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function IMGRoundedPlaceholder({className, width, height}: IMGRoundedPlaceholderProps) {
  return (
    <svg width={width || 80} height={height || 80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#EFF6FF"/>
      <path d="M62.6494 55.903H18.7722C17.8843 55.903 17.4368 54.832 18.0608 54.2003L25.9469 46.2163C27.1004 45.0485 28.9781 45.0245 30.161 46.1624L32.8243 48.7241C34.1466 49.9961 36.2907 49.7937 37.3516 48.2967L45.8942 36.243C47.0936 34.5506 49.6076 34.5571 50.7983 36.2556L63.4682 54.329C63.9328 54.9917 63.4587 55.903 62.6494 55.903Z" fill="#DBEAFE"/>
      <circle cx="22.162" cy="30.8422" r="5.78313" fill="#DBEAFE"/>
    </svg>
  )
}
