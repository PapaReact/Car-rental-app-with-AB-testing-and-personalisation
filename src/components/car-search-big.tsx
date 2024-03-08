'use client'
import ChevronDownIcon from "./svgs/chevron-down-icon";
import {useRouter} from "next/navigation";

export default function CarSearchBig() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/catalog")
  }

  return (
    <div className="rounded-full items-center border-2 border-blue-600 bg-white flex flex-grow max-h-[100px]">
      <div className="pl-[62px] py-[34px] flex">
        <div className="flex gap-[170px] pr-12 items-center">
          <span className="text-[22px] text-text-main">Brand</span>
          <ChevronDownIcon/>
        </div>
        <div className="h-[37px] w-[1px] mr-[62px] bg-text-main opacity-10"></div>
        <div className="flex gap-[170px] pr-12 items-center">
          <span className="text-[22px] text-text-main">Model</span>
          <ChevronDownIcon/>
        </div>
      </div>
      <div className="px-[72px] text-white bg-blue-600 hover:bg-blue-700 w-full h-[100px] rounded-r-full flex justify-center items-center hover:cursor-pointer" onClick={handleClick}>
        <span className="text-[22px] font-bold">Find a Car</span>
      </div>
    </div>
  )
}
