const Sequelize = require('sequelize')
require('dotenv').config()

// const database = process.env.DB_NAME
// const user = process.env.DB_U
console.log("**********************************************************8888")
console.log(process.DB_NAME)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// Test Database
sequelize
.authenticate()
.then(() => {
  console.log('---------------------------------------------')
  console.log('Connection has been established successfully.')
  console.log('---------------------------------------------')
})
.catch(err => {
  console.log('---------------------------------------------')
  console.error('Unable to connect to the database:', err)
  console.log('---------------------------------------------')
})

exports.Sequelize = sequelize