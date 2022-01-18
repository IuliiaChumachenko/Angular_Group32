import { Injectable } from '@angular/core';

import { CartItemModel } from "../models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList = [
    {
      name: 'food',
      count: 2
    },
    {
      name: 'book',
      count: 20
    }
  ];

  getCartList(): CartItemModel[] {
    return this.cartList;
  }
}
