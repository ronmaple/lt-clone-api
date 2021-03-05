import { makeExecutableSchema } from 'graphql-tools'

import { resolvers as userResolvers, typeDef as userSchema } from './user/index'

export const typeDefs = [userSchema]

export const resolvers = {
  ...userResolvers,
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default executableSchema
