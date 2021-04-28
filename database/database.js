const Sequelize = require('sequelize');

// ! update DB
// const db = new Sequelize('JIA', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: true,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

const db = new Sequelize('jia-optionmap-database', 'admin', 'admin', {
  host: 'us-mm-dca-ec51fe76a795.g5.cleardb.net',
  dialect: 'mysql',
  logging: true,

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