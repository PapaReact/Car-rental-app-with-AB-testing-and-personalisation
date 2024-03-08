import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import BenefitCard from "../benefit-card";
import classNames from "classnames";

interface LeaseBenefitsProps {
  className?: string;
  paddingTop?: number;
  title?: string;
}

export default function LeaseBenefits({paddingTop, title}: LeaseBenefitsProps) {

  const classes = classNames(
    "max-w-8xl mx-auto text-center px-[180px] pb-[140px]",
    // paddingTop ? `pt-[${paddingTop}px]` : 'pt-[120px]',
  )

  return (
    <section className="bg-white">
      <div className={classes} style={{paddingTop: paddingTop}}>
        <h1 className="text-[48px] leading-none font-medium text-text-main mb-8">{title}</h1>

        <RectangleGroup align="center" className="mb-[60px]">
          <Rectangle width={520} />
          <Rectangle width={410} />
        </RectangleGroup>

        <div className="grid grid-cols-4 gap-x-20 gap-y-8">
          <BenefitCard/>
          <BenefitCard/>
          <BenefitCard/>
          <BenefitCard/>
          <BenefitCard/>
          <BenefitCard/>
          <BenefitCard/>
          <BenefitCard/>
        </div>
      </div>
    </section>
  )
}
