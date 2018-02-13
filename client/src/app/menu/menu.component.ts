import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movieModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  catalogue: Movie[];
  constructor(public movieService: MovieService) {
    this.catalogue = new Array;
  }

  ngOnInit() {


    let streamData;

    this.movieService.getAll().then(result => {
      (result as Movie[]).map(movie => this.catalogue.push(movie as Movie));

    });
    // streamData=result.toString()).catch(err=> console.log(err)).then(streamData.map(function(currentValue, index, arr){

    //   let newMovie = new Movie(currentValue.vote_count,currentValue.id,currentValue.video,currentValue.vote_average,currentValue.title,currentValue.popularity,currentValue.poster_path,currentValue.original_Language,currentValue.original,currentValue.genre_ids,currentValue.backdrop_path,currentValue.adult,currentValue.overview,currentValue.release_date,currentValue.fileName);
    //   this.catalogue.push(newMovie)
    // }))
  }
}
