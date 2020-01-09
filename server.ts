import App from './src/app'

const app = new App({
  port: 3000,
  middlewares: []
})

app.listen()
