import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import Button from "../button";
import {CTA_Button} from "../../types";
import CTAButton from "../cta-button";

interface BusinessLandingHeaderProps {
  title: string;
  image_url?: string;
  cta: CTA_Button;
}

export default function BusinessLandingHeader({title, image_url, cta}: BusinessLandingHeaderProps) {
  return (
    <div className="w-full h-[671px] bg-blue-50 relative">
      <div className="max-w-8xl mx-auto pr-[43px]">
        <img src={image_url} alt="tesla" className="h-[474px] absolute top-[50px] left-0" />
        <div className="flex w-full justify-end pt-[130px]">
          <div className="max-w-[535px] flex flex-col items-start gap-8">
            <h1 className="text-[72px] leading-none font-medium">{title}.</h1>

            <RectangleGroup>
              <Rectangle width={390} />
              <Rectangle width={330} />
              <Rectangle width={360} />
            </RectangleGroup>

            <CTAButton cta={cta}>{cta.text}</CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
