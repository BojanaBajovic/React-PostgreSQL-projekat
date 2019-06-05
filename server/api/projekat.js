var express = require('express');
var Projekat = require('../models/projekat');

var router = express.Router();

router.get('/', (req, res) => {
  Projekat.retrieveAll((err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.get('/:title', (req, res) => {
  var title = req.params.title;
  Projekat.retrieveProjekatByTitle(title, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.get('/:content', (req, res) => {
    var content = req.params.content;
    Projekat.retrieveProjekatByContent(content, (err, result) => {
      if (err)
        return res.json(err);
      return res.json(result);
    });
  });

router.post('/', (req, res) => {
  var title = req.body.title;
  var content = req.body.content;
  
  Projekat.insert(title, content, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;