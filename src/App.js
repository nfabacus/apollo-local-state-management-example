import React from 'react';
import './App.css';
import {ApolloProvider} from 'react-apollo';
import Client from './Client';
import Header from './Header';
import ColorSelectors from './ColorSelectors';

const App = () => (
  <div className="App">
    <ApolloProvider client={Client}>
      <Header />
      <ColorSelectors />
    </ApolloProvider>
  </div>
);

export default App;