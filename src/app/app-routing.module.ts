import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo2Component} from './components/demo2/demo2.component';
import { Subfunction1Component } from './components/subfunction1/subfunction1.component';
import { Subfunction2Component } from './components/subfunction2/subfunction2.component';
import { Subfunction3Component } from './components/subfunction3/subfunction3.component';
import { Subfunction4Component } from './components/subfunction4/subfunction4.component';
import { Subfunction5Component } from './components/subfunction5/subfunction5.component';
import { Subfunction6Component } from './components/subfunction6/subfunction6.component';
import { Subfunction7Component } from './components/subfunction7/subfunction7.component';
import { Function1Component } from './components/function1/function1.component';
import { Function2Component } from './components/function2/function2.component';
import { Function3Component } from './components/function3/function3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demo1', component: DemoComponent },
  { path: 'demo2', component: Demo2Component },
  { path: 'subfunction1', component: Subfunction1Component },
  { path: 'subfunction2', component: Subfunction2Component },
  { path: 'subfunction3', component: Subfunction3Component },
  { path: 'subfunction4', component: Subfunction4Component },
  { path: 'subfunction5', component: Subfunction5Component },
  { path: 'subfunction6', component: Subfunction6Component },
  { path: 'subfunction7', component: Subfunction7Component },
  { path: 'function1', component: Function1Component },
  { path: 'function2', component: Function2Component },
  { path: 'function3', component: Function3Component },
  {
    path: 'usermanager',
    loadChildren: 'app/modules/usermanager/usermanager.module#UsermanagerModule'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
