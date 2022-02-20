import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from './../products/products.component';
import { ProductDetailsComponent } from './../product-details/product-details.component';

export const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'products/:value', component: ProductsComponent},
  {path:'products/productdetails/:id', component: ProductDetailsComponent},
  {path:'', component: HomeComponent}
]