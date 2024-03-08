import IMGRoundedPlaceholder from "./svgs/img-rounded-placeholder";
import Rectangle from "./rectangle";
import RectangleGroup from "./rectangle-group";

export default function BenefitCard() {
  return (
    <div>
      <IMGRoundedPlaceholder/>
      <Rectangle width={100} height={18} className="mt-4 mb-6" />

      <RectangleGroup>
        <Rectangle width={210} height={12} light/>
        <Rectangle width={196} height={12} light/>
      </RectangleGroup>
    </div>
  )
}
