require('dotenv').config()

const path = require('path')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

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

const app = express()
server.applyMiddleware({ app })

if (process.env.ENABLE_CLIENT) {
  staticPath =
    process.env.STATIC_PATH || path.resolve(__dirname, '..', 'client', 'build')
  app.use(express.static(staticPath))
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(staticPath, 'index.html'))
  })
}

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
