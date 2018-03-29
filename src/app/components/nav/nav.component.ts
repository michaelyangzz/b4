import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuViewModel } from '../../model/menu-view-model';
import { BusyService } from '../../services/busy.service';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  topmenus: MenuViewModel[];
  navbarShow = false;
  constructor(private route: Router, private busy: BusyService) { }

  ngOnInit() {
    this.topmenus = MenuViewModel.items;
  }
  clicktopmenu(item: MenuViewModel): void {
    this.topmenus.forEach(function (value) {
      value.isActive = false;
    });
    item.isActive = true;
    if (item.path) {
      this.navbarShow = false;
      this.route.navigate([item.path]);
    }
  }

  clicksecondmenu(item: MenuViewModel): void {
    this.navbarShow = false;
    this.route.navigate([item.path]);
  }

  togglenavbar(): void {
    this.navbarShow = this.navbarShow ? false : true;
  }

  clicknavi(path: string) {
    event.preventDefault();
    this.navbarShow = false;
    this.topmenus.forEach(function (value) {
      value.isActive = false;
    });
    this.topmenus[0].isActive = true;
    this.route.navigate([path]);
  }

  search() {
    this.busy.startBusy();
    of([]).pipe(delay(1000)).subscribe(x => this.busy.done());
  }
}
