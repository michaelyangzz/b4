import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule
  ],
  declarations: [SearchBoxComponent, AlertComponent, LoadingComponent, TableComponent],
  exports: [SearchBoxComponent, AlertComponent, LoadingComponent, TableComponent]
})
export class AppUiModule { }
