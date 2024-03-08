import classNames from "classnames";
import {className} from "postcss-selector-parser";

interface RectangleProps {
  width: number;
  primary?: boolean;
  white?: boolean;
  light?: boolean;
  dark?: boolean;
  className?: string;
  height?: number;
}
export default function Rectangle({width, primary, white, className, height, light, dark}: RectangleProps) {
  if (primary && white) throw new Error('Rectangle cannot be both primary and white');

  if (!primary && !white && !light && !dark) primary = true;

  const classes = classNames(
    'flex rounded-[3px]',
    height ? `h-${height}` : 'h-4',
    primary && 'bg-text-shape',
    white && 'bg-white',
    light && 'bg-light-shape',
    dark && 'bg-dark-shape',
    className
  )

  return (
    <div className={classes} style={{width: width, height: height}}></div>
  )
}
