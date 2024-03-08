import React from "react";
import classNames from "classnames";
import Link from "next/link";

interface ButtonProps {
  primary?: boolean;
  white?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
}

export default function Button({primary, white, onClick, children, href}: ButtonProps) {
  if (primary && white) throw new Error('Button cannot be both primary and white');

  if (!primary && !white) primary = true;

  const classes = classNames(
'px-5 py-[15px] text-sm uppercase rounded-full font-bold line-height-[1.5]',
    primary && 'bg-blue-500 text-white hover:bg-blue-600',
    white && 'bg-white text-text-main hover:bg-gray-100',
  )

  if (href) {
    return (
      <Link href={href}>
        <button className={classes} onClick={onClick}>
          {children}
        </button>
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
