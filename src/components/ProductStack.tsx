import React, { useCallback, useState } from "react";
import { products } from "../data/products";
import { ShoppingBag } from "lucide-react";
import { SwipableCard } from "./SwipableCard";
import { Direction, Product } from "../types";
import { AnimatePresence } from "motion/react";

export const ProductStack: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleSwipe = useCallback((direction: Direction, product: Product) => {
    setCurrentIndex((pre) => pre + 1);
    switch (direction) {
      case Direction.Left:
        console.log(`Passed Product ID :  ${product.id} `);
        break;
      case Direction.Rigth:
        console.log(`Liked Product ID : ${product.id}`);
        break;
      case Direction.Up:
        console.log(`Add To Cart Product ID : ${product.id}`);
        break;
      default:
        break;
    }
  }, []);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <>
      <div className="relative flex justify-center items-center">
        <section className="flex justify-center items-center">
          <AnimatePresence>
            {visibleProducts.map((product) => (
              <SwipableCard
                product={product}
                key={product.id}
                onSwipe={handleSwipe}
              />
            ))}
          </AnimatePresence>
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
