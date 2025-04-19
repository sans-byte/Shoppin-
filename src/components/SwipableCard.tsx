import React from "react";
import { ProductCard } from "./ProductCard";
import { Product, Direction } from "../types";

type Props = {
  product: Product;
  onSwipe: (direction: Direction, product: Product) => void;
};

export const SwipableCard: React.FC<Props> = ({ product, onSwipe }) => {
  return (
    <>
      <div className="flex justify-center items-center relative">
        <div className="absolute">
          <ProductCard product={product} />
        </div>
      </div>
    </>
  );
};
