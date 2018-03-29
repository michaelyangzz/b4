import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionMangeComponent } from './permission-mange.component';

describe('PermissionMangeComponent', () => {
  let component: PermissionMangeComponent;
  let fixture: ComponentFixture<PermissionMangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionMangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
