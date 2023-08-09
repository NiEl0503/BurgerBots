import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URL: string = "http://localhost:8080";

  constructor(private readonly http: HttpClient) { }

  getProducts(headers: HttpHeaders): Observable<any> {
    const options = { headers: headers };
    return this.http.get(`${this.URL}/products`, options);
  }
}
