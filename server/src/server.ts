import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { doctorsRoutes } from './routes/doctors'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: ['http://localhost:3000'], // TRUE, sets all frontend URLs will be able to access the backend
})

app.register(jwt, {
  secret: 'spacetime',
})
app.register(authRoutes)
app.register(uploadRoutes)
app.register(doctorsRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Listening on port 3333')
  })
