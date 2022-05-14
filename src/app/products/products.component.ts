import { HttpErrorResponse } from '@angular/common/http';
import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../shared/model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  //определяем форму
  filterForm!: FormGroup;

  products!: Product[];
  sex: string = ""

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
  ) {
    //меняет массив товаров для нужного поля в соответствии с ссылкой в строке браузера
    this.location.onUrlChange((url) => {
      this.sex = url.substr(10)
      this.productService.getProductsBySex(this.sex).subscribe(
        (res) => {
          this.products = res
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      )
    })
    this.createForm()
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }


  ngOnInit(): void {
    this.sex = this.route.snapshot.params['value'];
    this.productService.getProductsBySex(this.sex).subscribe(
      (res) => {
        this.products = res
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
    console.log(this.products);
  }

  //метод инициализирует форму и определяет параметры для валидации полей
  createForm() {
    this.filterForm = this.fb.group({
      price:[0],
      colors_light_blue: [false],
      colors_blue:[false],
      colors_gray: [false],
      colors_black: [false],
      colors_light_gray: [false],
      colors_aquamarine: [false],
      collec_casual: [''],
      collec_petite: [''],
      collec_classic: [''],
      collec_soulluxe: [''],
    })
  }
  
  onSubmit() {
    //присваиваем данные формы в объект класса
    let filterData = this.filterForm.value;
    console.log(this.filterForm);
    let collections = []
    let colors = []
    if (filterData?.collec_casual)
      collections.push("casual")
    if (filterData?.collec_petite)
      collections.push("petite")
    if (filterData?.collec_classic)
      collections.push("classic")
    if (filterData?.collec_soulluxe)
      collections.push("soulluxe")
    if (filterData?.colors_light_blue)
      colors.push("light-blue")
    if (filterData?.colors_blue)
      colors.push("blue")
    if (filterData?.colors_gray)
      colors.push("gray")
    if (filterData?.colors_black)
      colors.push("black")
    if (filterData?.colors_light_gray)
      colors.push("light-gray")
    if (filterData?.colors_aquamarine)
      colors.push("aquamarine")

    console.log(filterData.price, colors, collections)
    this.filterProducts(this.sex, filterData.price, colors, collections) 
    console.log(this.products);
    
    
  }

  filterProducts(sex: string, price: number, colors: string[], collections: string[]): any{
    let allColors = ["light-blue", "blue", "gray", "black", "light-gray", "aquamarine"]
    let allCollections = ["casual", "petite", "classic", "soulluxe"]

    let filteredProducts: Product[] = []

    if(price == 0 ) {
      price = 200
    }
      
    if(colors.length == 0){
      colors = allColors
    }
      
    if(collections.length == 0){
      collections = allCollections
    }
    console.log(price, colors, collections)  

    //let productsBySex: Product[] = []
    this.productService.getProductsBySex(this.sex).subscribe(
      (res) => {
        res.forEach(function (product) {
          console.log("products: " , product);

          if (collections.includes(product.collection) && product.price <= price && product.color.some(color => colors.includes(color))){
            filteredProducts.push(product)    
          }
        })
        this.products = filteredProducts;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

  clear(): void {
    this.filterForm.reset({
      price: 0,
      colors_light_blue: false,
      colors_blue: false,
      colors_gray: false,
      colors_black: false,
      colors_light_gray: false,
      colors_aquamarine: false,
      collec_casual: '',
      collec_petite: '',
      collec_classic: '',
      collec_soulluxe: '',
    })
    this.productService.getProductsBySex(this.sex).subscribe(
      (res) => {
        this.products = res
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

}
