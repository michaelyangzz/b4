import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule
  ],
  declarations: [SearchBoxComponent, AlertComponent, LoadingComponent],
  exports: [SearchBoxComponent, AlertComponent, LoadingComponent]
})
export class AppUiModule { }
