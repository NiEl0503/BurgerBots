import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarconModule } from './garcon.module';
import { GarconComponent } from './garcon.component';

const routes: Routes = [
  {
    path: '',
    component: GarconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarconRoutingModule { }
