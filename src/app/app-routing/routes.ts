import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from './../products/products.component';
import { ProductDetailsComponent } from './../product-details/product-details.component';
import { NewComponent } from '../new/new.component';
import { AccountComponent } from '../cabinet/account/account.component';
import { CartComponent } from '../cabinet/cart/cart.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products/:value', component: ProductsComponent},
  { path: 'products/productdetails/:id', component: ProductDetailsComponent},
  { path: 'new', component: NewComponent },
  { path: 'account',component: AccountComponent },
  { path: 'account/cart', component: CartComponent },
  { path: '', component: HomeComponent}
]