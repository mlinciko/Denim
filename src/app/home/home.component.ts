import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';
//import { PRODUCTS } from '../shared/products';
import { ProductService } from '../services/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bestSellers: Product[] = [];
  productCategories: Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    
    this.productService.getBestsellers(4).subscribe(
      (res) => {
        this.bestSellers = res
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
    this.productService.getDiffCategories().subscribe(
      (res) => {
        this.productCategories = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

}
