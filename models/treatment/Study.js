let db = require('../../database/database')

const { Sequelize } = require('sequelize');
const Treatment = require('./Treatment')

let Study = db.define('studies', {
  name: {
    type: Sequelize.STRING
  },
  does_work: {
    type: Sequelize.STRING(512),
    allowNull: false
  },
  is_safe: {
    type: Sequelize.STRING(512),
    allowNull: false
  },
  believe_research: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  rating: {
    type: Sequelize.TINYINT,
    // allowNull: false
  },
  methods: {
    type: Sequelize.STRING(1024)
  },
  treatments: {
    type: Sequelize.STRING(1024)
  },
  treatment_results: {
    type: Sequelize.STRING(1024)
  },
  reference: {
    type: Sequelize.STRING(1024)
  },
  pubMed: {
    type: Sequelize.STRING
  },
  treatment_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Treatment,
      key: 'id',
    }
  },
}, {
  underscored: true
})

Treatment.hasMany(Study);
Study.belongsTo(Treatment);

module.exports = Study