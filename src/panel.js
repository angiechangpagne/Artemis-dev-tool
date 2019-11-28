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

import LinkList from './component/LinkList'
import CreateLink from './component/CreateLink'
import Header from './component/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './component/Login'
import Search from './component/Search'


render(
  <BrowserRouter>
   <ApolloProvider client={client}>
   <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
          </Switch>
        </div>
      </div>
   </ApolloProvider>
  </BrowserRouter>
  <App />,
  document.getElementById('root')
);
serviceWorker.unregister()