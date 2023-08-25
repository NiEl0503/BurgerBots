import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../services/orderService/orden-service.service';
import { ProductsCommunicationService } from '../../../services/products-communication/products-communication.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];


  constructor(
    private orderService: OrderService,
    private productsCommunicationService: ProductsCommunicationService
  ) { }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {

    this.orderService.getOrders().subscribe(data => {
      data.map(pedido => pedido.currentStatus = pedido.status)
      console.log(data);
      this.orders = data;
      console.log(this.orders);

    });
  }

  updateOrder(pedido: any) {
   this.orderService.updateOrder(pedido).subscribe(data => {
    console.log(data);
    this.orders = [];
    this.loadOrders();
   })
  }
}
