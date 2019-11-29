import React , { Component } from 'react';
import { DirectQuery } from "./components/DirectQuery"
import { DirectWrite } from "./components/DirectWrite"
import { Mutations } from "./components/Mutations"
import { Queries } from "./components/Queries"
import { Todos } from "./components/Todos"
import { Variables } from "./components/Variables"
import logo from './logo.svg';
import './App.css';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const App: React.FC = () => {
  const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DirectWrite />
        <Mutations />
        <DirectQuery />
        <Queries />
        <Variables />
        <Todos />
    </div>
  );
}

export default App;
