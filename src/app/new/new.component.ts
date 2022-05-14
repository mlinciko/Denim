import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getNewProducts().subscribe(
      (res) => {
        this.products = res
        console.log(this.products)
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

}
