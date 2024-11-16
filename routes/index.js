const express = require('express');
const router = express.Router();

const {
    getMovies,

} = require('../controllers/movies.controller');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', getMovies)

module.exports = router;
