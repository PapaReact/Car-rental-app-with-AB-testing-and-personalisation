import classNames from "classnames";

interface NumberCircleProps {
  number: number;
  className?: string;
}

export default function NumberCircle({number, className}: NumberCircleProps) {
  const classes = classNames(
    "bg-blue-50 z-10 w-[60px] h-[60px] flex justify-center items-center rounded-full",
    className
  )

  return (
    <div className={classes}>
      <span className="text-text-shape text-[18px] font-black leading-normal">{number}</span>
    </div>
  )
}
