import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsCommunicationService } from './products-communication.service';

describe('ProductsCommunicationService', () => {
  let service: ProductsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
