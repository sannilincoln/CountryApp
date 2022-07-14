import { ApolloClient, InMemoryCache, useQuery, gql  } from '@apollo/client';


 export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });


  export const APIDATA = gql`
  query {
    continents {
      name
      countries {
        name
        currency
        phone
        emoji
      }
    }
    countries {
      name
      currency
      emoji
    }
  }
`;




