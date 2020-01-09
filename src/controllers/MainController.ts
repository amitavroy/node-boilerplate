import FakeDataService from './../services/FakeDataService'

class MainController {
  public static async index(req, resp, next) {
    const users = await FakeDataService.instance.getUsers()
    resp.render('main', {title: "Content Manager", users})
  }
}

export default MainController
