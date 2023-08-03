import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post('http://localhost:8080/login', {
      email: email,
      password: senha,
    })

  }


}

