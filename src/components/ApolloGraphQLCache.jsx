import React, { useEffect } from "react";
import ReactJson from "react-json-view";
// import CustomGraphiQL from "./GraphiQL.jsx";

const ApolloGraphQLCache = props => {
  useEffect(() => {
    props.getCache()
  }, [props.queries])

  return (
    <div id="cache-container">
      <div id="cache-hThree">
        <h3>CACHE</h3>
      </div>
      <ReactJson theme="google"
        src={props.cache}
        name={null}
        iconStyle="triangle"
        indentWidth={1}
        collapsed={3}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSiz
        e={false}
      />
       
    </div>
  );
};

export default ApolloGraphQLCache;