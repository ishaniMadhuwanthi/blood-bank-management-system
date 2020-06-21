const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    NIC: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATE
    },
    sex: {
      type: Sequelize.STRING
    },
    blood_group: {
      type: Sequelize.STRING
    },
    tp_no: {
      type: Sequelize.INTEGER
    },

    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)