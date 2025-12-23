import { gql } from '@apollo/client';

export const GET_ALL_WINERIES = gql`
  query GetAllWineries {
    wineries {
      id
      name
      region
      country
      established
      description
    }
  }
`;

export const GET_WINERY = gql`
  query GetWinery($id: ID!) {
    winery(id: $id) {
      id
      name
      region
      country
      established
      description
      wines {
        id
        name
        vintage
        price
        rating
      }
    }
  }
`;

