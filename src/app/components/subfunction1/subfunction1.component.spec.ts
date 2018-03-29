import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction1Component } from './subfunction1.component';

describe('Subfunction1Component', () => {
  let component: Subfunction1Component;
  let fixture: ComponentFixture<Subfunction1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
