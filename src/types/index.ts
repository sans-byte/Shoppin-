export interface Product {
  id: number;
  name: string;
  brand: string;
  originalPrice: number;
  discountPercentage: number;
  imageURL: string;
}

export enum direction {
  Left = "left",
  Rigth = "right",
  Up = "up",
  None = "",
}
