import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  selectedProductsSubject = this.selectedProductsSource.asObservable();

  constructor() {}

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
}
