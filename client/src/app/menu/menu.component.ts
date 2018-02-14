import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movieModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  catalogue: Movie[]

  rows: [Movie[]]
  count: Number;
  constructor(public movieService: MovieService) {
    this.catalogue = new Array;
    this.rows = [[]];
    this.count=0;


  }

  ngOnInit() {

    let streamData;
    let index=0;
    let row=[];
    let count;
    this.movieService.getAll().then(result=> {
      count=(result as Movie[]).length;
      (result as Movie[]).map(movie=>{

        this.catalogue.push(movie as Movie);
        row.push(movie as Movie);
        index++;
        count--;
        if (index == 4 || count == 0) {
          this.rows.push(row);
          row = [];
          index = 0;
        }

      });
      this.rows.shift();
      console.log(this.rows)
      sessionStorage.setItem("catalog",JSON.stringify(this.catalogue))
    })

    this.movieService.getNumberOfMovies().then(result =>{
      this.count=(result as Number);
    });




  }
}
