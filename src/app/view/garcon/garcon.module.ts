import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GarconRoutingModule } from './garcon-routing.module';
import { GarconComponent } from './garcon.component';
import { ProductsComponent } from '../garcon/products/products.component';
import { PedidosComponent } from '../garcon/pedidos/pedidos.component';


@NgModule({
  declarations: [
    GarconComponent,
    ProductsComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    GarconRoutingModule,
    FormsModule
  ],
  exports: [
    GarconComponent
  ],
})
export class GarconModule { }
