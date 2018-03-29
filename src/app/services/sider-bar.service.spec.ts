import { TestBed, inject } from '@angular/core/testing';

import { SiderBarService } from './sider-bar.service';

describe('SiderBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiderBarService]
    });
  });

  it('should be created', inject([SiderBarService], (service: SiderBarService) => {
    expect(service).toBeTruthy();
  }));
});
