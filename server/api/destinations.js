const router = require('express').Router();
const { Destination } = require('../db');

router.post('/', (req, res, next) => {
  console.log('req.body', req.body)
  Destination.findOne({
    where: {
      city: req.body.city
    }
  })
    .then(destination => res.json(destination))
    .catch(next);

});

module.exports = router;
