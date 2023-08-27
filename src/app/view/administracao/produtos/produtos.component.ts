import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  products: any[] = [];
  newProduct: any = { name: '', price: '', type: '', image: '' };
  editMode = false;

  constructor(private productService: ProductService, private localStorageService: LocalStorageService){}

  // ngOnInit() {
  //   this.productService.getProducts().subscribe(products => {
  //     this.products = products;
  //   });
  // }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const accessToken = this.localStorageService.getItem('accessToken');
    if (accessToken) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      this.productService.getProducts().subscribe((data: any) => {
        this.products = data;
        console.log(this.products);
      });
    }
  }

  deleteProduct(user: any) {
    const confirmarExclusao = confirm(`Tem certeza de que deseja excluir o usuário ${user.email}?`);
    if (confirmarExclusao) {
      this.productService.deleteProduct(user.id).subscribe(
        () => {
          this.loadUsers();
        },
        error => {
          console.error('Erro ao excluir produto:', error);
        }
      );
    }
  }
  

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.loadUsers();
      this.newProduct = { name: '', price: '', type: '', image: '' };      
    });
  }

  editProduct(product: any) {
    console.log('Editing products:', product);
    const productToEdit = { ...this.products };
    this.newProduct = productToEdit;
    this.editMode = true;
  }
  
  saveEdit() {
    console.log('Saving edited product:', this.newProduct);
    this.productService.updateProduct(this.newProduct).subscribe(() => {
      this.loadUsers();
      this.newProduct =  { name: '', price: '', type: '', image: '' };
      this.editMode = false;
    });
  }
}
