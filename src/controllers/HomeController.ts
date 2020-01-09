class HomeController {
  public static home(req, resp, next) {
    resp.json("From Home controller")
  }
}

export default HomeController
