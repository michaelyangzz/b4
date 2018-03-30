import { Injectable } from '@angular/core';
import { HeaderItem } from '../model/header-item';

@Injectable()
export class SiderBarService {
  public Items: HeaderItem[];
  public Breads: string[];
  constructor() {
    this.Items = [];
    this.Breads = [];
  }

  public setSider(items) {
    this.Items = items;
  }

  public setBreadPub(item: HeaderItem) {
    this.Breads = [];
    this.setBread(item);
  }

  private setBread(item: HeaderItem) {
    if (item) {
        this.setBread(item);
    } else {
      this.Breads.push(item.name);
    }
  }
}
