import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache, NormalizedCachedObject, NormalizedCacheObject } from 'apollo-cache-inmemory';


import StateResolvers from './resolvers'
import typeDefs from './typeDefs'


export function createClient(): ApolloClient<NormalizedCacheObject> {
    const link = new HttpLink({ uri: 'https://example.com/graphql' });
    const cache = new InMemoryCache();


    //helper function get data from cache
    const getState = (query: any): IState => {
        return cache.readQuery<IRoot>({ query }).state
    }


    const writeState = (state: IState) => { 
        return cache.writeData({ data: { state }})
    }

    const initState = () => {
        const state = { 
            appState: defaultAppState,
            __typename: 'State',
        }

        writeState(state)
    }
    const client = new ApolloClient({
        link,
        cache,
        resolvers: StateResolvers(getState, writeState),
        typeDefs,
    })
}