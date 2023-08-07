import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarconRoutingModule } from './garcon-routing.module';
import { GarconComponent } from './garcon.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    GarconComponent,
    ProductsComponent
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
