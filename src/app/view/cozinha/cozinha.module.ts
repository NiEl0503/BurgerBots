import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CozinhaRoutingModule } from './cozinha-routing.module';
import { CozinhaComponent } from './cozinha.component';


@NgModule({
  declarations: [
    CozinhaComponent
  ],
  imports: [
    CommonModule,
    CozinhaRoutingModule
  ]
})
export class CozinhaModule { }
