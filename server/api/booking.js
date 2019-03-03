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

router.post('/', (req, res) => {
  const origin = req.body.origin;
  const destination = req.body.destination;
  try {
    if (origin.length && destination.length) {
      res.redirect(
        `https://book.jetblue.com/B6/webqtrip.html?searchType=NORMAL&fareFamily=LOWESTFARE&origin=${origin}&destination=${destination}&journeySpan=OW&source=GoogleFlights&referrerCode=GOOGLEFLIGHTS`
      );
    } else {
      res.redirect(bestFareFinderURL);
    }
  } catch (error) {
    console.log('Posting trip failed: ', error);
    res.sendStatus(404);
  }
});

module.exports = router;
