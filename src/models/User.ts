import { Sequelize, Model, DataTypes } from 'sequelize'
import DatabaseService from './../services/DatabaseService'

class User extends Model {
  public id!: number
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  remember_token: {
    type: DataTypes.STRING.length.toFixed(100),
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'users',
  timestamps: false,
  sequelize: DatabaseService.instance.getSequelize()
})

export default User
