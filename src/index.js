require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const MeetingAPI = require('./datasources/meeting')
const RecordingAPI = require('./datasources/recording')

const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    meetingAPI: new MeetingAPI(),
    recordingAPI: new RecordingAPI(),
  }),
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
