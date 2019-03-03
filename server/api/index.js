const router = require('express').Router();

router.use('/questions', require('./questions'));
router.use('/booking', require('./booking'));
router.use('/destinations', require('./destinations'));

module.exports = router;
