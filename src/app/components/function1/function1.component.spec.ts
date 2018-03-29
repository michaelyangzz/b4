import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Function1Component } from './function1.component';

describe('Function1Component', () => {
  let component: Function1Component;
  let fixture: ComponentFixture<Function1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Function1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Function1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
