import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.productService.getProducts(headers).subscribe(data => {
        this.products = data;
      });
    }
  }
}
