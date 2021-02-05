let db = require('../database/database')

const { Sequelize } = require('sequelize');

let Classification = db.define('classifications', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  section: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  underscored: true
})

module.exports = Classification