import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeftbarService } from './services/leftbar.service';
import { BusyService } from './services/busy.service';
import { Router, NavigationStart } from '@angular/router';
import { pipe } from 'rxjs/util/pipe';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { MenuViewModel } from './model/menu-view-model';
import { Menu } from './model/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  private unsub: Subscription;
  constructor(private leftbar: LeftbarService,
    private router: Router,
    private busy: BusyService) { }

  ngOnInit() {
    this.unsub = this.router.events.pipe(filter(n => n instanceof NavigationStart))
      .subscribe(re => {
        const ree = re as NavigationStart;
        const cumenu = Menu.list.find(m => m.path === ree.url);
        const childs = Menu.list.filter(c => c.parentId === cumenu.id);
        const outp: string[] = [];
        this.getlevel(cumenu, outp);
        this.leftbar.currentBread = outp;
        if (outp.length < 3) {
          if (outp.length === 2 && (Menu.list.find(x => x.id === cumenu.parentId).path != null)) { } else {
            this.leftbar.destroyLeft();
          }
        }
        if (childs.length) {
          this.leftbar.setleft(1);
          this.leftbar.items = childs;
        }
      });
  }

  private getlevel(item: Menu, outp: string[]): void {
    if (item.parentId) {
      this.getlevel(Menu.list.find(x => x.id === item.parentId), outp);
    }
    outp.push(item.name);
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }

  toggleside() {
    this.leftbar.toggleside();
  }

  secondmenuclick(item: MenuViewModel): void {
    this.leftbar.items.forEach(v => v.isActive = false);
    item.isActive = true;
    this.router.navigate([item.path]);
  }
}
