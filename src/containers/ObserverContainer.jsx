import React, { useEffect, useState } from "react";
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query2 from "../components/Query2.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.jsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.jsx";

import { MuiThemeProvider } from '@material-ui/core/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {cyan200, cyan800, grey900, white} from 'material-ui/styles/colors';

import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';



// import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import * as d3 from 'd3';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import compose from 'recompose/compose';



const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const iconStyles = {
  marginRight: 24,
};



const ObserverContainers = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [historyBtn, historyBtnToggle] = useState(0);
  const [url, updateUrl] = useState("");
  const [cache, updateCache] = useState({});

  const getCache = () => {
    msgToBackground("contentScript", "getCache", response => {
      console.log(response)
      msgToBackground("contentScript", "retrieveCache", response => { updateCache(response) });
    });
  }

  function isToggle(index) {
    historyBtnToggle(index);
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      history[index]
    );
  }

  useEffect(() => {
    historyBtnToggle(queries.length - 1);
  }, [queries]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(httpReq => {

      if (httpReq.request.postData) {
        updateUrl(httpReq.request.url);
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        if (IsJsonString(httpReq.request.postData.text)) {
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        } else {
          requestQuery = httpReq.request.postData.text;
        }
        msgToBackground("contentScript", "getDOM", response =>
          recordHistory(oldHistory => [...oldHistory, response.msg])
        );
        updateQueries(oldQueries => [
          ...oldQueries,
          {
            time: httpReq.time,
            outgoingQueries: requestQuery
          }
        ]);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div id="observerContainers">

        <HistoryOfPastQueries queries={queries} isToggle={isToggle} />
        <Query2 queries={queries} historyBtn={historyBtn} />
        <GraphQLResponse results={results} historyBtn={historyBtn} />
        {props.schemaStatus ? <Schema historyBtn={historyBtn} url={url} queries={queries} /> : null}
        {props.cacheStatus ? <ApolloGraphQLCache historyBtn={historyBtn} url={url} queries={queries} getCache={getCache} cache={cache} /> : null}
      
      </div>
    </React.Fragment>

  );
};

const msgToBackground = function (type, msg, callback, newBody) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type,
        msg,
        newBody
      },
      function (response) {
        callback(response);
      }
    );
  }
};

const IsJsonString = function (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default ObserverContainers;