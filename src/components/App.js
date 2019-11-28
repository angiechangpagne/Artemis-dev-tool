import React, { Component } from 'react'
import LinkList from './component/LinkList'
import CreateLink from './component/CreateLink'
import Header from './component/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './component/Login'
import Search from './component/Search'

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default 