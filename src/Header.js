import React, { Component } from 'react';
import logo from "./logo.svg";
import { Query } from 'react-apollo';
import { GET_TEXT_COLOR } from "./Client";

class Header extends Component {
  sendColor =(color) => {
    alert(`Sending color ${color}`);
  }

  render() {
    return (
      <Query query={GET_TEXT_COLOR}>
        {({data}) => (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title" style={{ color: data.textColor.value }}>Apollo Link State Demo</h1>
            <button onClick={() => this.sendColor(data.textColor.value)}>Send Color</button>
            <br />
          </header>
        )}
      </Query>
    );
  }
};

export default Header;