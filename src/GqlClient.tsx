import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql.js';

export default getSdk(
  new GraphQLClient('https://justq.herokuapp.com/v1/graphql', {
    headers: {
      'X-Hasura-Role': 'user',
    },
  })
);
