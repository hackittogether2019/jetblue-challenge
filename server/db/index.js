const db = require('./db')
const Question = require('./Question')
const Choice = require('./Choice')
const Destination = require('./Destination')

Question.hasMany(Choice)
Choice.belongsTo(Question)


module.exports = {
  db,
  Question,
  Choice,
  Destination
}
