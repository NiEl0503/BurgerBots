import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService,
    private localStorageService: LocalStorageService,
    // private readonly router: Router
  ) { }

  ngOnInit() {
    const accessToken = this.localStorageService.getItem('accessToken');
    if (accessToken) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
    // } else {
    //   this.router.navigate(['login'])
     }
  }
}