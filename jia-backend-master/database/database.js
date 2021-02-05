const Sequelize = require('sequelize');

// ! update DB
const db = new Sequelize('JIA', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => console.log("Connected to the Database"))
  .catch(err => console.log("Error...",err))

module.exports = db