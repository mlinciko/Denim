import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product;
  alsoLikeProducts:Product[] = [];

  BigImg = true;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,) { 

    //меняет массив товаров для нужного поля в соответствии с ссылкой в строке браузера
    this.location.onUrlChange((url) => {
      this.productService.getProduct(Number(url.substr(25))).subscribe(
        (res) => {
          this.product = res
          this.initAlsoLike();
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      )
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    if(id != "0"){
      this.productService.getProduct(Number(id)).subscribe(
        (res) => {
          this.product = res
          this.initAlsoLike();
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      )
    }
  }
  initAlsoLike() {
    this.productService.getAlsoLikeProducts(this.product.category, this.product.id, this.product.sex).subscribe(
      (res) => {
        console.log(res)
        this.alsoLikeProducts = res.slice(0, 4);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

  //меняет размер картинки при клике(слайдер)
  changeSize(selectedImg: any) : void{

    let bigImg = document.querySelector<HTMLElement>('.slider__image.big')

    bigImg!.classList.remove("big");
    selectedImg.classList.add("big");
  }

  changeImage(item: any, newSrc: any){
    console.log(item);
    console.log(newSrc);
    item.style.background = newSrc;
  }
}
