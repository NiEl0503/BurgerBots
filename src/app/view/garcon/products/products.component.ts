import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { ProductsCommunicationService } from '../../../services/products-communication/products-communication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showBreakfastContainer = false;
  showMainMenuContainer = false;
  selectedProducts: any[] = [];

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    private productsCommunicationService: ProductsCommunicationService
  ) { }

  ngOnInit() {
    const accessToken = this.localStorageService.getItem('accessToken');
    if (accessToken) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
    }

    this.productsCommunicationService.showBreakfast$.subscribe(value => {
      this.showBreakfastContainer = value;
    });

    this.productsCommunicationService.showMainMenu$.subscribe(value => {
      this.showMainMenuContainer = value;
    });

    this.productsCommunicationService.selectedProductsSubject.subscribe(products => {
      this.selectedProducts = products;
    });
  }

  selectProduct(product: any) {
    this.productsCommunicationService.addSelectedProduct(product);
  }

  removeSelectedProduct(product: any) {
    this.productsCommunicationService.removeSelectedProduct(product);
  }
}
