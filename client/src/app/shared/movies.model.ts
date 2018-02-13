export class movie {
  vote_count: Number;
  id: Number;
  video: String;
  vote_average: Number;
  title: String;
  popularity: Number;
  poster_path: String;
  original_language: String;
  original_title: String;
  genre_ids: [String];
  backdrop_path: String;
  adult: Boolean;
  overview: String;
  release_date: String;


  // tslint:disable-next-line:max-line-length
  constructor(vote_count: Number, id: Number, video: String, vote_average: Number, title: String, popularity: Number, poster_path: String, original_language: String, original_title: String, genre_ids: [String], backdrop_path: String, adult: Boolean, overview: String, release_date: String) {

    this.vote_count = vote_count;
    this.id = id;
    this.video = video;
    this.vote_average = vote_average;
    this.title = title;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.original_language = original_language;
    this.genre_ids = genre_ids;
    this.backdrop_path = backdrop_path;
    this.adult = adult;
    this.overview = overview;
    this.release_date = release_date;

    console.log(this)
    }


}

