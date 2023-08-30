import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsCommunicationService } from '../../../services/products-communication/products-communication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsCommunicationService: ProductsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [FormsModule,HttpClientTestingModule],
      providers: [ProductsCommunicationService]
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productsCommunicationService = TestBed.inject(ProductsCommunicationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.showBreakfastContainer).toBeFalsy();
    expect(component.showMainMenuContainer).toBeFalsy();
    expect(component.selectedProducts).toEqual([]);
    expect(component.atLeastOneProductSelected).toBeFalsy();
    expect(component.products).toEqual([]);
  });

  it('should select a product', () => {
    const mockProduct = { name: 'Product 1', price: 10 };
    spyOn(productsCommunicationService, 'addSelectedProduct');
    
    component.selectProduct(mockProduct);

    expect(productsCommunicationService.addSelectedProduct).toHaveBeenCalledWith(mockProduct);
  });

  it('should remove a selected product', () => {
    const mockProduct = { name: 'Product 1', price: 10 };
    spyOn(productsCommunicationService, 'removeSelectedProduct');
    
    component.removeSelectedProduct(mockProduct);

    expect(productsCommunicationService.removeSelectedProduct).toHaveBeenCalledWith(mockProduct);
  });

  it('should calculate the total', () => {
    component.selectedProducts = [
      { name: 'Product 1', price: 10, quantity: 2 },
      { name: 'Product 2', price: 20, quantity: 1 }
    ];

    const total = component.calculateTotal();

    expect(total).toBe(40);
  });

  it('should check if products are selected', () => {
    component.selectedProducts = [{ name: 'Product 1' }];

    component.checkProductsSelected();

    expect(component.atLeastOneProductSelected).toBeTruthy();
  });
});
