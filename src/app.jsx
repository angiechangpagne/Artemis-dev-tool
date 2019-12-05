import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import QRContainer from "./containers/QRContainer.jsx"
import "./stylesheets/style.scss";
import Headers from './containers/Headers.jsx';
// import DropdownMenu from "./components/DropdownMenu.jsx";
import { Container } from 'semantic-ui-react';
import Accordian from "./components/Accordian.js";



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
      {/* <DropdownMenu/> */}
      <Container className="App"> 

      <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle} />
      <Accordian />
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus} />
      <QRContainer results={results} queries={queries} historyBtn={historyBtn}/>
      </Container>
    </React.Fragment>


  );
};

export default App;

//queries={queries} isToggle={isToggle}