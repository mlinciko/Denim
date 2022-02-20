import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
//import { PRODUCTS } from '../shared/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  bestSellers: Product[] = [];
  productCategories: Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.bestSellers = this.productService.getBestsellers();
    this.productCategories = this.productService.getDiffCategories();
  }

}
