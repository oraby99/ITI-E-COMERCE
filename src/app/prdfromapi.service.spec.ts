import { TestBed } from '@angular/core/testing';

import { PrdfromapiService } from './prdfromapi.service';

describe('PrdfromapiService', () => {
  let service: PrdfromapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdfromapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
