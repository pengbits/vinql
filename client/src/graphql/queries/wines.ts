import { gql } from '@apollo/client';

export const GET_ALL_WINES = gql`
  query GetAllWines {
    wines {
      id
      name
      vintage
      price
      description
      alcoholContent
      rating
      winery {
        id
        name
        region
        country
      }
      varietal {
        id
        name
        color
        description
      }
    }
  }
`;

export const GET_WINE = gql`
  query GetWine($id: ID!) {
    wine(id: $id) {
      id
      name
      vintage
      price
      description
      alcoholContent
      rating
      winery {
        id
        name
        region
        country
        established
        description
      }
      varietal {
        id
        name
        color
        description
      }
    }
  }
`;

