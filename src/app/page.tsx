import ImageAndText from "../components/sections/image-and-text";
import Header from "../components/sections/header";
import RecommendSection from "../components/sections/recommend-section";
import TestimonialSection from "../components/sections/testimonial-section";
import HowToGetACarSection from "../components/sections/how-to-get-a-car-section";
import ConsultationSection from "../components/sections/consultation-section";
import { getClient } from "../../lib/client";
import { GET_PAGE_BY_SLUG } from "../../queries/get-page-by-slug";

export const revalidate = 0;

async function getHomeData() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: {
      slug: "/",
    },
    fetchPolicy: "no-cache",
  });

  return data;
}

export default async function Home() {
  const data = await getHomeData();

  const sections = data.Page.stack.map((section: any) => {
    if (section.__typename === "SectionHeader") {
      return (
        <Header
          title={section.title}
          image_url={section.image.url}
          key={section._id}
        />
      );
    }

    if (section.__typename === "SectionCarRecommendations") {
      return (
        <RecommendSection
          heading={section.heading}
          cars={section.cars}
          cta={section.cta_button}
          key={section._id}
        />
      );
    }

    if (section.__typename === "SectionImageAndText") {
      return (
        <ImageAndText
          _context={section._context}
          title={section.title}
          left={section.align === "left"}
          right={section.align === "right"}
          cta={section.cta_button}
          key={section._id}
        />
      );
    }

    if (section.__typename === "SectionTestimonials") {
      return <TestimonialSection key={section._id} />;
    }

    if (section.__typename === "SectionHowToGetACar") {
      return <HowToGetACarSection key={section._id} />;
    }

    if (section.__typename === "SectionConsultation") {
      return <ConsultationSection key={section._id} />;
    }
  });

  return (
    <main>
      <meta property="prepr:id" content={data.Page._id} />
      {sections}
    </main>
  );
}
