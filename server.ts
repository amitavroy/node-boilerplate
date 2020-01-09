import App from './src/app'
import * as dotenv from 'dotenv'
import {Sequelize} from 'sequelize'

const config = dotenv.config()

const app = new App({
  port: process.env.APP_PORT,
  middlewares: []
})

const sequelize = new Sequelize('syncup', 'newuser', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
})

sequelize.authenticate()
  .then(() => {
    console.log('Database connection success')
  })
  .catch(error => {
    console.log('Error connecting to the database:', error.parent.sqlMessage)
    // Need to redirect to error page
  })

app.listen()
