import React,{ useEffect, useState } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag"; //for @client, do operations locally
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import ReactDOM from "react-dom";
import { useApolloClient } from "@apollo/react-hooks";


const cache = new InMemoryCache();
const client = new ApolloClient({
  cache, 
  link: new HttpLink({ uri:"http://localhost:4000/graphql" }),
  resolvers: {},
})

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
