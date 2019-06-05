var express = require('express');
var Tekst = require('../models/tekstovi');

var router = express.Router();

router.get('/', (req, res) => {
  Tekst.retrieveAll((err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.get('/:tekst', (req, res) => {
  var tekst = req.params.tekst;
  Tekst.retrieveTekstByTekst(tekst, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.post('/', (req, res) => {
  var tekst = req.body.tekst;

  Tekst.insert(tekst, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;