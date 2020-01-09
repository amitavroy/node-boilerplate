import App from './src/app'
import * as dotenv from 'dotenv'
import {Sequelize} from 'sequelize'

const config = dotenv.config()

const app = new App({
  port: process.env.APP_PORT,
  middlewares: []
})

app.listen()
