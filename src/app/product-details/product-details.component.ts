import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product;
  alsoLikeProducts:Product[] = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { 

    //меняет массив товаро для нужного пола в соответствии с ссылкой в строке браузера
    this.location.onUrlChange((url) => {
    this.product = this.productService.getProduct(Number(url.substr(25)));
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(Number(id));
    this.alsoLikeProducts = this.productService.getBestsellers();  
  }
}
