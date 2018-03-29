import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction2Component } from './subfunction2.component';

describe('Subfunction2Component', () => {
  let component: Subfunction2Component;
  let fixture: ComponentFixture<Subfunction2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
