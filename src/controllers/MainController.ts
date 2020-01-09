class MainController {
  public static index(req, resp, next) {
    resp.render('main', {title: "Content Manager"})
  }
}

export default MainController
