export interface CartItemModel {
  name: string;
  count: number;
}

// такая модель удобнее - она расширяет модель товара одним полем
// export interface CartItemModel extends ProductModel {
  // count: number;
// }
