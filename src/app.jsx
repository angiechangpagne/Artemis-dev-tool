import React, { useEffect , useState} from "react";
import bglog from "./utils/bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";
import ReactJson from 'react-json-view';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ResultDisplay from "./components/GraphQLResponse.jsx"

import { useQuery } from '@apollo/react-hooks';




import { Switch, Route, Redirect } from 'react-router-dom'


const App = (props) => {
  // console.log('i am in useEffect');
  const [queries, updateQueries] = useState([]); //query history hook
  const [results, updateResults] = useState([]); //current query display hook


  const cache=new InMemoryCache(); //initialize caching system

  const client=new ApolloClient({ 
    link: new HttpLink(),
    cache
  });

  chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
    if(httpReq.request.postData){
      httpReq.getContent(res => {
        const tempArr = results.slice();
        tempArr.push(res);
        updateResults(tempArr);
      });
      let requestQuery;
      if(typeof JSON.parse(httpReq.request.postData.text) === "object"){
        requestQuery = JSON.parse(httpReq.request.postData.text).query;
      }
      else {
        requestQuery = httpReq.request.postData.text;
      }
      const newArr = queries.slice();
      newArr.push(JSON.stringify({
        time:httpReq.time,
        outgoingQueries: requestQuery
      }));
      updateQueries(newArr);
    }
  });
  bglog(queries);


  //const  client = new ApolloClient({
  //   cache: new InMemoryCache()
  // })

  bglog(['this is queries', queries]);
  bglog(['this is results', results]);

  return (
    <div>
      {/* {queries}
      {results} */}
      <QueryContainer queries={queries} />
      <ResultDisplay results={results}/>
    </div>
  );
};

export default App;
