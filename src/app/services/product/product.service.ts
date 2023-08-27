import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URL: string = "http://localhost:8080";
    private readonly ACCESSTOKEN = localStorage.getItem('accessToken');
  private readonly HEADERS = new HttpHeaders().set('Authorization', `Bearer ${this.ACCESSTOKEN}`);
  private readonly OPTIONS = { headers: this.HEADERS };

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {
    const accessToken = this.localStorageService.getItem('accessToken');
    this.HEADERS = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    this.OPTIONS = { headers: this.HEADERS };
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.URL}/products`, this.OPTIONS);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.URL}/products/${productId}`, this.OPTIONS);
  }
  
  addProduct(newPdoduct: any) {
    return this.http.post(`${this.URL}/products`, newPdoduct, this.OPTIONS);
  }

  updateProduct(product: any) {
    return this.http.put(`${this.URL}/products/${product.id}`, product, this.OPTIONS);
  }
}
