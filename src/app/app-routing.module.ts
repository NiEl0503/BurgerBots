import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './view/login/login.module';

const routes: Routes = [
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
