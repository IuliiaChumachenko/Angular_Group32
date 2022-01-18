import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";

import { ProductComponentComponent, ProductListComponentComponent } from "./components";



@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductListComponentComponent
  ],
  exports: [
    ProductListComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
