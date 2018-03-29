import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction4Component } from './subfunction4.component';

describe('Subfunction4Component', () => {
  let component: Subfunction4Component;
  let fixture: ComponentFixture<Subfunction4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
