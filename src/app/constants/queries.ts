import {gql} from 'apollo-angular';

export const GET_CONTINENTS = gql`
      query getContinents {
          continents{
            code
            name
          }
        }
    `;

export const GET_COUNTRIES = gql`
      query getCountries($continent: String) {
          countries(filter: { continent: { eq: $continent }}){
              code
              name
              native
              phone
              currency
              capital
              languages{
                code
                name
              }
          }
      }
    `;

export const GET_COUNTRY = gql`
      query getCountry($code: ID!) {
          country(code: $code){
              code
              name
              native
              phone
              currency
              capital
              languages{
                code
                name
              }
              continent{
                code
                name
              }
              states{
                code
                name
              }
          }
      }
`;
