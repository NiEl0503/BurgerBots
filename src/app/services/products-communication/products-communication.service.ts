import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsCommunicationService {
  private showBreakfastSource = new BehaviorSubject<boolean>(false);
  showBreakfast$ = this.showBreakfastSource.asObservable();

  private showMainMenuSource = new BehaviorSubject<boolean>(false);
  showMainMenu$ = this.showMainMenuSource.asObservable();

  private selectedProducts: any[] = [];
  private selectedProductsSource = new BehaviorSubject<any[]>([]);
  selectedProductsSubject: BehaviorSubject<any[]> = this.selectedProductsSource;
  private customerInfo: { name: string, table: string } = { name: '', table: '' };

  setCustomerInfo(name: string, table: string) {
    this.customerInfo = { name, table };
  }

  getCustomerInfo() {
    return this.customerInfo;
  }

  constructor(private http: HttpClient) { }
  enviarPedidoACocina() {
    const pedido = {
      customerInfo: this.customerInfo,
      selectedProducts: this.selectedProducts
    };

    this.http.post<any>('http://localhost:4200/cozi', pedido)
      .subscribe(
        response => {
          console.log('Pedido enviado para a cozinha:', response);
        },
        error => {
          console.error('Erro ao enviar o pedido para a cozinha:', error);
        }
      );
  }

  setShowBreakfast(value: boolean) {
    this.showBreakfastSource.next(value);
  }

  setShowMainMenu(value: boolean) {
    this.showMainMenuSource.next(value);
  }

  addSelectedProduct(product: any) {
    const existingProduct = this.selectedProducts.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.selectedProducts.push({ ...product, quantity: 1 });
    }

    this.selectedProductsSource.next(this.selectedProducts);
  }

  removeSelectedProduct(product: any) {
    const existingProductIndex = this.selectedProducts.findIndex(p => p.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedSelectedProducts = [...this.selectedProducts];
      updatedSelectedProducts[existingProductIndex].quantity--;

      if (updatedSelectedProducts[existingProductIndex].quantity === 0) {
        updatedSelectedProducts.splice(existingProductIndex, 1);
      }

      this.selectedProducts = updatedSelectedProducts;
      this.selectedProductsSource.next(updatedSelectedProducts);
    }
  }

}
