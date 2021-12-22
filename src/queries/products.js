import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
 query products ($currency: Currency){
  products{
     id
     title
    image_url
    price(currency: $currency)
  }
}
`;
