import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent implements OnInit {

  personalDataForm!: FormGroup;
  selectedAddress = '';
  
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CheckoutDialogComponent>,
    private fb: FormBuilder,
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.personalDataForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email]
      ],
      tel: ['', [
        Validators.required,
        Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)]
      ],
      address: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.personalDataForm.value);
    this.personalDataForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      address: '',
      time: '',
      paymentMethod: ''
    });
    this.close()
  }

  close() {
    this.dialogRef.close();
  }



}
