import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule
  ],
  declarations: [SearchBoxComponent],
  exports: [SearchBoxComponent]
})
export class AppUiModule { }
