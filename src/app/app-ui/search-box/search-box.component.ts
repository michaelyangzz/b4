import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#fff',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'gray',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ss = 'inactive';

  ngOnInit() {
  }

  toggle(): void {
    this.ss = this.ss === 'inactive' ? 'active' : 'inactive';
  }
}
