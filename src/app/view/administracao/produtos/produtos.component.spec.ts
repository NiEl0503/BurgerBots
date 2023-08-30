import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProdutosComponent } from './produtos.component';
import { ProductService } from '../../../services/product/product.service';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ProductService, LocalStorageService],
    });
    fixture = TestBed.createComponent(ProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create and load products', () => {
    expect(component).toBeTruthy();
    const productService = TestBed.inject(ProductService);
    spyOn(productService, 'getProducts').and.returnValue(of([{ id: 1, name: 'Product 1' }]));
    
    component.ngOnInit();
    expect(component.products.length).toBe(1);
    expect(productService.getProducts).toHaveBeenCalled();
  });
  
  it('should delete a product', () => {
    const productService = TestBed.inject(ProductService);
    spyOn(productService, 'getProducts').and.returnValue(of([{ id: 1, name: 'Product 1' }]));
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(productService, 'deleteProduct').and.returnValue(of({}));
    
    component.loadUsers();
    component.deleteProduct({ id: 1, name: 'Product 1' });
    
    expect(productService.deleteProduct).toHaveBeenCalledWith(1);
    expect(productService.getProducts).toHaveBeenCalled();
  });
  
  it('should add a product', () => {
    const productService = TestBed.inject(ProductService);
    spyOn(productService, 'getProducts').and.returnValue(of([]));
    spyOn(productService, 'addProduct').and.returnValue(of({}));
    
    component.addProduct();
    
    expect(productService.addProduct).toHaveBeenCalledWith(component.newProduct);
    expect(productService.getProducts).toHaveBeenCalled();
    expect(component.newProduct).toEqual({ name: '', price: '', type: '', image: '' });
  });

  it('should edit a product', () => {
    const product = { id: 1, name: 'Product 1', price: 10, type: 'Type 1', image: 'image.jpg' };
    
    component.editProduct(product);
    
    expect(component.editMode).toBe(true);
    expect(component.newProduct).toEqual(product);
  });

  it('should save edited product', () => {
    const productService = TestBed.inject(ProductService);
    spyOn(productService, 'getProducts').and.returnValue(of([]));
    spyOn(productService, 'updateProduct').and.returnValue(of({}));
    
    component.saveEdit();
    
    expect(productService.updateProduct).toHaveBeenCalledWith(component.newProduct);
    expect(productService.getProducts).toHaveBeenCalled();
    expect(component.newProduct).toEqual({ name: '', price: '', type: '', image: '' });
    expect(component.editMode).toBe(false);
  });
  

});
