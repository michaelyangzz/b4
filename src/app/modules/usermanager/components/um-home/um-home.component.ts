import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusyService } from '../../../../services/busy.service';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-um-home',
  templateUrl: './um-home.component.html',
  styleUrls: ['./um-home.component.css']
})
export class UmHomeComponent {
  constructor(private busy: BusyService) { }

  work() {
    this.busy.startBusy();

    of([]).pipe(delay(200)).subscribe(re => this.busy.done());
  }
}
