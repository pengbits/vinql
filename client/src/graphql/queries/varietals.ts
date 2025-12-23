import { gql } from '@apollo/client';

export const GET_ALL_VARIETALS = gql`
  query GetAllVarietals {
    varietals {
      id
      name
      description
      color
    }
  }
`;

export const GET_VARIETAL = gql`
  query GetVarietal($id: ID!) {
    varietal(id: $id) {
      id
      name
      description
      color
      wines {
        id
        name
        vintage
        price
        rating
        winery {
          id
          name
          region
        }
      }
    }
  }
`;

