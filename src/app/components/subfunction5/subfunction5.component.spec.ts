import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subfunction5Component } from './subfunction5.component';

describe('Subfunction5Component', () => {
  let component: Subfunction5Component;
  let fixture: ComponentFixture<Subfunction5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subfunction5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subfunction5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
