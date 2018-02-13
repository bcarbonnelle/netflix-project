import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/models/movieModel';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() row: Movie[]
  constructor() { }

  ngOnInit() {
  }

}
