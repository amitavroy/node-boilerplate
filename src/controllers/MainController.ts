import FakeDataService from './../services/FakeDataService'

class MainController {
  public static async index(req, resp, next) {
    const users = await FakeDataService.instance.getUsers()
    resp.render('main', {title: process.env.APP_NAME, users})
  }
}

export default MainController
