import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AccountComponent } from './account/account.component';
import { ContactsDialogComponent } from './contacts-dialog/contacts-dialog.component';
import { CartComponent } from './cart/cart.component';
//import { RouterModule, Routes } from '@angular/router';
//import { CabinetRoutingModule } from './cabinet-routing.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';
import { PromoDialogComponent } from './promo-dialog/promo-dialog.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

// export const cabinetRoutes: Routes = [
//   {
//     path: '',
//     component: AccountComponent,
//     children: [
//       {
//         path: 'cart',
//         component: CartComponent,
//       },
//       { path: '', component: AccountComponent }
//     ]
//   }
// ]

@NgModule({
  declarations: [
    AccountComponent,
    ContactsDialogComponent,
    CartComponent,
    CheckoutDialogComponent,
    PromoDialogComponent,
    OrdersComponent,
    OrderDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    //CabinetRoutingModule,
    //RouterModule.forChild(cabinetRoutes)
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CabinetModule { }
