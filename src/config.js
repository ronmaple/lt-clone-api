import dotenv from 'dotenv-flow'
dotenv.config()

const config = {
  port: process.env.PORT,

  auth: {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    secret: process.env.AUTH0_CLIENT_SECRET,
  },

  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
}

export default config
