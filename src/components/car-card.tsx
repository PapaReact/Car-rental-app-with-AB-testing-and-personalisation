import HeartIcon from "./svgs/heart-icon";
import Button from "./button";

interface CarCardProps {
  img_url: string;
  name?: string;
  price?: string;
  slug?: string;
}

export default function CarCard({img_url, name, price, slug}: CarCardProps) {

  const handleClick = () => {

  }

  return (
    <div className="bg-white h-[388px] p-6 w-[304px] flex flex-col justify-between rounded-[10px]" style={{flexBasis: "304px",
      flexGrow: "0",
      flexShrink: "0"}}>
      <div className="flex w-full justify-between">
        <span className="font-medium text-text-dark text-lg">{name}</span>
        <span className="text-blue-50 hover:text-blue-100"><HeartIcon/></span>
      </div>

      <img src={img_url} alt="Car" className="w-full"/>

      <div className="flex justify-around items-center">
        <p className="text-[18px] text-text-main">€{price}/<span className="text-[12px]">month</span></p>
        <Button href={`/catalog/${slug}`}>VIEW</Button>
      </div>
    </div>
  )
}
