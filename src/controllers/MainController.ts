import FakeDataService from './../services/FakeDataService'
import DatabaseService from './../services/DatabaseService'
class MainController {
  public static async index(req, res, next) {
    const users = await FakeDataService.instance.getUsers()
    const dbUsers = await DatabaseService.instance.getDbUsers()

    res.render('main', {title: process.env.APP_NAME, users})
  }
}

export default MainController
