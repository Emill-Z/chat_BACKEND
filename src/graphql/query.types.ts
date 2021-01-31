import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const RoomType = new GraphQLObjectType({
  name: 'RoomType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    isBot: { type: GraphQLBoolean },
    active: { type: GraphQLBoolean },
    avatar: { type: GraphQLString },
    lastMessage: { type: GraphQLString },
  }
});

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    rooms: { type: new GraphQLList(RoomType) },
  }
});

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    me: {
      type: userType,
      args: {
        id: { type: GraphQLID },
      }
    },
    users: { type: new GraphQLList(userType) },
    rooms: { type: new GraphQLList(RoomType) },
  },
});
