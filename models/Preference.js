let db = require('../database/database')

const { Sequelize } = require('sequelize');

let Preference = db.define('preferences', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recommends: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  left_label: {
    type: Sequelize.STRING,
    allowNull: false
  },
  right_label: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reversed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  threshold: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
}, {
  underscored: true
})

module.exports = Preference