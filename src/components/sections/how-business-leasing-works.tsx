import RectangleGroup from "../rectangle-group";
import Rectangle from "../rectangle";
import Button from "../button";
import NumberCircle from "../number-circle";

export default function HowBusinessLeasingWorks() {
  return (
    <section className="bg-white">
      <div className="px-[150px] pt-[120px] pb-[150px] max-w-8xl mx-auto">
        <h3 className="text-[48px] font-medium leading-none text-text-main mb-8">How business leasing works</h3>
        <div className="flex gap-[250px]">
          <div className="flex flex-col items-start gap-8">
            <RectangleGroup>
              <Rectangle width={467}/>
              <Rectangle width={395}/>
              <Rectangle width={431}/>
              <Rectangle width={404}/>
              <Rectangle width={416}/>
              <Rectangle width={299}/>
            </RectangleGroup>
            <Button>Get a consultation</Button>
          </div>

          <div>
            <ul>
              <li>
                <div className="relative pb-[65px]">
                  <span className="absolute left-8 top-4 -ml-px h-full w-0.5 bg-blue-50" aria-hidden="true"></span>
                  <div className="relative flex gap-8">
                    <NumberCircle number={1} />
                    <div className="flex flex-col gap-6 pt-6">
                      <Rectangle width={169} />
                      <RectangleGroup>
                        <Rectangle width={290} height={12} light/>
                        <Rectangle width={278} height={12} light/>
                      </RectangleGroup>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-[65px]">
                  <span className="absolute left-8 top-4 -ml-px h-full w-0.5 bg-blue-50" aria-hidden="true"></span>
                  <div className="relative flex gap-8">
                    <NumberCircle number={2} />
                    <div className="flex flex-col gap-6 pt-6">
                      <Rectangle width={169} />
                      <RectangleGroup>
                        <Rectangle width={290} height={12} light/>
                        <Rectangle width={278} height={12} light/>
                      </RectangleGroup>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-[65px]">
                  <div className="relative flex gap-8">
                    <NumberCircle number={3} />
                    <div className="flex flex-col gap-6 pt-6">
                      <Rectangle width={169} />
                      <RectangleGroup>
                        <Rectangle width={290} height={12} light/>
                        <Rectangle width={278} height={12} light/>
                      </RectangleGroup>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
