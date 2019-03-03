<<<<<<< HEAD
const Sequelize = require('sequelize');
const db = require('./db');
=======
const Sequelize = require("sequelize");
const db = require("./db");
>>>>>>> 85058d1889351dbdc6468a500c0b091bbb175044

const Choice = db.define("choices", {
  label: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  value: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
});

module.exports = Choice;
