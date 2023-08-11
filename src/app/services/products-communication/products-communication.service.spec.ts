import { TestBed } from '@angular/core/testing';

import { ProductsCommunicationService } from './products-communication.service';

describe('ProductsCommunicationService', () => {
  let service: ProductsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
