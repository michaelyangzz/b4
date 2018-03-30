import { Component, OnInit } from '@angular/core';
import { BusyService } from '../services/busy.service';
import { SiderBarService } from '../services/sider-bar.service';
import { Router, NavigationStart } from '@angular/router';
import { pipe } from 'rxjs/util/pipe';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { HeaderItem } from '../model/header-item';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  HeaderItems = HeaderItem.list;
  constructor(public busy: BusyService, public sidersbarservice: SiderBarService) { }

  ngOnInit() {
  }
}
