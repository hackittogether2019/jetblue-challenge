const Sequelize = require('sequelize');
const db = require('./db');

const Question = db.define('questions', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/beach-600.jpg',
  },
});

module.exports = Question;
