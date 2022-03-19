import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  currentPrice = 0;
  currentColor = "";
  currentCollection = "";
  


  setValue(value: any, type: string) {
    switch (type) {
      case 'price':
        this.currentPrice = value;
        break;
      case 'color':
        this.currentColor = value;
        break;
      case 'collection':
        this.currentCollection = value;
        break;
    }
  }

  clear() {
    //очищаем цену
    this.setValue(0, 'price');

    //очищаем цвет
    this.setValue("", 'color');
    (<HTMLInputElement>document.querySelector('input[name="color"]:checked')).checked = false;

    //очищаем коллекцию
    this.setValue("", 'collection');
    (<HTMLInputElement>document.querySelector('input[name="collection"]:checked')).checked = false;
  }

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { 

    //меняет массив товаров для нужного поля в соответствии с ссылкой в строке браузера
    this.location.onUrlChange((url) => {      
      this.products = this.productService.getProductsBySex(url.substr(10));
    })
  }

  ngOnInit(): void {
    let sex = this.route.snapshot.params['value']; 
    this.products = this.productService.getProductsBySex(sex);
  }

  

}
