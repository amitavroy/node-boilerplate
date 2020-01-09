import axios from 'axios'

class FakeDataService {
  private static _singleton: boolean = true;
  private static _instance: FakeDataService;

  constructor() {
    if (FakeDataService._singleton) {
      throw new SyntaxError("This is a singleton class. Please use FakeDataService.instance instead!");
    }
  }

  public static get instance(): FakeDataService {
    if (!this._instance) {
      this._singleton = false;
      this._instance = new FakeDataService();
      this._singleton = true;
    }
    return this._instance;
  }

  public async getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
}

export default FakeDataService
