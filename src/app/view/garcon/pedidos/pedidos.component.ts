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
    const savedPedidosProntos = localStorage.getItem('pedidosProntos');
    const savedPedidosEntregues = localStorage.getItem('pedidosEntregues');
    
    if (savedPedidosProntos) {
      this.pedidosProntos = JSON.parse(savedPedidosProntos);
    }
    
    if (savedPedidosEntregues) {
      this.pedidosEntregues = JSON.parse(savedPedidosEntregues);
    }
  
    this.loadPedidosProntos();
  }
  
  private loadPedidosProntos() {
    this.orderService.getOrders().subscribe(data => {
      this.pedidosProntos = data.filter(pedido => pedido.status === 'delivered' && !this.isPedidoEntregue(pedido));
      
      // Actualizar los pedidos prontos en localStorage
      localStorage.setItem('pedidosProntos', JSON.stringify(this.pedidosProntos));
    });
  }

  moverPedidosEntregues() {
    const pedidosSelecionados = this.pedidosProntos.filter(pedido => pedido.selected);

    if (pedidosSelecionados.length > 0) {
      this.pedidosEntregues.push(...pedidosSelecionados);
      
      // Actualizar los pedidos entregados en localStorage
      localStorage.setItem('pedidosEntregues', JSON.stringify(this.pedidosEntregues));

      // Filtrar los pedidos prontos para quitar los seleccionados
      this.pedidosProntos = this.pedidosProntos.filter(pedido => !pedido.selected);

      // Actualizar los pedidos prontos en localStorage
      localStorage.setItem('pedidosProntos', JSON.stringify(this.pedidosProntos));
    }
  }
  
  private isPedidoEntregue(pedido: any): boolean {
    return this.pedidosEntregues.some(entregado => entregado.id === pedido.id);
  }

  
  resetPedidosEntregues() {
    this.pedidosEntregues = [];
    localStorage.removeItem('pedidosEntregues');
  }
}
