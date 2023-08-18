import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orderService/orden-service.service';
import { ProductsCommunicationService } from '../../services/products-communication/products-communication.service';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
}
