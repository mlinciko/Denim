import { OrdersComponent } from './../cabinet/orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../cabinet/account/account.component';
import { CabinetModule } from '../cabinet/cabinet.module';
import { CartComponent } from '../cabinet/cart/cart.component';
import { HomeComponent } from '../home/home.component';
import { NewComponent } from '../new/new.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';


const ROUTES: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'products', 
    children:[
      {
        path:':value',
        component: ProductsComponent,
      },
      {
        path:'productdetails',
        children:[
          {
            path:':id',
            component: ProductDetailsComponent,
          }
        ]
      }
    ] 
  },
  //{ path: 'account/productdetails/:id', component: ProductDetailsComponent },
  // { path: 'account', 
  //   children: [],
  //   component: AccountComponent,
  //   children: [
  //   loadChildren: (): Promise<CabinetModule> =>
  //     import('../cabinet/cabinet.module').then((m) => m.CabinetModule),
  //   ],
  // },
  {
    path: 'account',
    //component: AccountComponent,
    children:[
      {
        path: '',
        component: AccountComponent,
      },
      {
        path:'orders',
        component: OrdersComponent,
      }
    ]
  },
  { path: 'cart', component: CartComponent },
  { path: '', component: HomeComponent },
  //{ path: '**', component: HomeComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
