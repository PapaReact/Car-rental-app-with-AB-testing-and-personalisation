import {gql} from "@apollo/client";

export const GET_CATALOG_DATA = gql`
  query Cars($where: CarWhereInput) {
    Cars(where: $where, sort: title_ASC) {
      items {
        title
        monthly_price
        _slug
        _id
        image {
          url
        }
        categories {
          title
          _slug
        }
      }
    }
  }
`
