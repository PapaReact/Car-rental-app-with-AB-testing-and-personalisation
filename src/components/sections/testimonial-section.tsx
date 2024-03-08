import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import TestimonialCard from "../testimonial-card";

export default function TestimonialSection() {
  return (
    <section className="bg-blue-100 overflow-clip">
      <div className="max-w-8xl mx-auto pt-[104px] pb-[146px] px-[78px] flex flex-col justify-center items-center">
        <h1 className="text-[48px] font-medium leading-none text-text-main mb-8">Testimonials about Acme Lease</h1>
        <RectangleGroup align="center" className="mb-[52px]">
          <Rectangle width={520} height={16} white />
          <Rectangle width={410} height={16} white />
          <Rectangle width={384} height={16} white />
        </RectangleGroup>

        <div className="flex gap-8 max-w-8xl mx-auto">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  )
}
