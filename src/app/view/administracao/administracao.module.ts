import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoComponent } from './administracao.component';
import { UsersComponent } from './users/users.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdministracaoComponent,
    UsersComponent,
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    AdministracaoRoutingModule,
    FormsModule
  ],
  exports: [
    AdministracaoComponent
  ],
})
export class AdministracaoModule { }
