const router = require('express').Router();

router.use('/questions', require('./questions'));
router.use('/booking', require('./booking'));

module.exports = router;
