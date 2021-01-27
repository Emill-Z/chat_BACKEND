import { Application } from 'express';
import { graphqlHTTP, OptionsData } from 'express-graphql';
import { Resolvers } from './resolver';
import { userSchema } from './schema';

export default function (app: Application): void {
  const config: OptionsData = {
    schema: userSchema,
    rootValue: { ...new Resolvers() },
    context: {
      test: 'CONTEXT_EMIl'
    },
    graphiql: true,
  };
  app.use('/graphql', graphqlHTTP(config));
}