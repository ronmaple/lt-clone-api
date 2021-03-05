import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import express from 'express'
import jwksClient from 'jwks-rsa'
import jwt from 'jsonwebtoken'
import morgan from 'morgan'

import { typeDefs, resolvers } from './schema'
import { morganShortLogsOptions } from './variables'

import config from './config'

const app = express()

const middlewares = [
  cors(),
  // enable logging
  morgan(morganShortLogsOptions),
]

app.use(middlewares)

/**
 * Auth
 * // TODO: Move to tools/auth.js
 */
const client = jwksClient({
  jwksUri: config.jwksUri,
})

function getKey(header, cb) {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey
    cb(null, signingKey)
  })
}

const options = {
  audience: config.auth.clientId,
  issuer: config.auth.domain,
  algorithms: ['RS256'],
}

// GraphQL Endpoint
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization
    const user = new Promise((resolve, reject) => {
      jwt.verify(token, getKey, options, (err, decoded) => {
        if (err) return reject(err)

        resolve(decoded.email)
      })
    })
    return { user }
  },
})

server.applyMiddleware({ app })

// TODO use routes

// TODO:
// health check
// Catch 404
// General error handler

app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`)
})
