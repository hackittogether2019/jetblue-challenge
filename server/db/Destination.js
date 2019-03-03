const Sequelize = require("sequelize");
const db = require("./db");

const Destination = db.define("destinations", {
  imgUrl: {
    type: Sequelize.STRING,
  },
  airport: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Destination;
