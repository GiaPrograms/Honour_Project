let db = require('../../database/database')

const { Sequelize } = require('sequelize');
const Study = require('./Study')

let Result = db.define('results', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.TINYINT,
    allowNull: false
  },
  statistics: {
    type: Sequelize.STRING,
    allowNull: false
  },
  study_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Study,
      key: 'id',
    }
  },
}, {
  underscored: true
})

Study.hasMany(Result);
Result.belongsTo(Study);

module.exports = Result