import { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Resolvers } from './resolver';
import { userSchema } from './schema';

export class GraphqlService {
  static init(app: Application): void {
    const config = {
      schema: userSchema,
      rootValue: new Resolvers(),
      graphiql: true,
    };
    app.use('/graphql', graphqlHTTP(config));
  }
}