let db = require('../../database/database')

const { Sequelize } = require('sequelize');
const Treatment = require('./Treatment')

let Study = db.define('studies', {
  name: {
    type: Sequelize.STRING
  },
  fr_name: {
    type: Sequelize.STRING
  },
  does_work: {
    type: Sequelize.STRING(512),
    allowNull: false
  },
  fr_does_work: {
    type: Sequelize.STRING
  },
  is_safe: {
    type: Sequelize.STRING(512),
    allowNull: false
  },
  fr_is_safe: {
    type: Sequelize.STRING
  },
  believe_research: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  fr_believe_research: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.TINYINT,
    // allowNull: false
  },
  methods: {
    type: Sequelize.STRING(1024)
  },
  fr_methods: {
    type: Sequelize.STRING
  },
  treatments: {
    type: Sequelize.STRING(1024)
  },
  fr_treatments: {
    type: Sequelize.STRING(1024)
  },
  treatment_results: {
    type: Sequelize.STRING(1024)
  },
  fr_treatment_results: {
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