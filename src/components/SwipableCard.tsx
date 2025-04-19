import React from "react";
import { ProductCard } from "./ProductCard";
import { Product, Direction } from "../types";

type Props = {
  product: Product;
  onSwipe: (direction: Direction, productId: number) => void;
  isActive: boolean;
  index: number;
};

export const SwipableCard: React.FC<Props> = ({
  product,
  onSwipe,
  isActive,
  index,
}) => {
  console.log(isActive);

  return (
    <>
      <div className="flex justify-center items-center relative">
        <div className="absolute">
          <ProductCard product={product} isActive={isActive} />
        </div>
      </div>
    </>
  );
};
