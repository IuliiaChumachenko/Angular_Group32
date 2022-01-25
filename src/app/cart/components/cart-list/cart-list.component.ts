import { Component, OnInit } from '@angular/core';

import { CartService } from "../../services";
import { CartItemModel } from "../../models";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {

  isEmptyCart!: boolean;
  products!: CartItemModel[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getCartList();
    this.isEmptyCart = !!this.products.length;
  }

  trackByFn(index: number, product: CartItemModel): string {
    return product.name;
  }

}
