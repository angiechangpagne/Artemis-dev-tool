import React from 'react';
import ReactJson from 'react-json-view';
<<<<<<< HEAD
import bglog from "../bglog";

import { ApolloClient } from 'apollo-client';


=======
import bglog from '../utils/bglog'
>>>>>>> d493fe1bde2c87954e7fbbe4039124cccaca0978
const GraphQLResponse = (props) => {
  bglog(['this is responseArr', props.results]);
  let responseArr = [];
  if(props.results){
    for(let i = 0; i < props.results.length; i ++){
      responseArr.push(<ReactJson
        src={JSON.parse(props.results[i])}
        name={null}
        iconStyle='triangle'
        indentWidth={1}
        collapsed={3}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
      />);
    }
  }
  return (
    <div id='graphql-res'>
      <h2 className='graphql-heading'>Response:</h2>
      <span className='graphql-span'>
        {responseArr}
      </span>
    </div>
  )
}

export default GraphQLResponse;