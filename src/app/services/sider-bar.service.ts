import { Injectable } from '@angular/core';
import { HeaderItem } from '../model/header-item';

@Injectable()
export class SiderBarService {
  public Items: HeaderItem[];
  constructor() {
    this.Items = [];
  }

  public setSider(items) {
    this.Items = items;
  }
}
