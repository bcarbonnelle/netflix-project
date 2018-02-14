import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { Movie } from '../shared/models/movieModel';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
 
  movie: Movie ;
  constructor(private route: ActivatedRoute ) {
    var snapshot = route.snapshot;

  
  }

  ngOnInit() {
    console.log(this.route.data)
     if(!this.movie){
            this.movie =this.route.data['value']['movie'];
    }
    
    
  }

}
