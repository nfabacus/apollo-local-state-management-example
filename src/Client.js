import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-client-preset';
import { createHttpLink } from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {withClientState} from 'apollo-link-state';
import gql from 'graphql-tag';

// Prryrnf we have got  a GraphQL server running locally...
const httpLink = createHttpLink({
  uri: 'http://127.0.01:4000/graphql'
});

const cache = new InMemoryCache();

const defaults = {
  textColor: {
    value: "blue",
    __typename: "TextColor"
  }
};

export const GET_TEXT_COLOR = gql`
    {
        textColor @client {
            value
        }
    }
`;

export const SET_TEXT_COLOR = gql`
    mutation SetTextColor($color: String!) {
        setTextColor(color: $color) @client {
            textColor
        }
    }
`

const resolvers ={
  Mutation: {
    setTextColor: (_, _args, { cache }) => {
      const newTextColor = { value: _args.color, __typename: "TextColor" };
      const data = { textColor: newTextColor };
      cache.writeData({ data });
      return newTextColor;
    }
  }
};

const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache
});

export default client;