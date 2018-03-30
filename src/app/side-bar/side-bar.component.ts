import { Component, OnInit, Input } from '@angular/core';
import { SiderBarService } from '../services/sider-bar.service';
import { HeaderItem } from '../model/header-item';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  stateDrop = 'inactive';
  constructor(public siderBarService: SiderBarService) { }

  ngOnInit() {
  }
  clickleftitem(item: HeaderItem) {
    if (item.childs.length) {
      item.isOpen = !item.isOpen;
    }

    if (item.path) {

    }
  }
}
