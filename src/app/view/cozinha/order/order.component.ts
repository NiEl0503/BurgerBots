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
  table: string = '';

  constructor(
    private orderService: OrderService,
    private productsCommunicationService: ProductsCommunicationService
  ) { }

  ngOnInit() {
    this.loadOrders();

    this.productsCommunicationService.newOrder$.subscribe(newOrder => {
      this.orders.push(newOrder);
    });

    console.log('Orders:', this.orders);
  }

  private loadOrders() {

    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  startOrder(order: any) {
    if (order.status === 'pending') {
      order.status = 'procesando';
    } else if (order.status === 'procesando') {
      order.status = 'finalizado';
    }
  }


  // startOrder(order: any) {
  //   if (order.status === 'Pendente') {
  //     order.status = 'Em processamento';
  //   } else if (order.status === 'Em processamento') {
  //     order.status = 'Finalizado';
  //   }
  // }

  //   getOrderButtonText(status: string): string {
  //     if (status === 'Pendente') {
  //       return 'Inicio';
  //     } else if (status === 'Em processamento') {
  //       return 'Em processamento';
  //     } else if (status === 'Finalizado') {
  //       return 'Finalizado';
  //     } else {
  //       return 'Desconhecido';
  //     }
  //   }

  //   getOrderStatusText(status: string): string {
  //     if (status === 'Pendente') {
  //       return 'Pendente';
  //     } else if (status === 'Em processamento') {
  //       return 'Em processamento';
  //     } else if (status === 'Finalizado') {
  //       return 'Finalizado';
  //     } else {
  //       return 'Desconhecido';
  //     }
  //   }

}
