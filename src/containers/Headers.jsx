<<<<<<< HEAD
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


=======
import React from 'react';
>>>>>>> a83f7794a1ac524675a3c166693686088745c906

const Headers = (props) => {
  return (
    <React.Fragment>
    <Grid>
          <div> ARTEMIS DEV TOOL

        <img></img>
<<<<<<< HEAD
          </div>
          <div onClick={()=> props.schemaToggle()}>
=======
      </div>
      <div id='schema-cache-button'>
        <div onClick={() => props.schemaToggle()}>
>>>>>>> a83f7794a1ac524675a3c166693686088745c906
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