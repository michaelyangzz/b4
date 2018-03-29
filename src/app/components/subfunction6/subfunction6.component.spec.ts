import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction6Component } from './subfunction6.component';

describe('Subfunction6Component', () => {
  let component: Subfunction6Component;
  let fixture: ComponentFixture<Subfunction6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
