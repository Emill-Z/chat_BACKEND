import { GraphQLObjectType, GraphQLString } from 'graphql';

const OneType = new GraphQLObjectType({
  name: 'OneType',
  fields: {
    title: {
      type: GraphQLString,
    },
  },
});

const TwoType = new GraphQLObjectType({
  name: 'TwoType',
  fields: {
    g: {
      type: GraphQLString,
    },
  },
});

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
    },
    one: { type: OneType },
    two: { type: TwoType },
  },
});