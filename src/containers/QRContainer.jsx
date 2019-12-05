import React from 'react';
import Query2 from "../components/Query2.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";

import VerticalDivider from "../components/VerticalDivider"

const QRContainer = (props) => {
    return (
    
      <React.Fragment>
        <div id="response-container">
            {/* <Query2 queries={queries} historyBtn={historyBtn} />  */}
         <VerticalDivider position="relative" results={results} queries={queries} historyBtn={historyBtn} />
            {/* <GraphQLResponse results={results} historyBtn={historyBtn} /> */}
        </div>
      </React.Fragment>
  
  
    )
  }
  
  export default QRContainer;