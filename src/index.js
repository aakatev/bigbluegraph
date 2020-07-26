require('dotenv').config()

const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const MeetingAPI = require('./datasources/meeting')
const RecordingAPI = require('./datasources/recording')

const resolvers = require('./resolvers')

let engine = process.env.APOLLO_KEY
  ? {
      reportSchema: true,
    }
  : {}

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    meetingAPI: new MeetingAPI(),
    recordingAPI: new RecordingAPI(),
  }),
  resolvers,
  engine,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
