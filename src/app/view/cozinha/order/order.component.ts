import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../services/orderService/orden-service.service';
import { ProductsCommunicationService } from '../../../services/products-communication/products-communication.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() orders: any;

  constructor(
    private orderService: OrderService,
    private productsCommunicationService: ProductsCommunicationService
  ) {}

  ngOnInit() {
    this.loadOrders();

    this.productsCommunicationService.newOrder$.subscribe(newOrder => {
      this.orders.push(newOrder);
    });
  }

  private loadOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}
