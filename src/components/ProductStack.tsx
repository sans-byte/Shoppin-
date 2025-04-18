import React from "react";
import { ProductCard } from "./ProductCard";
import { products } from "../data/products";

export const ProductStack: React.FC = () => {
  return (
    <>
      <div className="">
        <section className="flex justify-center items-center">
          {/* {products.map((product) => ( */}
          <ProductCard product={products[1]} />
          {/* ))} */}
        </section>
      </div>
    </>
  );
};
