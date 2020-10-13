var express = require('express');
var router = express.Router();
var allCats = require('../assets/cats.json');

const getRandomCat = (cats) => {
  const randomCatIndex = Math.floor(Math.random() * cats.length);
  return cats[randomCatIndex];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const randomCat = getRandomCat(allCats);
  res.json(randomCat);
});

module.exports = router;
