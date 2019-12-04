import React from 'react';

const Headers = (props) => {
  return (
    <React.Fragment>
    <Grid>
          <div> ARTEMIS DEV TOOL

        <img></img>
      </div>
      <div id='schema-cache-button'>
        <div onClick={() => props.schemaToggle()}>
          SCHEMA
        </div>
        <div onClick={() => props.cacheToggle()}>
          CACHE
        </div>
      <div>
      </div>
      </Grid>
    </React.Fragment>
  )
}

export default Headers;