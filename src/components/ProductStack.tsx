import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { products } from "../data/products";
import { ShoppingBag } from "lucide-react";

export const ProductStack: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  

  return (
    <>
      <div className="relative flex justify-center items-center">
        <section className="flex justify-center items-center">
          {/* {products.map((product) => ( */}
          <ProductCard product={products[1]} />
          {/* ))} */}
        </section>
        <section className="absolute font-comfortaa flex justify-center items-center flex-col gap-4 -z-50">
          <div className="bg-gray-100 p-4 rounded-full mb-6 ">
            <ShoppingBag size={60} className="text-gray-400" />
          </div>
          <span className="text-2xl">No More Products</span>
          <span className="text-md text-secondary-grey w-5/6 text-center">
            You've swiped through all available products
          </span>
          <button className="px-6 py-4 bg-black text-white rounded-full cursor-pointer">
            Start Over
          </button>
        </section>
      </div>
    </>
  );
};
