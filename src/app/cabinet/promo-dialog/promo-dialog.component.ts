import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-promo-dialog',
  templateUrl: './promo-dialog.component.html',
  styleUrls: ['./promo-dialog.component.css']
})
export class PromoDialogComponent implements OnInit {

  promoIsEmpty = false
  constructor(
    private dialogRef: MatDialogRef<PromoDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
