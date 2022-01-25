import { Component } from '@angular/core';
import { ProductModel } from "../../products/models";

enum CategoryEnum {
  JS = 'JavaScript',
  TS = 'TypeScript',
  HTML = 'HTML',
  CSS = 'Css'
}

// @ts-ignore
interface Book extends ProductModel {
  category: CategoryEnum;
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.less']
})
export class FirstComponentComponent {

  title: string = 'First Angular Component';
  books: Book[] = [
    {
      name: 'Learn JS',
      description: 'Modern JavaScript Tutorial',
      price: 100,
      category: CategoryEnum.JS,
      isAvailable: true,
    },
    {
      name: 'Tackling TypeScript: Upgrading from JavaScript',
      description: 'Modern TypeScript Tutorial',
      price: 150,
      category: CategoryEnum.TS,
      isAvailable: true,
    },
    {
      name: 'The Guide Of HTML',
      description: 'Modern HTML Tutorial',
      price: 90,
      category: CategoryEnum.HTML,
      isAvailable: false,
    }
  ];
}
