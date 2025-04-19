import { Heart, Home, Menu, ShoppingBag, History } from "lucide-react";
import React from "react";

type Prop = {
  cart: number;
};

export const Footer: React.FC<Prop> = ({ cart }) => {
  return (
    <>
      <footer className="flex w-full h-10 justify-center items-center px-3 bg-red-400">
        <nav className="w-full md:w-3/4 lg:w-1/3 flex justify-between items-center text-white">
          <button className="flex flex-col items-center p-2">
            <Home size={20} />
            <span className="text-xs mt-1"></span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Heart size={20} />
            <span className="text-xs mt-1"></span>
          </button>
          <section className="flex justify-center items-center relative">
            <button>
              <ShoppingBag />
            </button>
            {cart > 0 && (
              <span className="absolute bg-white h-2 w-2 rounded-full -top-1 -right-2 text-black text-[10px] flex justify-center items-center p-[8px]">
                {cart}
              </span>
            )}
          </section>
          <button className="flex flex-col items-center p-2">
            <Menu size={20} />
            <span className="text-xs mt-1"></span>
          </button>
        </nav>
      </footer>
    </>
  );
};
