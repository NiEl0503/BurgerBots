import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly URL: string = "http://localhost:8080";
  private readonly ACCESSTOKEN = localStorage.getItem('accessToken');
  private readonly HEADERS = new HttpHeaders().set('Authorization', `Bearer ${this.ACCESSTOKEN}`);
  private readonly OPTIONS = { headers: this.HEADERS };

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {
    const accessToken = this.localStorageService.getItem('accessToken');
    this.HEADERS = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    this.OPTIONS = { headers: this.HEADERS };
  }

  getOrders(): Observable<any[]> {

    return this.http.get<any[]>(`${this.URL}/orders`, this.OPTIONS);
  }

  updateOrder(order: any): Observable<any[]> {
    return this.http.patch<any[]>(`${this.URL}/orders/${order.id}`, order, this.OPTIONS);
  }

}
