import express from 'express'
import Routes from './config/routes'
import IntRoute from './interfaces/IntRoute'
import path from 'path'

class App {
  public port: string
  public app: any
  private routes: Array<IntRoute>

  constructor(appInit: {port: string, middlewares: any}) {
    this.app = express()
    this.port = appInit.port
    this.routes = Routes

    this.addRoutes(this.routes)
    this.addView()
  }

  private addRoutes(routes: Array<IntRoute>) {
    routes.forEach((route: IntRoute) => {
      this.app[route.type](route.url, route.callBack)
    })
  }

  private addView() {
    this.app.set('views', path.join(__dirname, '/../views'));
    this.app.set('view engine', 'ejs')
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`The app is now running on port ${this.port}`)
    })
  }
}

export default App
