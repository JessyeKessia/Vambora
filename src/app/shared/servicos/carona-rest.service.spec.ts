import { TestBed } from '@angular/core/testing';

import { CaronaRestService } from './carona-rest.service';

describe('CaronaRestService', () => {
  let service: CaronaRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaronaRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
