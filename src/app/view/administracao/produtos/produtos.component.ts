import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
