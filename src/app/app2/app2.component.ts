import { Component, OnInit } from '@angular/core';
import { BusyService } from '../services/busy.service';
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
  breadItems = ['功夫熊猫', '我方深刻', '士大', '士大', '士大'];
  constructor(private busy: BusyService) { }

  ngOnInit() {
  }

}
