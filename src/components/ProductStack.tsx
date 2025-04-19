import React, { useCallback, useState } from "react";
import { products } from "../data/products";
import { ListEnd, ShoppingBag } from "lucide-react";
import { SwipableCard } from "./SwipableCard";
import { Direction } from "../types";
import { AnimatePresence } from "motion/react";

type Prop = {
  setLiked: any;
  setCart: any;
};

export const ProductStack: React.FC<Prop> = ({ setLiked, setCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleSwipe = useCallback(
    (direction: Direction, productId: number) => {
      setCurrentIndex((pre) => pre + 1);
      switch (direction) {
        case Direction.Rigth:
          console.log(`Passed Product ID :  ${productId} `);
          break;
        case Direction.Left:
          console.log(`Liked Product ID : ${productId}`);
          setLiked((pre: number) => pre + 1);
          break;
        case Direction.Up:
          console.log(`Add To Cart Product ID : ${productId}`);
          setCart((pre: number) => pre + 1);
          break;
        default:
          break;
      }
    },
    [Direction]
  );

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  console.log(currentIndex);

  const handleStartOver = () => {
    setCurrentIndex(0);
    setLiked(0);
    setCart(0);
    console.log("clicked");
  };

  if (currentIndex == products.length) {
    return (
      <section className="font-comfortaa flex justify-center items-center flex-col gap-4 w-[80vw]">
        <div className="bg-gray-100 p-4 rounded-full mb-6 ">
          <ShoppingBag size={60} className="text-gray-400" />
        </div>
        <span className="text-2xl">No More Products</span>
        <span className="text-md text-secondary-grey text-center">
          You've swiped through all available products
        </span>
        <button
          className="px-6 py-4 bg-black text-white rounded-full cursor-pointer"
          onClick={handleStartOver}
        >
          Start Over
        </button>
      </section>
    );
  }

  return (
    <>
      <div className="relative flex justify-center items-center">
        <section className="flex justify-center items-center">
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <SwipableCard
                product={product}
                key={product.id}
                onSwipe={handleSwipe}
                isActive={index === 0}
                index={index}
              />
            ))}
          </AnimatePresence>
        </section>
      </div>
    </>
  );
};
