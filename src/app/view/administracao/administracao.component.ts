import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {
  users: any[] = [];
  products: any[] = [];

  constructor(
    private http: HttpClient,
    private productService: ProductService // Inyecta ProductService en el constructor
  ) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/users')
      .subscribe(users => {
        this.users = users;
      });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
