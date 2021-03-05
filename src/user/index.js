import { gql } from 'apollo-server-express'

// mock until db
const user = {
  id: 12345,
  username: 'elonmusk',
  firstName: 'Elon',
  lastName: 'Musk',
  links: [
    {
      desc: 'tesla',
      url: 'https://www.tesla.com/',
    },
    {
      desc: 'spaceX',
      url: 'https://www.spacex.com/',
    },
    {
      desc: 'solarcity',
      url: 'https://www.tesla.com/solarpanels',
    },
  ],
}

export const typeDef = gql`
  type Link {
    desc: String
    url: String
  }
  type User {
    id: ID
    username: String
    firstName: String
    lastName: String
    links: [Link]
  }
  type Query {
    getUser(userId: ID): User
  }
`

export const resolvers = {
  Query: {
    getUser: () => user,
  },
}
