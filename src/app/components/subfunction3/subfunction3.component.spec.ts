import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction3Component } from './subfunction3.component';

describe('Subfunction3Component', () => {
  let component: Subfunction3Component;
  let fixture: ComponentFixture<Subfunction3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
