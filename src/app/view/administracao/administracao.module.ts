import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoComponent } from './administracao.component';


@NgModule({
  declarations: [
    AdministracaoComponent
  ],
  imports: [
    CommonModule,
    AdministracaoRoutingModule
  ]
})
export class AdministracaoModule { }
