const Sequelize = require('sequelize');

// ! update DB
// const db = new Sequelize('JIA', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

const db = new Sequelize('heroku_32d76f0ab399d58', 'b7fdc8cf25aab7', '9ddf878d', {
  host: 'us-cdbr-east-03.cleardb.com',
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