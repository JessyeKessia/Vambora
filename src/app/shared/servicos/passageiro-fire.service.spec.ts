import { TestBed } from '@angular/core/testing';

import { PassageiroFireService } from './passageiro-fire.service';

describe('PassageiroFireService', () => {
  let service: PassageiroFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassageiroFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
