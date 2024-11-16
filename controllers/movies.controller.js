const Movie = require('../models/Movie.model');

exports.getMovies = (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies', { movies })
    })
    .catch(err => console.error(err));
}