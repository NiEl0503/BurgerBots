import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly URL: string = "http://localhost:8080";

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

  private getOptions(): { headers: HttpHeaders } {
    const accessToken = this.localStorageService.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return { headers };
  }

  getOrders(): Observable<any[]> {
    const options = this.getOptions();
    return this.http.get<any[]>(`${this.URL}/orders`, options);
  }

  updateOrder(order: any): Observable<any[]> {
    const options = this.getOptions();
    return this.http.patch<any[]>(`${this.URL}/orders/${order.id}`, order, options);
  }
}

