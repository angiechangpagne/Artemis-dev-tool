import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";




// const styles = (theme: any) => ({

//   root: {
//     width: '80%',
//     marginTop: theme.spacing.unit * 3,
//     marginRight: '100px',
//     // overflowX: "auto"
//   },
//   table: {
//     minWidth: 500,
//     marginRight: '100px',
//   },
// });

const Query = props => {
  let queries = [];
  if (props.queries) {
    queries = props.queries.map((data, i) => (
      <SyntaxHighlighter
        // id="queryBox"
        key={i}
        language="javascript"
        style={docco}
      >
        {data.outgoingQueries}
      </SyntaxHighlighter>
    ));
  }

  return (


  <div id="queryBox">
  {queries[props.historyBtn]}
  </div>


  )
};

export default Query;