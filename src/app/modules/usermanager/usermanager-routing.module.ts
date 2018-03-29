import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UmHomeComponent } from './components/um-home/um-home.component';
import { ScoreManageComponent } from './components/score-manage/score-manage.component';
import { CreditManageComponent } from './components/credit-manage/credit-manage.component';
import { PermissionMangeComponent } from './components/permission-mange/permission-mange.component';
import { GroupManageComponent } from './components/group-manage/group-manage.component';

const routes: Routes = [
  {
    path: '',
    component: UmHomeComponent
  },
  {
    path: 'scoreManage',
    component: ScoreManageComponent
  },
  {
    path: 'creditManage',
    component: CreditManageComponent
  },
  {
    path: 'permissionMange',
    component: PermissionMangeComponent
  },
  {
    path: 'groupManage',
    component: GroupManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagerRoutingModule { }
