import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import Button from "../button";
import CarBox from "../car-box";
import {CTA_Button} from "../../types";

interface PrivateLandingHeaderProps {
  title: string;
  image_url?: string;
  cta: CTA_Button;
}

export default function PrivateLandingHeader({title, image_url, cta}: PrivateLandingHeaderProps) {
  return (
    <div className="w-full h-[701px] bg-blue-50 relative">
      <div className="max-w-8xl mx-auto pr-[43px]">
        <div className="flex w-full justify-center pt-[100px]">
          <div className="max-w-[535px] flex flex-col justify-center items-center gap-8">
            <h1 className="text-[72px] leading-none font-medium text-center">{title}</h1>

            <RectangleGroup align="center">
              <Rectangle width={424} />
              <Rectangle width={358} />
              <Rectangle width={392} />
            </RectangleGroup>

            <Button href={cta.link}>{cta.text}</Button>
          </div>

          <div className="absolute -bottom-[218px]"><CarBox url={image_url}/></div>
        </div>
      </div>
    </div>
  )
}
