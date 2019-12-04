import React, { useState, useEffect } from 'react';
import BoxLayout from "../hoc/BoxLayout";
// import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";

// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";



const Headers = (props) => {
  // useEffect will trigger re-render when either schemaStatus OR cacheStatus gets updated
  // useEffect(() => {
    
  // },[schemaStatus, cacheStatus])

  return (
    <React.Fragment>
    <Grid>
          <div> ARTEMIS DEV TOOL

        <img></img>
          </div>
          <div onClick={()=> props.schemaToggle()}>
          SCHEMA
        </div>
        <div onClick={()=> props.cacheToggle()}>
          CACHE
        </div>
      <div>
      </div>
      </Grid>
    </React.Fragment>
  )
}

export default Headers;