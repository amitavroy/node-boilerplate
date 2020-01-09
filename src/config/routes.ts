import HomeController from './../controllers/HomeController'
import MainController from './../controllers/MainController'
import AuthController from './../controllers/AuthController'

export default [
  {type: 'get', url: '/', callBack: MainController.index},
  {type: 'get', url: '/home', callBack: HomeController.home},
  {type: 'post', url: '/login', callBack: AuthController.index}
]
