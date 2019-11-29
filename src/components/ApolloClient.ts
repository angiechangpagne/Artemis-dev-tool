import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';


const link = new HttpLink({ uri: 'https://example.com/graphql' });
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    resolvers,
    typeDefs,
    cache
})