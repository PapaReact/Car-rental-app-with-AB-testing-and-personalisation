import Rectangle from "./rectangle";

export default function CatalogSidebar() {
  return (
    <div className="bg-white rounded-[20px] p-6 flex flex-col items-start gap-6 max-h-[506px]">
      <Rectangle width={109} />
      <Rectangle width={256} height={48} light/>
      <Rectangle width={256} height={48} light/>
      <Rectangle width={256} height={48} light/>
      <Rectangle width={256} height={48} light/>
      <Rectangle width={256} height={48} light/>
      <Rectangle width={256} height={48} light/>
    </div>
  )
}
