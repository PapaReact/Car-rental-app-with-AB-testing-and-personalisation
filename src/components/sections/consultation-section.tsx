import ConsultationForm from "../consultation-form";
import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import PhoneIcon from "../svgs/phone-icon";
import EmailIcon from "../svgs/email-icon";

export default function ConsultationSection() {
  return (
    <section className="bg-blue-100 py-[140px]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-8 max-w-[500px] pl-[148px]">
          <h3 className="text-[48px] font-medium leading-none text-text-main">Ready to go next level?</h3>
          <RectangleGroup>
            <Rectangle width={390} dark/>
            <Rectangle width={330} dark/>
          </RectangleGroup>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <span className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center"><PhoneIcon/></span>
              <Rectangle width={220} dark/>
            </div>
            <div className="flex gap-5 items-center">
              <span className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center"><EmailIcon/></span>
              <Rectangle width={290} dark/>
            </div>
          </div>
        </div>
        <ConsultationForm/>
      </div>
    </section>
  )
}
