import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {


  @Input() products!: Product[]; 
  @Input() widthImg!: number;
  @Input() heightImg!: number;
  @Input() gap30!: boolean;
  @Input() gap66!: boolean;

  constructor() {}

  ngOnInit(): void {  
    console.log(this.products)  
  }

}
