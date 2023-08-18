import { TestBed } from '@angular/core/testing';

import { OrdenServiceService } from './orden-service.service';

describe('OrdenServiceService', () => {
  let service: OrdenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
