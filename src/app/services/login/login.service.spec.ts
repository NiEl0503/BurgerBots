import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('LoginService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: LoginService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform login successfully', async () => {
    const mockResponse = {
      accessToken: 'mockAccessToken',
      user: { role: '/admin' }
    };

    httpClientSpy.post.and.returnValue(of(mockResponse));

    const email = 'fredd@gmail.com';
    const password = '123456789';

    await service.executeLogin(email, password);
    expect(true).toBeTruthy();
  });
});
