import BusinessLandingHeader from "../../components/sections/business-landing-header";
import LeaseBenefits from "../../components/sections/lease-benefits";
import MostPopular from "../../components/sections/most-popular";
import AboutLeaseSection from "../../components/sections/about-lease-section";
import TestimonialSection from "../../components/sections/testimonial-section";
import CommonQuestionsSection from "../../components/sections/common-questions-section";
import HowBusinessLeasingWorks from "../../components/sections/how-business-leasing-works";
import BlogSection from "../../components/sections/blog-section";
import ConsultationSection from "../../components/sections/consultation-section";
import { getClient } from "../../../lib/client";
import { GET_PAGE_BY_SLUG } from "../../../queries/get-page-by-slug";

export const revalidate = 0;

async function getBusinessLeaseData() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: {
      slug: "electric-lease",
    },
  });

  return data;
}

export default async function Page() {
  const data = await getBusinessLeaseData();

  console.log(data.Page._id);

  const sections = data.Page.stack.map((section: any) => {
    if (section.__typename === "SectionHeader") {
      return (
        <BusinessLandingHeader
          title={section.title}
          image_url={section.image.url}
          cta={section.cta_button}
          key={section._id}
        />
      );
    }

    if (section.__typename === "SectionBenefits") {
      return (
        <LeaseBenefits
          paddingTop={120}
          key={section._id}
          title={section.title}
        />
      );
    }

    if (section.__typename === "SectionCarRecommendations") {
      return (
        <MostPopular
          title={section.heading}
          cars={section.cars}
          cta={section.cta_button}
          key={section._id}
        />
      );
    }

    if (section.__typename === "SectionAboutLease") {
      return <AboutLeaseSection key={section._id} title={section.title} />;
    }

    if (section.__typename === "SectionTestimonials") {
      return <TestimonialSection key={section._id} />;
    }

    if (section.__typename === "SectionHowItWorks") {
      return <HowBusinessLeasingWorks key={section._id} />;
    }

    if (section.__typename === "SectionFaq") {
      return <CommonQuestionsSection key={section._id} title={section.title} />;
    }

    if (section.__typename === "SectionBlogContent") {
      return <BlogSection key={section._id} />;
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
