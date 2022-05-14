import { Injectable } from '@angular/core';
import { Product } from '../shared/model/product';
import { environment } from '../shared/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor(
    protected http:HttpClient
  ) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products/all`) 
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/find-with-id/${id}`);
  }

  //возвращает продукт по категории текущего исключая сам текущий продукт
  getAlsoLikeProducts(category: string, id: number, sex: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseUrl}/products/also/${id}/${sex}/${category}`);
  }

  //возвращает массив из рандомных продуктов
  getBestsellers(n: number, sex: string = "none"): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseUrl}/products/bestsellers/${n}/${sex}`);
  }

  //возвращает массив с четырьмя разными категориями продуктов
  getDiffCategories(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseUrl}/products/categories`);
  }

  //возвращает все товары по полю sex 
  getProductsBySex(sex: string): Observable<Product[]>{  
    return this.http.get<Product[]>(`${environment.baseUrl}/products/sex/${sex}`);
  }

  //возвращает новые товары
  getNewProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseUrl}/products/new`);
  }

  //возвращает массив товаров по ключевым словам из описания
  getProductsByKeyword(keyword: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseUrl}/products/find/${keyword}`);
  }
}
