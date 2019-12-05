import React from 'react';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import theme from '../theme';

const Headers = (props) => {
  return (
    <React.Fragment>
      
      <div className="hOne">
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div className="spotify-container">
        <button className="spotify" onClick={()=> props.schemaToggle()}>
          SCHEMA
        </button>
        <button className="spotify" onClick={()=> props.cacheToggle()}>
          CACHE
        </button>
      </div>

     
    </React.Fragment>
  )
}

export default Headers;