import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppUiModule } from './app-ui/app-ui.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
