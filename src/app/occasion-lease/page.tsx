import LeaseBenefits from "../../components/sections/lease-benefits";
import MostPopular from "../../components/sections/most-popular";
import AboutLeaseSection from "../../components/sections/about-lease-section";
import TestimonialSection from "../../components/sections/testimonial-section";
import CommonQuestionsSection from "../../components/sections/common-questions-section";
import BlogSection from "../../components/sections/blog-section";
import ConsultationSection from "../../components/sections/consultation-section";
import { getClient } from "../../../lib/client";
import { GET_PAGE_BY_SLUG } from "../../../queries/get-page-by-slug";
import PrivateLandingHeader from "../../components/sections/private-landing-header";
import HowPrivateLeasingWorks from "../../components/sections/how-private-leasing-works";

export const revalidate = 0;

async function getPrivateLeaseData() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: {
      slug: "occasion-lease",
    },
  });

  return data;
}

export default async function Page() {
  const data = await getPrivateLeaseData();

  const sections = data.Page.stack.map((section: any) => {
    if (section.__typename === "SectionHeader") {
      return (
        <PrivateLandingHeader
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
          paddingTop={360}
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
      return <HowPrivateLeasingWorks key={section._id} />;
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
