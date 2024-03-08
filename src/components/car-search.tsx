import ChevronDownIcon from "./svgs/chevron-down-icon";

export default function CarSearch() {
  return (
    <div className="rounded-full items-center border-2 border-blue-600 flex gap-5">
      <div className="pl-[30px] py-[17px] flex">
        <div className="flex gap-[90px] pr-5 items-center">
          <span className="text-[22px] text-text-main">Brand</span>
          <ChevronDownIcon/>
        </div>
        <div className="h-full w-[1px] bg-blue-600 opacity-40"></div>
        <div className="flex gap-[90px] pr-5 items-center">
          <span className="text-[22px] text-text-main">Model</span>
          <ChevronDownIcon/>
        </div>
      </div>
      <div className="px-[30px] text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer w-full h-full rounded-r-full flex justify-center items-center">
        <span className="text-[22px] font-bold">Find a Car</span>
      </div>
    </div>
  )
}
