import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import "./stylesheets/style.scss";
import Headers from './containers/Headers.jsx';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


const App = props => {
  const [schemaStatus, updateSchemaStatus] = useState(false);
  const [cacheStatus, updateCacheStatus] = useState(false);

  useEffect(() => {
    chrome.tabs.executeScript({
      file: "contentScript.js"
    });
  }, []);

  function schemaToggle() {
    updateSchemaStatus(!schemaStatus);
    updateCacheStatus(false);
  }

  function cacheToggle() {
    updateCacheStatus(!cacheStatus);
    updateSchemaStatus(false);
  }

  return (
    <MuiThemeProvider theme={theme}> 

    <React.Fragment>
      <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle} />
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus} />
    </React.Fragment>

    </MuiThemeProvider>
  );
};

export default App;