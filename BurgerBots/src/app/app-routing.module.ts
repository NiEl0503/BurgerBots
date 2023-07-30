import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './view/login/login.module';
import { HomeModule } from './view/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/home/home.module').then(m => HomeModule)
  },
  {
    path: 'logar',
    loadChildren: () => import('./view/login/login.module').then(m => LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
