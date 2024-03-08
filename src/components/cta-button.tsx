import Button from "./button";
import React from "react";
import { CTA_Button } from "../types";

interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  white?: boolean;
  onClick?: () => void;
  cta: CTA_Button;
}

export default function CTAButton({
  children,
  cta,
  primary,
  white,
  onClick,
}: CTAButtonProps) {
  const href = cta.internal_link[0]
    ? `/${cta.internal_link[0]._slug}`
    : cta.link;

  if (!href) return <></>;

  return (
    <Button href={href} primary={primary} white={white} onClick={onClick}>
      {children}
    </Button>
  );
}
