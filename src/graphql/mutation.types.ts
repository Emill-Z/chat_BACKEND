import { GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from 'graphql';
import { ICreateUserInput, IUserInput } from '../common/interfaces/User';
import { userCtrl } from '../controllers/UserController';
import { userType } from './query.types';

const inputUserType = new GraphQLInputObjectType({
  name: 'SignUpInput',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    token: { type: GraphQLString },
  }
});

export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: {
      type: userType,
      args: {
        input: { type: inputUserType }
      },
      resolve: (_: unknown, user: ICreateUserInput) => userCtrl.signUp(user),
    },
    signIn: {
      type: userType,
      args: {
        input: { type: inputUserType }
      },
      resolve: (_: unknown, user: IUserInput) => userCtrl.signIn(user)
    },
  }
});