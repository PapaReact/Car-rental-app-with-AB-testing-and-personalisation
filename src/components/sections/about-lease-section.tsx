import IMGPlaceholder from "../svgs/i-m-g-placeholder";
import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import Button from "../button";

interface AboutLeaseSectionProps {
  title?: string;
}

export default function AboutLeaseSection({title}: AboutLeaseSectionProps) {
  return (
    <section>
      <div className="max-w-8xl mx-auto pr-[78px] pt-[100px] pb-[125px] grid grid-cols-2 gap-[46px] items-start">
        <div className="flex flex-col gap-8 pl-[150px] items-start">
          <h2 className="text-[48px] font-medium text-text-main">{title}</h2>
          <RectangleGroup>
            <Rectangle width={467} />
            <Rectangle width={395} />
            <Rectangle width={431} />
            <Rectangle width={404} />
            <Rectangle width={416} />
            <Rectangle width={299} />
          </RectangleGroup>
          <Button>Get a consultation</Button>
        </div>
        <IMGPlaceholder width={640} height={400}/>
      </div>
    </section>
  )
}
