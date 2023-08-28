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
  private interval: any;


  constructor(
    private orderService: OrderService,
    private productsCommunicationService: ProductsCommunicationService
  ) { }

  ngOnInit() {
    this.loadOrders();
    this.startElapsedTimeUpdate();
  }

  private loadOrders() {

    this.orderService.getOrders().subscribe(data => {
      data.map(pedido => pedido.currentStatus = pedido.status)
      this.orders = data;
    });
  }

  updateOrder(pedido: any) {
    this.orderService.updateOrder(pedido).subscribe(data => {
      this.orders = [];
      this.loadOrders();
    })
  }

  updateElapsedTime() {
    const currentTime = new Date().getTime();
    this.orders.forEach(order => {
      if (order.status === 'pending') {
        const orderTime = new Date(order.dataEntry).getTime();
        const elapsedTime = currentTime - orderTime;
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const elapsedTimeString = `${hours}h ${minutes % 60}m ${seconds % 60}s`;
        order.tiempoPedido = elapsedTimeString;
      } else if (order.status === 'delivered' && !order.tiempoPedidoFinal) {
              
        const orderTime1 = new Date(order.dataEntry).getTime();
        const deliveredTime = new Date(order.dataDelivered).getTime();
        const elapsedTime1 = deliveredTime - orderTime1;
        const seconds = Math.floor(elapsedTime1 / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const elapsedTimeString1 = `${hours}h ${minutes % 60}m ${seconds % 60}s`;
        order.tiempoPedidoFinal = elapsedTimeString1;
        this.stopElapsedTimeUpdate();
      }
    });
  }

  ngOnDestroy() {
    this.stopElapsedTimeUpdate();
  }

  startElapsedTimeUpdate() {
    this.interval = setInterval(() => {
      this.updateElapsedTime();
    }, 1000);
  }

  stopElapsedTimeUpdate() {
    clearInterval(this.interval);
  }

}
