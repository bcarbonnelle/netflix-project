const mongoose = require('mongoose')
const movie = mongoose.model('movie')
const promisify = require('es6-promisify')

exports.getMovies = async ()=> {
    const lst = await movie.find();


    // return lst;
}
exports.getMovieById= (id)=> {
    
}