import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartIsEmpty = false


  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onCheckoutClick(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '388px'
    dialogConfig.height = '430px'
    this.dialog.open(CheckoutDialogComponent, dialogConfig);
  }

}
