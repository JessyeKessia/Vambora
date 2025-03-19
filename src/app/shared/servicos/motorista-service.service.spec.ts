import { TestBed } from '@angular/core/testing';

import { MotoristaServiceService } from './motorista-service.service';

describe('MotoristaServiceService', () => {
  let service: MotoristaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotoristaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
