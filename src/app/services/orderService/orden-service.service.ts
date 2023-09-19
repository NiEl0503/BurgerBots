import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly URL: string = "https://burger-queen-api-mock-mauve.vercel.app";
  private readonly ACCESSTOKEN = localStorage.getItem('accessToken');

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService, private readonly router: Router
  ) {}

  private getOptions(): { headers: HttpHeaders } {
    const accessToken = this.localStorageService.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return { headers };
  }

  getOrders(): Observable<any[]> {
    if (this.ACCESSTOKEN === null) {
      this.router.navigate(["/"])
      return new Observable<any>;
    }
    const options = this.getOptions();
    return this.http.get<any[]>(`${this.URL}/orders`, options);
  }

  updateOrder(order: any): Observable<any[]> {
    const options = this.getOptions();
    return this.http.patch<any[]>(`${this.URL}/orders/${order.id}`, order, options);
  }
}

