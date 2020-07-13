import * as gql from './generated/graphql';

export type Query = {
  [key in keyof gql.Query_Root]: gql.Query_Root[key];
};

export * from './generated/graphql';
