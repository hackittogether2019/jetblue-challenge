const router = require('express').Router();

const bestFareFinderURL = 'https://www.jetblue.com/best-fare-finder';

router.get('/', (req, res) => {
  try {
    res.redirect(bestFareFinderURL);
  } catch (error) {
    console.log('Booking Page Not Found:', error);
    res.sendStatus(404);
  }
});

module.exports = router;
