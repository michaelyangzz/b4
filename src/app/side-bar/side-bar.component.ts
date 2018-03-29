import { Component, OnInit, Input } from '@angular/core';
import { SiderBarService } from '../services/sider-bar.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public siderBarService: SiderBarService) { }

  ngOnInit() {
  }

}
