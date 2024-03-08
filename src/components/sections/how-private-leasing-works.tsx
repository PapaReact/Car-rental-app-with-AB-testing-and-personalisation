import NumberCircle from "../number-circle";
import Rectangle from "../rectangle";
import IMGPlaceholder from "../svgs/i-m-g-placeholder";
import RectangleGroup from "../rectangle-group";
import Button from "../button";

export default function HowPrivateLeasingWorks() {
  return (
    <section className="bg-white">
      <div className="pt-[120px] pb-[140px] px-[150px] max-w-8xl mx-auto">
        <h3 className="text-[48px] font-medium leading-none text-text-main mb-16">How private leasing works</h3>
        <div aria-label="Progress" className="mb-16">
          <ol role="list" className="flex flex-grow items-center justify-between">
            <li className="relative w-full">
              <div className="absolute inset-0 -top-12 flex items-center z-0" aria-hidden="true">
                <div className="h-0.5 w-full bg-blue-50"></div>
              </div>
              <div className="flex flex-col gap-8">
                <NumberCircle number={1} />
                <Rectangle width={219} height={18} />
              </div>
            </li>
            <li className="relative w-full">
              <div className="absolute inset-0 -top-12 flex items-center" aria-hidden="true">
                <div className="h-0.5 w-full bg-blue-50"></div>
              </div>
              <div className="flex flex-col gap-8">
                <NumberCircle number={2} />
                <Rectangle width={159} height={18} />
              </div>
            </li>
            <li className="relative">
              <div className="flex flex-col gap-8">
                <NumberCircle number={3} />
                <Rectangle width={209} height={18} />
              </div>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-2">
          <div className="pt-9">
            <Rectangle width={309} className="mb-6"/>
            <RectangleGroup className="mb-11">
              <Rectangle width={467} height={12} light />
              <Rectangle width={395} height={12} light />
              <Rectangle width={431} height={12} light />
              <Rectangle width={404} height={12} light />
            </RectangleGroup>
            <Button>Get a consultation</Button>
          </div>
          <div className="self-end flex justify-end">
            <svg width="460" height="287" viewBox="0 0 460 287" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="460" height="287" fill="#EFF6FF"/>
              <path d="M349.719 221.337H111.114C108.444 221.337 107.104 218.112 108.987 216.22L157.803 167.177C161.642 163.321 167.86 163.241 171.795 166.998L194.531 188.7C198.933 192.902 206.036 192.231 209.573 187.278L262.662 112.944C266.663 107.342 274.995 107.363 278.967 112.986L352.169 216.606C353.573 218.593 352.152 221.337 349.719 221.337Z" fill="#DBEAFE"/>
              <ellipse cx="135.035" cy="92.268" rx="31.1407" ry="30.7306" fill="#DBEAFE"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
