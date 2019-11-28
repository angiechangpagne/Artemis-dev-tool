import React from 'react';
import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion'

import { BrowserRouter } from "react-router-dom"
import { createHttpLink } from 'apollo-link http'
import ApolloClient from 'apollo-client'
import { ApolloLink } from "apollo-link"
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { fragmentCachedRedirect } from "apollo-link-state-fragment"

import {
    fragmentCacheRedirect,
    fragmentLinkState
  } from "apollo-link-state-fragment"

import { graphql, ApolloProvider } from 'react-apollo'
import graphql from 'graphql-tag'
import { ReactJsonViewProps } from 'react-json-view';

//search results
//sanitize


injectGlobal`
    #root{
        height:80%
    }
    `;

    
    const cache=new InMemoryCache({
        cachedRedirects: {
            Query: {
                ...fragmentCachedRedirect()
            }
        }
    })

    const caches=[];
    //cache date time and queries and query results, 
    const client = new ApolloClient({
        link: httpLink.create(),
        cache: new InMemoryCache()
      });
    

    caches.push(client.cache)

    const render=(Component: React.ComponentType) => {
        return ReactDOM.render(
            <ApolloProvider client={client}>
                <BrowerRouter>
                <Component />
                </BrowerRouter>
            </ApolloProvider>
            document.getElementById('root')
        )
    }


