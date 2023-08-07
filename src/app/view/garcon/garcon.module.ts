import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarconRoutingModule } from './garcon-routing.module';
import { GarconComponent } from './garcon.component';
import { ProductsComponent } from './products/products.component';
import { PedidosComponent } from './pedidos/pedidos.component';


@NgModule({
  declarations: [
    GarconComponent,
    ProductsComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    GarconRoutingModule
  ],
  exports: [
    GarconComponent
  ],
})
export class GarconModule { }
