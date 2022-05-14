import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.css']
})
export class ContactsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ContactsDialogComponent>
  ) { }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }




}
