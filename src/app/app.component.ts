import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  left = "10px";
  top = "199px";

  ss(e): void {
    this.left = e.pageX + "px";
    this.top = e.pageY + "px";
  }

  sss(e): void {
    this.left = e.pageX + "px";
    this.top = e.pageY + "px";
  }
}
