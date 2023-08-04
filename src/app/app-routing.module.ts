import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './view/login/login.module';
import { GarconModule } from './view/garcon/garcon.module';
import { CozinhaModule } from './view/cozinha/cozinha.module';
import { AdministracaoModule } from './view/administracao/administracao.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/login/login.module').then(m => LoginModule)
  },
  {
    path: 'garcom',
    loadChildren: () => import('./view/garcon/garcon.module').then(m => GarconModule)
  },
  {
  path: 'admin',
  loadChildren: () => import('./view/administracao/administracao.module').then(m => AdministracaoModule)
  },
  {
  path: 'cozi',
  loadChildren: () => import('./view/cozinha/cozinha.module').then(m => CozinhaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
