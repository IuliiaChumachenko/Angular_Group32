import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";

import { CartListComponent } from './components';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
