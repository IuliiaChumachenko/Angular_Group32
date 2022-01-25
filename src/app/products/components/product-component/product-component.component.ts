import { Component, Input } from '@angular/core';

import { ProductModel } from "../../models";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.less']
})
export class ProductComponentComponent {

  @Input() product!: ProductModel;

  onAddToCart(productName: string): void {
    console.log(`message: ${productName} has been purchased`);
  }
}
