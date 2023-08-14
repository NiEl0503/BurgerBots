import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

fdescribe('LoginService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: LoginService;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        LoginService
      ]
    });
    // service = TestBed.inject(LoginService);
    service = new LoginService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
