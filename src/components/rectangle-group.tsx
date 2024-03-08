import React from "react";
import classNames from "classnames";

interface RectangleGroupProps {
  align?: 'left' | 'center' ;
  children: React.ReactNode;
  className?: string;
}
export default function RectangleGroup({children, align, className}: RectangleGroupProps) {
  const classes = classNames(
    'flex flex-col gap-[10px]',
    align === 'left' && 'justify-start',
    align === 'center' && 'justify-center items-center',
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
