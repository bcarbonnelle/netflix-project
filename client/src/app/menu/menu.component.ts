import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { MovieService } from '../shared/movie.service'
import { Movie } from '../shared/models/movieModel';
>>>>>>> 68af1d27d4730dcf48f844895f5552ad0d12d79e

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
<<<<<<< HEAD

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http
    .get('http://localhost:8069/api/movies')
    .toPromise()
    .then(result => console.log(result[0]))
    .catch(err => console.log(err));
  }
=======
  catalogue: Movie[]
  constructor(public movieService: MovieService) { 
    this.catalogue = new Array;
  }

  ngOnInit() {


    let streamData;

    this.movieService.getAll().then(result => {
      (result as Movie[]).map(movie =>this.catalogue.push(movie as Movie))

    });
    // streamData=result.toString()).catch(err=> console.log(err)).then(streamData.map(function(currentValue, index, arr){

    //   let newMovie = new Movie(currentValue.vote_count,currentValue.id,currentValue.video,currentValue.vote_average,currentValue.title,currentValue.popularity,currentValue.poster_path,currentValue.original_Language,currentValue.original,currentValue.genre_ids,currentValue.backdrop_path,currentValue.adult,currentValue.overview,currentValue.release_date,currentValue.fileName);
    //   this.catalogue.push(newMovie)
    // }))
  }


>>>>>>> 68af1d27d4730dcf48f844895f5552ad0d12d79e
}
