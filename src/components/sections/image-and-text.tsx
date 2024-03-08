"use client";

import IMGPlaceholder from "../svgs/i-m-g-placeholder";
import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import { CTA_Button, Context } from "../../types";
import CTAButton from "../cta-button";

interface ImageAndTextProps {
  left?: boolean;
  right?: boolean;
  title: string;
  cta?: CTA_Button;
  _context: Context | null;
}

export default function ImageAndText({
  left,
  right,
  title,
  cta,
  _context,
}: ImageAndTextProps) {
  if (left && right)
    throw new Error("ImageAndText cannot be both left and right");

  if (!left && !right) left = true;

  const image = (
    <div className="w-full h-full">
      <IMGPlaceholder />
    </div>
  );

  const handleClick = () => {
    console.log(
      "---- Tracking code goes here... ----",
      _context?.group_id,
      _context?.variant_id
    );
  };

  return (
    <div className="bg-white w-full mx-auto max-w-8xl">
      <div className="grid grid-cols-2">
        {right && image}

        <div className="pt-[95px] pl-[110px] flex flex-col items-start gap-y-8">
          <h2 className="text-[48px] font-medium text-text-main">{title}</h2>

          <RectangleGroup>
            <Rectangle width={390} />
            <Rectangle width={330} />
            <Rectangle width={360} />
            <Rectangle width={250} />
          </RectangleGroup>

          <CTAButton cta={cta} onClick={handleClick}>
            {cta.text}
          </CTAButton>
        </div>

        {left && image}
      </div>
    </div>
  );
}
