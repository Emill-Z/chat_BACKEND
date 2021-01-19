import { GraphQLSchema } from 'graphql';
import { RootQueryType } from './types';

export const userSchema = new GraphQLSchema({ query: RootQueryType });
