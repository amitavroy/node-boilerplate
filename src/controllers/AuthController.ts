class AuthController {
  public static index(req, resp, next) {
    resp.json("Auth controller login url")
  }
}

export default AuthController
