import { Component, OnInit } from '@angular/core';
import { BusyService } from '../services/busy.service';
import { SiderBarService } from '../services/sider-bar.service';
import { Router, NavigationStart } from '@angular/router';
import { pipe } from 'rxjs/util/pipe';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { HeaderItem, ConvertViewModel, HeaderEntity } from '../model/header-item';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  HeaderItems = ConvertViewModel(HeaderEntity.list);
  constructor(public busy: BusyService, public sidersbarservice: SiderBarService) { }

  ngOnInit() {
    this.initialMobileFlag();
  }

  initialMobileFlag() {
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.sidersbarservice.isMobile = true;
    } else if (/Chrome/i.test(ua)) {

    } else {

    }
  }
}
