import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoComponent } from './administracao.component';
import { UsersComponent } from './users/users.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    AdministracaoComponent,
    UsersComponent,
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    AdministracaoRoutingModule
  ],
  exports: [
    AdministracaoComponent
  ],
})
export class AdministracaoModule { }
