import {gql} from "@apollo/client";

export const GET_CAR = gql`
  query Car($slug: String) {
    Car(slug: $slug) {
      _id
      title
      monthly_price
      image {
        url
      }
    }
  }
`
