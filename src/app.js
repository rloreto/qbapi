import http from 'http'
import { env, mongo, port, ip } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'
const contextService = require('request-context')

const app = express(api)
debugger
app.use(contextService.middleware('request'))
const server = http.createServer(app)

mongoose.connect(mongo.uri, { useMongoClient: true })

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
