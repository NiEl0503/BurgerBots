import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracaoComponent } from './administracao.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdministracaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
