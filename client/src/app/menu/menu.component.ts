import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service'
import { Movie } from '../shared/models/movieModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  catalogue: Movie[]
  
  rows: [Movie[]]

  constructor(public movieService: MovieService) { 
    this.catalogue = new Array;
    this.rows = [[]];
    

  }

  ngOnInit() {

    let streamData;
    let index=0;
    let row=[];
    let count=0;
    this.movieService.getAll().then(result=> {
      count=(result as Movie[]).length;
      (result as Movie[]).map(movie=>{
        
        this.catalogue.push(movie as Movie);
        row.push(movie as Movie);
        index++;
        count--;
        if(index==4||count==0){
          this.rows.push(row);
          row=[];
          index=0;
        }
        
      });
      console.log(this.rows)
    });

  }


}
