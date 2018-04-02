import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { BusyService } from '../../services/busy.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private alertService: AlertService, private busys: BusyService) { }

  ngOnInit() {
  }

  test() {
    this.alertService.forsure('您确认要删除这些数据吗，确认吗?  ', null,
      () => {
        this.busys.startBusy();
        const timeid = setTimeout(() => {
          this.busys.done();
          clearTimeout(timeid);
        }, 3000);
      });
  }
}
