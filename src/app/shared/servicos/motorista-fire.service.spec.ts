import { TestBed } from '@angular/core/testing';

import { MotoristaFireService } from './motorista-fire.service';

describe('MotoristaFireService', () => {
  let service: MotoristaFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotoristaFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
