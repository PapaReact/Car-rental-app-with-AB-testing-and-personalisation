import Rectangle from "./rectangle";
import Button from "./button";

export default function ConsultationForm() {
  return (
    <div className="bg-white p-[82px] rounded-[10px] flex flex-col gap-8 items-start max-w-[623px]">
      <h3 className="text-[36px] leading-snug font-medium text-text-main">Get a consultation</h3>
      <div className="flex flex-col gap-6">
        <Rectangle width={459} height={48} light/>
        <Rectangle width={459} height={48} light/>
        <Rectangle width={459} height={88} light/>
      </div>
      <Button>Send form</Button>
    </div>
  )
}
