import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import "./stylesheets/style.scss";
import Headers from './containers/Headers.jsx';

<<<<<<< HEAD

import Container from '@material-ui/core/Container';


=======
>>>>>>> a83f7794a1ac524675a3c166693686088745c906
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
    <React.Fragment>
<<<<<<< HEAD
      <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle}/>
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus}/>
      
=======
      <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle} />
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus} />
>>>>>>> a83f7794a1ac524675a3c166693686088745c906
    </React.Fragment>
  );
};

export default App;