import axios from 'axios'

class HttpService {
  private static _singleton: boolean = true;
  private static _instance: HttpService;
  private static _axios: any;

  constructor() {
    if (HttpService._singleton) {
      throw new SyntaxError("This is a singleton class. Please use HttpService.instance instead!");
    }
  }

  public static get instance(): HttpService {
    if (!this._instance) {
      this._singleton = false;
      this._instance = new HttpService();
      this._singleton = true;
      this._axios = axios.create({
        timeout: 1000
      })
    }
    return this._instance;
  }

  public async get(url) {
    try {
      return await HttpService._axios.get(url)
    } catch (err) {
      console.error(`Error getting data from url ${url}`)
    }
  }
}

export default HttpService
