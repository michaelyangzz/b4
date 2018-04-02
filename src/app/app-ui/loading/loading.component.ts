import { Component, OnInit } from '@angular/core';
import { BusyService } from '../../services/busy.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public busy: BusyService) { }

  ngOnInit() {
  }

}
