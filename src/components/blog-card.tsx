import IMGPlaceholder from "./svgs/i-m-g-placeholder";
import Rectangle from "./rectangle";
import RectangleGroup from "./rectangle-group";

export default function BlogCard() {
  return (
    <div className="">
      <div className="w-[263px] h-[198px] rounded-t-[8px] relative mb-[17px]">
        <IMGPlaceholder className="rounded-t-[8px]"/>
        <div className="px-6 py-1 text-white font-medium rounded-[3px] absolute top-4 right-4 bg-text-shape">
          Category
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <Rectangle width={217} height={18}/>
        <Rectangle width={137} height={18}/>
      </div>
      <RectangleGroup>
        <Rectangle width={262} height={12} light />
        <Rectangle width={241} height={12} light />
        <Rectangle width={249} height={12} light />
      </RectangleGroup>
    </div>
  )
}
