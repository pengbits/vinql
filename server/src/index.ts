import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { resolvers } from './schema/resolvers';

// Load GraphQL schema
const typeDefs = readFileSync(
  join(__dirname, 'schema', 'typeDefs.graphql'),
  'utf-8'
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`📊 GraphQL Playground available at ${url}`);
});

