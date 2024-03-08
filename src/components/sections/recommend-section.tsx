import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import Button from "../button";
import CarCard from "../car-card";
import { CAR, CTA_Button } from "../../types";

interface Props {
  heading: string;
  cars?: CAR[];
  cta?: CTA_Button;
}
export default function RecommendSection({ heading, cars, cta }: Props) {
  return (
    <div className="bg-blue-100 pt-[190px] pb-[140px] overflow-clip">
      <div className="flex max-w-8xl mx-auto px-[78px] gap-[57px]">
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-[48px] font-medium text-text-main">{heading}</h2>

          <RectangleGroup>
            <Rectangle white width={390} />
            <Rectangle white width={330} />
            <Rectangle white width={360} />
            <Rectangle white width={250} />
          </RectangleGroup>

          <Button white href={cta.link}>
            {cta.text}
          </Button>
        </div>

        <div className="flex gap-8">
          {cars.map((car: CAR) => (
            <CarCard
              img_url={car.image.url}
              name={car.title}
              price={car.monthly_price}
              slug={car._slug}
              key={car._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
