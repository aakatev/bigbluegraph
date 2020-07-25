require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const MeetingApi = require('./datasources/meeting')

const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    meetingApi: new MeetingApi(),
  }),
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
