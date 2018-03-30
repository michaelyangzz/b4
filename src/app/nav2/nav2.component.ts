import { Component, OnInit, Input } from '@angular/core';
import { HeaderItem } from '../model/header-item';
import { Router } from '@angular/router';
import { BusyService } from '../services/busy.service';
import { SiderBarService } from '../services/sider-bar.service';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {
  @Input() headerItems: HeaderItem[] = [];
  navbarShow = false;
  constructor(private router: Router, private busy: BusyService
    , private siderBar: SiderBarService) { }

  ngOnInit() {
  }
  clickmenu1(item: HeaderItem) {
    if (item.disabled) {
      return;
    }
    // active item
    this.headerItems.forEach(x => x.isActive = false);
    item.isActive = true;

    // hidden nav
    if (item.path) {
      this.navigatortonew(item);
    }
  }

  clickmenu2(item: HeaderItem) {
    if (item.disabled) {
      return;
    }
    // hidden nav
    if (item.path) {
      this.navigatortonew(item);
    }
  }

  private navigatortonew(item: HeaderItem) {
    this.navbarShow = false;
    this.router.navigate([item.path]);
    this.siderBar.setSider(item.childs);
    // this.siderBar.setBreadPub(item);
  }

  private calbread(item: HeaderItem) {

  }

  togglenavbar() {
    this.navbarShow = (this.navbarShow ? false : true);
  }

  search() {
    this.busy.startBusy();
    of([]).pipe(delay(4000)).subscribe(x => this.busy.done());
  }
}
