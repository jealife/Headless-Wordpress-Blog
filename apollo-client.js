import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://pindiofficiel.com/graphql', // Remplace ici !!!
  cache: new InMemoryCache(),
});

export default client;