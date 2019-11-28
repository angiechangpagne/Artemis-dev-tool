import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import app from './components/App.js';

render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <app />
    <App />
  </ApolloProvider>
</BrowserRouter>,


  document.getElementById('root')
);
serviceWorker.unregister()