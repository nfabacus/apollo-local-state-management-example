import React from 'react';
import logo from "./logo.svg";
import { Query } from 'react-apollo';
import { GET_TEXT_COLOR } from "./Client";

const Header = () => (
  <Query query={GET_TEXT_COLOR}>
    {({data}) => (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{ color: data.textColor.value }}>Apollo Link State Demo</h1>
      </header>
    )}
  </Query>
);

export default Header;