import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL: string = "https://burger-queen-api-mock-mauve.vercel.app";
    private readonly ACCESSTOKEN = localStorage.getItem('accessToken');
  private readonly HEADERS = new HttpHeaders().set('Authorization', `Bearer ${this.ACCESSTOKEN}`);
  private readonly OPTIONS = { headers: this.HEADERS };

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {
    const accessToken = this.localStorageService.getItem('accessToken');
    this.HEADERS = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    this.OPTIONS = { headers: this.HEADERS };
  }

  getusers(): Observable<any> {
    return this.http.get(`${this.URL}/users`, this.OPTIONS);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.URL}/users/${userId}`, this.OPTIONS);
  }
  
  addUser(newUser: any) {
    return this.http.post(`${this.URL}/users`, newUser, this.OPTIONS);
  }

  updateUser(user: any) {
    return this.http.patch(`${this.URL}/users/${user.id}`, user, this.OPTIONS);
  }
  
}


