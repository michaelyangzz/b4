import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';
@Injectable()
export class LeftbarService {
  public leftsize = null;
  public rightsize = 'col-md-12';
  public isNeeded = false;
  public items: Menu[];
  public currentBread: string[];
  private preleft: number;
  constructor() { }

  public destroyLeft() {
    this.leftsize = null;
    this.rightsize = 'col-md-12';
    this.isNeeded = false;
    this.preleft = 0;
  }

  public setleft(s: number) {
    if (s > 0 && s < 12) {
      this.isNeeded = true;
      this.leftsize = 'col-md-' + s;
      this.rightsize = 'col-md-' + (12 - s);
      this.preleft = s;
    }
  }

  public toggleside() {
    if (this.leftsize) {
      this.leftsize = null;
      this.rightsize = 'col-md-12';
    } else {
      this.setleft(this.preleft > 0 ? this.preleft : 1);
    }
  }
}
