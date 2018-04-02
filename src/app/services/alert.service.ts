import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  public show = false;
  public title: string;
  public body: string;
  public isforsure = false;
  private OkDo;

  constructor() { }

  info(msg: string, title: string) {
    this.show = true;
    this.title = title;
    this.body = msg;
  }

  forsure(msg: string, title: string, dowhat) {
    this.show = true;
    this.title = title;
    this.body = msg;
    this.isforsure = true;
    this.OkDo = dowhat;
  }

  OK() {
    this.OkDo();
    this.close();
  }

  close() {
    this.show = false;
    this.isforsure = false;
  }
}
