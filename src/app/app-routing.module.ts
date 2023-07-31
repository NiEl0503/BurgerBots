import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './view/login/login.module';
import { GarconModule } from './view/garcon/garcon.module';

const routes: Routes = [
    {
    path: 'logar',
    loadChildren: () => import('./view/login/login.module').then(m => LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./view/garcon/garcon.module').then(m => GarconModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
