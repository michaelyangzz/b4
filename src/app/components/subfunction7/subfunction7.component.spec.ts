import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction7Component } from './subfunction7.component';

describe('Subfunction7Component', () => {
  let component: Subfunction7Component;
  let fixture: ComponentFixture<Subfunction7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
