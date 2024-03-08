import CarSearchBig from "../car-search-big";

interface Props {
  title: string;
}

export default function LandingHeader({title}: Props) {
  return (
    <div className="bg-blue-50">
      <div className="h-[360px] flex justify-center pt-[67px] w-full max-w-8xl mx-auto relative">
        <div className="flex flex-col items-center">
          <h1 className="max-h-[166px] text-[66px] leading-normal font-medium text-center text-text-main max-w-[840px] z-10 mb-[67px]">{title}</h1>
          <div className="absolute -bottom-[50px]"><CarSearchBig /></div>
        </div>
      </div>
    </div>
  )
}
