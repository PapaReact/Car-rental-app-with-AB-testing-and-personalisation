import StarIcon from "../svgs/star-icon";
import Button from "../button";

interface CarDetailSectionProps {
  title: string;
  price: number;
  img_url: string;
}

export default function CarDetailSection({title, price, img_url}: CarDetailSectionProps) {
  return (
    <section>
      <div className="px-[150px] py-[88px] max-w-8xl mx-auto">
        <div className="grid grid-cols-2 gap-[30px] items-center">
          <div className="h-[555px] w-[555px] flex items-center">
            <img src={img_url} alt="Car image"/>
          </div>

          <div>
            <h1 className="text-[28px] font-bold text-text-main mb-1">{title}</h1>
            <div className="flex gap-1 text-blue-500 mb-10">
              <StarIcon className=""/>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon className="text-blue-100" />
            </div>
            <p className="text-[38px] text-text-main font-bold mb-[18px]">€{price} <span className="text-[16px] font-medium"><strong>/</strong> month</span></p>
            <p className="text-text-main mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat incididunt ut labore et dolore.</p>
            <Button>Request a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
