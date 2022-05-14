import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const cabinetRoutes: Routes = [
  {
    path:'',
    component:AccountComponent,
    children:[
      {
        path: 'cart',
        component: CartComponent,
      }
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(cabinetRoutes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
