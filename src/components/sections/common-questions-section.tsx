import FaqBox from "../faq-box";
import Rectangle from "../rectangle";
import RecommendSection from "./recommend-section";
import RectangleGroup from "../rectangle-group";

interface CommonQuestionsSectionProps {
  title?: string
}

export default function CommonQuestionsSection({ title }: CommonQuestionsSectionProps) {
  return (
    <section className="bg-blue-100 w-full">
      <div className="max-w-8xl mx-auto text-center pt-[120px] pb-[140px] px-[78px] flex flex-col w-full justify-center items-center">
        <h3 className="max-w-[550px] text-[48px] font-medium text-text-main leading-none mb-16">
          {title}
        </h3>

        <div className="flex flex-col justify-center gap-6">
          <FaqBox open>
            <Rectangle width={259} height={18}/>

            <RectangleGroup>
              <Rectangle width={708} height={12} light/>
              <Rectangle width={679} height={12} light/>
              <Rectangle width={489} height={12} light/>
            </RectangleGroup>
          </FaqBox>
          <FaqBox>
            <Rectangle width={449} height={18}/>
          </FaqBox>
          <FaqBox>
            <Rectangle width={349} height={18}/>
          </FaqBox>
          <FaqBox>
            <Rectangle width={549} height={18}/>
          </FaqBox>
        </div>
      </div>
    </section>
  )
}
