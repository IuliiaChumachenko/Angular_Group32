import { Injectable } from '@angular/core';

import { ProductCategoryEnum, ProductModel } from "../models";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: ProductModel[] = [
    {
      name: 'book',
      description: 'book',
      price: 100,
      category: ProductCategoryEnum.BOOK,
      isAvailable: true,
    },
    {
      name: 'food',
      description: 'food',
      price: 150,
      category: ProductCategoryEnum.FOOD,
      isAvailable: true,
    },
    {
      name: 'car',
      description: 'car',
      price: 900,
      category: ProductCategoryEnum.CAR,
      isAvailable: false,
    }
  ];

  getProducts(): ProductModel[] {
    return this.products;
  }
}
