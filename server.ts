import App from './src/app'
import dotenv from 'dotenv'

dotenv.config()

const app = new App({
  port: process.env.APP_PORT,
  middlewares: []
})

app.listen()
