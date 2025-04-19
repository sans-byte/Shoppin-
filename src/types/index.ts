export interface Product {
  id: number;
  name: string;
  brand: string;
  originalPrice: number;
  discountPercentage: number;
  imageURL: string;
}

export enum Direction {
  Left = "left",
  Rigth = "right",
  Up = "up",
  None = "",
}
