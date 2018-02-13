import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movieModel';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {
  @Input() movie:Movie;
  constructor() { }

  ngOnInit() {
  }

}
