import { boolean, date } from '../../../../../../.cache/typescript/2.6/node_modules/@types/joi';

const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    vote_count: {
        type: number
    },
    id: {
        type: number
    },
    video: {
        type: String
    },
    vote_average: {
        type: number
    },
    title: {
        type: String
    },
    popularity: {
        type: number
    },
    poster_path: {
        type: String
    },
    original_language: {
        type: String
    },
    original_title: {
        type: String
    },
    genre_ids: {
        type: String
    },
    backdrop_path: {
        type: String
    },
    adult: {
        type: boolean
    },
    overview: {
        type: String
    },
    release_date: {
        type: date
    }
})

module.exports = mongoose.model('movie',schema)