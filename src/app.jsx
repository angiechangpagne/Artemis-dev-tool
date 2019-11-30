import React,{ useEffect, useState } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag"; //for @client, do operations locally
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import ReactDOM from "react-dom";
import { useApolloClient } from "@apollo/react-hooks";


import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';


const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
// const cache = new InMemoryCache();
// const client = new ApolloClient({
//   cache, 
//   link: new HttpLink({ uri:"http://localhost:4000/graphql" }),
//   resolvers: {},
// })
const cache = new InMemoryCache();
cache.writeData({
  data: {
    cartItems: [],
  },
});
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  resolvers: {
    Launch: {
      isInCart: (launch, _args, { cache }) => {
        const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
        return cartItems.includes(launch.id);
      },
    },
  },
});



const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      isInCart @client
      site
      rocket {
        type
      }
    }
  }
`;

cache.writeData({
  data: {
    todos: [],
    visibilityFilter: 'SHOW_ALL',
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: false,
    },
  },
});

cache.writeData({ data });

// client.onResetStore(() => cache.writeData({ data }));
const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      if(httpReq.request.postData){
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        console.log(httpReq.request.postData.text);
        if(IsJsonString(httpReq.request.postData.text)){
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        }
        else {
          requestQuery = httpReq.request.postData.text;
        }
        console.log(['this is requestQUery', requestQuery])
        updateQueries(oldQueries => [...oldQueries, {
          time:httpReq.time,
          outgoingQueries: requestQuery
        }]);
      }
    });
  },[]);

  console.log(['this is queries', queries]);
  console.log(['this is results', results]);

  return (
    <div id="containers">
      <QueryContainer queries={queries} />
      <ResponseContainer results={results} />


      <ApolloProvider client={client}>
						<div
							css={{
								display: 'grid',
								gridTemplateColumns: '80px repeat(auto-fit, 300px)',
								alignItems: 'start',
								height: 'calc(100vh - 4px)',
								overflow: 'hidden',
							}}
						>
						</div>
					</ApolloProvider>
    </div>
  );
};






function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

export default App;
