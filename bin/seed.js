#!/usr/bin/env node

const {db, Question, Choice, Destination} = require('../server/db')
const questions = require('../data/questions.json')
const destinations = require('../data/destinations.json')


const seed = async () => {
  await db.sync({force: true})

  await Promise.all(destinations.map(async dest => {
    await Destination.create(dest)
  }))

  await Promise.all(questions.map(async qData => {
    const question = await Question.create({name: qData.name})
    await Promise.all(qData.choices.map(async cData => {
      const choice = await Choice.create(cData)
      await choice.setQuestion(question)
    }))
  }))

  db.close()
  console.log(`

    Seeding successful!
    Time to do stuff!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
