import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DemoComponent } from './components/demo/demo.component';
import { IfDataToggleDirective } from './directives/if-data-toggle.directive';
import { BusyService } from './services/busy.service';
import { SiderBarService } from './services/sider-bar.service';
import { BreadComponent } from './components/bread/bread.component';
import { Demo2Component } from './components/demo2/demo2.component';
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
import { App2Component } from './app2/app2.component';
import { Nav2Component } from './nav2/nav2.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppUiModule } from './app-ui/app-ui.module';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    DemoComponent,
    IfDataToggleDirective,
    BreadComponent,
    Demo2Component,
    Subfunction1Component,
    Subfunction2Component,
    Subfunction3Component,
    Subfunction4Component,
    Subfunction5Component,
    Subfunction6Component,
    Subfunction7Component,
    Function1Component,
    Function2Component,
    Function3Component,
    App2Component,
    Nav2Component,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, NoopAnimationsModule, AppUiModule
  ],
  providers: [BusyService, SiderBarService],
  bootstrap: [App2Component]
})
export class AppModule { }
