import { Injectable } from '@angular/core';

@Injectable()
export class BusyService {
  public busyMessage: string;
  public isBusy: boolean;
  constructor() {
    this.isBusy = false;
    this.busyMessage = '后台运行中....请稍后...';
  }

  public startBusy() {
    this.isBusy = true;
  }

  public startBusyFor(m: string) {
    this.isBusy = true;
    this.busyMessage = m;
  }

  public done() {
    this.isBusy = false;
    this.busyMessage = '后台运行中....请稍后...';
  }
}
