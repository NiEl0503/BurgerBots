import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/orden-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {
  pedidosProntos: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadPedidosEntregados();
  }

  private loadPedidosEntregados() {
    this.orderService.getOrders().subscribe(data => {
      this.pedidosProntos = data.filter(pedido => pedido.status === 'delivered');
    });
  }
}
