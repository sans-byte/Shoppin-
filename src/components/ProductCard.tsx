import React from "react";
import { Product } from "../types";
import { currenctFormatter } from "../utils/currencyformatter";

type Prop = {
  product: Product;
  isActive: boolean;
};

export const ProductCard: React.FC<Prop> = ({ product, isActive }) => {
  const { brand, discountPercentage, id, imageURL, name, originalPrice } =
    product;

  // g:w-[32vw] md:w-[50vw] sm:w-[56vw] w-[88vw]
  return (
    <>
      <div className="rounded-md border-[0.5px] border-secondary-grey md:w-[30vw] w-[90vw] h-[70vh] m-4 overflow-hidden">
        <div className="h-full w-full relative">
          <img
            src={imageURL}
            alt="Product"
            className="h-full w-full object-cover"
          />
          <section className="absolute bottom-0 text-white w-full font-comfortaa p-4 text-lg font-bold text-shadow-lg flex flex-col justify-between h-full">
            <section className="flex justify-between items-center">
              <div className="text-black text-shadow-none text-md font-extralight">
                {brand}
              </div>
              {discountPercentage > 0 && (
                <div className="text-xs rounded-md bg-red-400 p-1 px-2 font-comfortaa">
                  {discountPercentage}% OFF
                </div>
              )}
            </section>

            <section>
              <div>{name}</div>
              <div className="flex items-center w-full gap-3">
                <div className="text-xl">
                  {currenctFormatter(
                    originalPrice - originalPrice * (discountPercentage / 100)
                  )}
                </div>
                {discountPercentage > 0 && (
                  <div className="text-sm line-through text-gray-700">
                    {currenctFormatter(originalPrice)}
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
