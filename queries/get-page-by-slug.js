import { gql } from "@apollo/client";

export const GET_PAGE_BY_SLUG = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack {
        __typename
        # This returns the variant_id & kind in every Component, it can be used for tracking purposes i.e. GA4 or GTM
        # kind: PERSONALIZATION | AB_TEST
        ... on Component {
          _context {
            kind
            variant_id
            group_id
          }
        }
        ... on SectionAboutLease {
          title
        }
        ... on SectionBenefits {
          title
          _id
        }
        ... on SectionImageAndText {
          title
          _id
          cta_button {
            ...CTA_BUTTON
          }
          align
        }
        ... on SectionHowItWorks {
          title
          _id
        }
        ... on SectionHeader {
          title
          image {
            url
          }
          cta_button {
            ...CTA_BUTTON
          }
          _id
        }
        ... on SectionFaq {
          title
          _id
        }
        ... on SectionCarRecommendations {
          _id
          internal_title
          heading
          cta_button {
            ...CTA_BUTTON
          }
          cars {
            _id
            title
            monthly_price
            _slug
            image {
              url
            }
            categories {
              title
            }
          }
        }
      }
    }
  }

  fragment CTA_BUTTON on CTAButton {
    link
    text
    internal_link {
      _slug
    }
  }
`;
