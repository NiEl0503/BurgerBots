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
  }

  private loadOrders() {
    this.orderService.getOrders().subscribe(data => {
      data.map(pedido => {
        this.startElapsedTimeUpdate(pedido);
        return pedido.currentStatus = pedido.status
      })
      this.orders = data;
    });
  }

  updateOrder(pedido: any) {
    const currentTime = new Date()
    pedido.dataDelivered = currentTime;
    this.orderService.updateOrder(pedido).subscribe(data => {
      this.orders = [];
      this.loadOrders();
    })
  }

  updateElapsedTime(pedido: any) {
    if (pedido.status === 'pending') {
    const currentTime = new Date().getTime();
    const orderTime = new Date(pedido.dataEntry).getTime();
    const elapsedTime = currentTime - orderTime;
    const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const elapsedTimeString = `${hours}h ${minutes % 60}m ${seconds % 60}s`;
     pedido.tiempoPedido = elapsedTimeString;
    }
  }
  
  ngOnDestroy() {
    this.stopElapsedTimeUpdate();
  }

  startElapsedTimeUpdate(pedido:any) {
    this.interval = setInterval(() => {
      this.updateElapsedTime(pedido);
    }, 1000);
  }

  stopElapsedTimeUpdate() {
    clearInterval(this.interval);
  }
}

