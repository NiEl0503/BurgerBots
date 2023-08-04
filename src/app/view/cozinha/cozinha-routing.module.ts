import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CozinhaComponent } from './cozinha.component';

const routes: Routes = [
  {
    path: 'cozi',
    component: CozinhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CozinhaRoutingModule { }
