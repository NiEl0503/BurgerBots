import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/orden-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {
  pedidosProntos: any[] = [];
  pedidosEntregues: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadPedidosProntos();
  }

  private loadPedidosProntos() {
    this.orderService.getOrders().subscribe(data => {
      this.pedidosProntos = data.filter(pedido => pedido.status === 'delivered');
    });
  }

  moverPedidosEntregues() {
    const pedidosSelecionados = this.pedidosProntos.filter(pedido => pedido.selected);
    
    this.pedidosEntregues.push(...pedidosSelecionados);
    this.pedidosProntos = this.pedidosProntos.filter(pedido => !pedido.selected);

    pedidosSelecionados.forEach(pedido => pedido.selected = false);
  }
}
