import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
class DatabaseService {
  private static _singleton: boolean = true
  private static _instance: DatabaseService
  private static _sequelize: Sequelize

  constructor() {
    if (DatabaseService._singleton) {
      throw new SyntaxError("This is a singleton class. Please use DatabaseService.instance instead!")
    }
  }

  public static get instance(): DatabaseService {
    if (!this._instance) {
      this._singleton = false
      this._instance = new DatabaseService()
      this._singleton = true

      this._sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
      })

      // this._sequelize.authenticate().then(() => {
      //   console.log('Database connection success')
      //   this._connected = true
      // }).catch(error => {
      //   console.log('Error connecting to the database:', error.parent.sqlMessage)
      //   // Need to redirect to error page
      // })
    }
    return this._instance
  }

  public static getConnect() {
    return this._sequelize
  }

  public getSequelize() {
    return DatabaseService._sequelize
  }

  public async getDbUsers() {
    const sequelize = DatabaseService.getConnect()
    const result = await sequelize.query("SELECT * FROM users LIMIT 3")
    return result
  }
}

export default DatabaseService
