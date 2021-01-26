import { GraphQLSchema } from 'graphql';
import { RootMutationType } from './mutation.types';
import { RootQueryType } from './query.types';

export const userSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});
