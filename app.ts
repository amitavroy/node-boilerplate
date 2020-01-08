import * as express from 'express'

class App {
  public port: number
  public app: any

  constructor(appInit: {port: number, middlewares: any, controllers: any}) {
    this.app = express()
    this.port = appInit.port
    this.routes(appInit.controllers)
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
    controllers.forEach(controller => {

    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`The app is running on port ${this.port}`)
    })
  }
}

export default App
