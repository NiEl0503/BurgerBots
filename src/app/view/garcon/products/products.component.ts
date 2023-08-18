import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { ProductsCommunicationService } from '../../../services/products-communication/products-communication.service';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() customerName: string = '';
  @Input() customerTable: string = '';
  showBreakfastContainer = false;
  showMainMenuContainer = false;
  selectedProducts: any[] = [];
  atLeastOneProductSelected: boolean = false;

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
      this.checkProductsSelected();
    });
  }

  selectProduct(product: any) {
    this.productsCommunicationService.addSelectedProduct(product);
    this.checkProductsSelected();
  }
  
  removeSelectedProduct(product: any) {
    this.productsCommunicationService.removeSelectedProduct(product);
    this.checkProductsSelected();
  }

  calculateTotal(): number {
    let total = 0;
  
    for (const product of this.selectedProducts) {
      total += product.price * product.quantity;
    }
  
    return total;
  }

  checkProductsSelected() {
    this.atLeastOneProductSelected = this.selectedProducts.length > 0;
  }
  
  enviarPedido() {
    if (this.atLeastOneProductSelected) {
      const selectedProducts = this.selectedProducts;
    
      this.productsCommunicationService.setCustomerInfo(this.customerName, this.customerTable);
    
      this.productsCommunicationService.enviarPedidoACocina();
    
      this.productsCommunicationService.clearSelectedProducts();
    
      this.customerName = '';
      this.customerTable = '';
    } else {
      console.error('Você deve escolher pelo menos um produto antes de enviar o pedido');
    }
  }
}
