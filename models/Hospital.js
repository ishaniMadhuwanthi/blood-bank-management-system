const Sequelize = require('sequelize')
const db = require('../database/db.js')

sequelize
  .query('SHOW Tables', {
    type: sequelize.QueryTypes.SHOWTABLES
  })
  .then(result => {
   
  })

module.exports = db.sequelize.define(
  'hospital',
  {
    
    hospital_name: {
      type: Sequelize.STRING
    },
    district: {
      type: Sequelize.STRING
    }
    
  },
  {
    timestamps: false
  }
)