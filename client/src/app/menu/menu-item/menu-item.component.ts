<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/models/movieModel';
>>>>>>> 68af1d27d4730dcf48f844895f5552ad0d12d79e

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
<<<<<<< HEAD

=======
  @Input() movie: Movie;
>>>>>>> 68af1d27d4730dcf48f844895f5552ad0d12d79e
  constructor() { }

  ngOnInit() {
  }

}
