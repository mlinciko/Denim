import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/model/product';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog} from "@angular/material/dialog";
import { ContactsDialogComponent } from '../contacts-dialog/contacts-dialog.component';
import { PromoDialogComponent } from '../promo-dialog/promo-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
    ) {


     }

  onContactsClick(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ContactsDialogComponent, dialogConfig);
  }
  onPromoClick(): void{
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PromoDialogComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.productService.getBestsellers(4, "female").subscribe(
      (res) => {
        this.products = res
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

}
