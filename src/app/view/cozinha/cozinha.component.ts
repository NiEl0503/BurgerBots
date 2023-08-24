import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orderService/orden-service.service';


@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit {
  orders: any[] = [];

  constructor(
    private readonly orderService: OrderService,
    ) 
    {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
}
