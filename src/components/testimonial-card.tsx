import UserPlaceholder from "./svgs/user-placeholder";
import Rectangle from "./rectangle";
import RectangleGroup from "./rectangle-group";
import StarIcon from "./svgs/star-icon";

export default function TestimonialCard() {
  return (
    <div className="bg-white p-6 flex gap-4 rounded-[8px]">
      <UserPlaceholder />

      <div className="pt-4 flex flex-col gap-6 items-start">
        <Rectangle width={139} height={18} />

        <RectangleGroup>
          <Rectangle width={255} height={12} light />
          <Rectangle width={225} height={12} light />
          <Rectangle width={240} height={12} light />
        </RectangleGroup>

        <div className="flex gap-[4px] pt-1 text-blue-100">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  )
}
