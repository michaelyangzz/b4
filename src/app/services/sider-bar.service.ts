import { Injectable } from '@angular/core';
import { HeaderItem, HeaderEntity } from '../model/header-item';

@Injectable()
export class SiderBarService {
  public Items: HeaderItem[];
  public Breads: string[];
  public isMobile = false;
  public showSider = true;
  constructor() {
    this.Items = [];
    this.Breads = [];
  }

  public setSider(items) {
    this.Items = items;
    this.showSider = true;
  }

  public setBreadPub(item) {
    if (item.parentId == null) {
      this.Breads.push(item.name);
    } else {
      const pa = HeaderEntity.list.find(x => x.id === item.parentId);
      this.setBreadPub(pa);
      this.Breads.push(item.name);
    }
  }
}
