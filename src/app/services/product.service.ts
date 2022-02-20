import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return PRODUCTS;
  }

  getProduct(id:number){
    return PRODUCTS.filter((product) => product.id === id)[0];
  }

  //возвращает массив из четырех рандомных продуктов
  getBestsellers(){
    let bestsellers: Product[] = [];

    //минимальное и максимальное значение id
    let min = PRODUCTS[0].id;
    let max = PRODUCTS[PRODUCTS.length - 1].id;

    for(let i = 0; i < 4; i++){
      bestsellers[i] = PRODUCTS[Math.floor(Math.random() * ( max - min)) + min];
    }
    return bestsellers;
  }

  //возвращает массив с четырьмя разными категориями продуктов
  getDiffCategories(){
    let diffCategories: Product[] = [];

    let categories = [
      { category:'Overalls', sex:'female'},
      { category: 'Jackets', sex: 'male'},
      { category: 'Jeans', sex: 'female'},
      { category: 'Shirts', sex: 'male'},
    ];

    for(let i = 0; i < 4; i++){
      diffCategories[i] = PRODUCTS[PRODUCTS.findIndex(product => product.category === categories[i].category && product.sex === categories[i].sex)];       
    }
    return diffCategories;
  }

  //возвращает все товары по полю sex 
  getProductsBySex(sex:string){  
    return PRODUCTS.filter((product) => product.sex === sex);
  }
}
