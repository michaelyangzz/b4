import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagerRoutingModule } from './usermanager-routing.module';
import { UmHomeComponent } from './components/um-home/um-home.component';
import { ScoreManageComponent } from './components/score-manage/score-manage.component';
import { CreditManageComponent } from './components/credit-manage/credit-manage.component';
import { PermissionMangeComponent } from './components/permission-mange/permission-mange.component';
import { GroupManageComponent } from './components/group-manage/group-manage.component';

@NgModule({
  imports: [
    CommonModule,
    UsermanagerRoutingModule
  ],
  declarations: [UmHomeComponent, ScoreManageComponent, CreditManageComponent, PermissionMangeComponent, GroupManageComponent]
})
export class UsermanagerModule { }
