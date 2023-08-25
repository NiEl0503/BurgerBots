import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CozinhaRoutingModule } from './cozinha-routing.module';
import { CozinhaComponent } from './cozinha.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    CozinhaComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    CozinhaRoutingModule,
    FormsModule
  ],
  exports: [
    CozinhaComponent
  ],
})
export class CozinhaModule { }
