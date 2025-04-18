import { Heart, Home, Menu, ShoppingBag, History } from "lucide-react";
import React from "react";

export const Footer: React.FC = () => {
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
          <button className="flex flex-col items-center p-2">
            <ShoppingBag size={20} />
            <span className="text-xs mt-1"></span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Menu size={20} />
            <span className="text-xs mt-1"></span>
          </button>
        </nav>
      </footer>
    </>
  );
};
