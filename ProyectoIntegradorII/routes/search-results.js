var express = require('express');
var router = express.Router();

const searchController=require('../controllers//search-resultsController')
router.get('/results', searchController);

module.exports = router;