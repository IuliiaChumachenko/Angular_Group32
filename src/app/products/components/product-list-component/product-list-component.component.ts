import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models";
import {ProductsService} from "../../services";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.less']
})
export class ProductListComponentComponent implements OnInit {

  products!: ProductModel[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  trackByFn(index: number, product: ProductModel): string {
    return product.name;
  }
}
