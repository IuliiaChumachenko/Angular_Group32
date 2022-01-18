export enum ProductCategoryEnum {
  FOOD = 'Food',
  CAR = 'Car',
  BOOK = 'Book',
}

export interface ProductModel {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: ProductCategoryEnum;
}
