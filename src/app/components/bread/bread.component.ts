import { Component, OnInit } from '@angular/core';
import { LeftbarService } from '../../services/leftbar.service';
@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {

  constructor(private bs: LeftbarService) { }

  ngOnInit() {
  }

}
