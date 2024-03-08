import IMGRoundedPlaceholder from "./svgs/img-rounded-placeholder";
import Rectangle from "./rectangle";
import RectangleGroup from "./rectangle-group";

export default function ImgTextBox() {
  return (
    <div className="flex gap-[30px]">
      <IMGRoundedPlaceholder width={83} height={83}/>
      <div className="flex flex-col pt-[7px] gap-6">
        <Rectangle width={99} height={18} />
        <RectangleGroup>
          <Rectangle width={180} height={12} light />
          <Rectangle width={168} height={12} light />
        </RectangleGroup>
      </div>
    </div>
  )
}
