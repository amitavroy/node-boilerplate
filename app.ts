import * as express from 'express'
import Routes from './src/config/routes'
import IntRoute from './src/interfaces/IntRoute'

class App {
  public port: number
  public app: any
  private routes: Array<IntRoute>

  constructor(appInit: {port: number, middlewares: any}) {
    this.app = express()
    this.port = appInit.port
    this.routes = Routes

    this.addRoutes(this.routes)
  }

  private addRoutes(routes: Array<IntRoute>) {
    routes.forEach((route: IntRoute) => {
      this.app.use(route.url, route.callBack)
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`The app is now running on port ${this.port}`)
    })
  }
}

export default App
