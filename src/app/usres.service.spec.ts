import { TestBed } from '@angular/core/testing';

import { UsresService } from './usres.service';

describe('UsresService', () => {
  let service: UsresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
