import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oac4e61f0501xr0hki6c8t/master',
  cache: new InMemoryCache()
});