import { TestBed } from '@angular/core/testing';

import { ClasiAppService } from './clasi-app.service';

describe('ClasiAppService', () => {
  let service: ClasiAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasiAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
