import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarconRoutingModule } from './garcon-routing.module';
import { GarconComponent } from './garcon.component';


@NgModule({
  declarations: [
    GarconComponent
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
