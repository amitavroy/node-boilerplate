import FakeDataService from './../services/FakeDataService'
import User from './../models/User'
class MainController {
  public static async index(req, res, next) {
    const users = await FakeDataService.instance.getUsers()
    const me = await User.findByPk(1)
    res.render('main', { title: process.env.APP_NAME, users, me })
  }
}

export default MainController
