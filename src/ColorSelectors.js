import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Client, { GET_TEXT_COLOR, SET_TEXT_COLOR } from "./Client";
import gql from 'graphql-tag';

class ColorSelectors extends Component {
  setTextColor = (color) => {
    Client.mutate({
      mutation:  SET_TEXT_COLOR,
      variables: { color }
    });
  }

  render() {
    return (
      <Query query={GET_TEXT_COLOR}>
        {({data}) => (
          <div>
            <h2 style={{ color: data.textColor.value }}>Current Text Color: { data.textColor.value }</h2>
            <button onClick={()=> this.setTextColor("blue")}>Blue</button>
            <button onClick={()=> this.setTextColor("green")}>Green</button>
            <button onClick={()=> this.setTextColor("red")}>Red</button>
          </div>
        )}
      </Query>

    );
  }
}

export default ColorSelectors;