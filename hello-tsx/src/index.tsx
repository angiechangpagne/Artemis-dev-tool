import ApolloClient from "apollo-boost"
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo-hooks"
import './index.css';
import App from './App';
import { resolvers } from "./resolvers"
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
    resolvers: resolvers as any
  });

  const initData = () =>
    client.writeData({
        data: {
            count: 2, 
            todos: [
                {
                    __typename: "Todo",
                    id:1, 
                    text: "buy plane ticket",
                    complete: false
                }
            ]
        }
    })
    initData()

    client.onResetStore(async () => {
        initData()
    })

    client.onClearStore(async () => {
        initData()
    })

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
