import Button from "../button";
import CarCard from "../car-card";
import {CAR, CTA_Button} from "../../types";

interface MostPopularProps {
  title: string;
  cta: CTA_Button;
  cars: CAR[];
}

export default function MostPopular({title, cta, cars}: MostPopularProps) {
  return (
    <section className="bg-blue-100 overflow-clip">
      <div className="pt-[120px] pb-[140px] max-w-8xl mx-auto">
        <div className="flex justify-between mb-[72px] px-[78px]">
          <h2 className="text-[48px] text-text-main font-medium leading-none">{title}</h2>
          <Button white href={cta.link}>{cta.text}</Button>
        </div>
        <div className="flex items-start gap-8 pl-[78px]">
          {cars.map((car) => <CarCard img_url={car.image.url} slug={car._slug} name={car.title} price={car.monthly_price} key={car._id} />)}
        </div>
      </div>
    </section>
  )
}
