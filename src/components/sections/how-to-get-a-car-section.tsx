import ImgTextBox from "../img-text-box";
import Video from "../svgs/video";

export default function HowToGetACarSection() {
  return (
    <section className="bg-white overflow-clip">
      <div className="max-w-8xl mx-auto justify-center items-start text-center pt-[85px] pb-[141px]">
        <h2 className="text-[48px] font-medium leading-none mb-[62px]">How to get a car</h2>
        <div className="flex gap-20 justify-center mb-[51px]">
          <ImgTextBox />
          <ImgTextBox />
          <ImgTextBox />
        </div>
        <span className="flex justify-center"><Video /></span>
      </div>
    </section>
  )
}
