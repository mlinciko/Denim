import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showInput = false
  showResult = false
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  changeInputVisibility(){
    this.showInput = !this.showInput
  }
  changeResultVisibility(e: any){
    if(e.keyCode == 13)
    {
      if ((document.querySelector('.search__input') as HTMLInputElement).value == "") {
        this.products = []
      }
      else {
        this.showResult = true;
        this.productService.getProductsByKeyword((document.querySelector('.search__input') as HTMLInputElement).value).subscribe(
          (res) => {
            this.products = res;
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        )
      }
    }
  }
  closeSearch(){
    this.showResult = false
    setTimeout(() =>{
      this.changeInputVisibility();
    }, 600);
    (document.querySelector('.search__input') as HTMLInputElement).value = ""
  }

  searchProducts(e: any){
    console.log(e);
    
  }

}
