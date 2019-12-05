import React from "react";
import ReactJson from "react-json-view";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

const Query2 = props => {
  let queriesList = [];
  if (props.queries) {
    for (let i = 0; i < props.queries.length; i++) {
      queriesList.push(
        <ReactJson theme="google"
          src={JSON.parse(JSON.stringify(props.queries[i]))}
          name={null}
          iconStyle="triangle"
          indentWidth={1}
          collapsed={3}
          height={"100%"}
          width={"100%"}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      );
    }
  }
  return (

    <div id="query-container">
      <div id="query-hThree">
        <h3>QUERY</h3>
      </div>
      <span>{queriesList[props.historyBtn]}</span>
    </div>
 

  );
};

export default Query2;
