import { Heart, Home, Menu, ShoppingBag, History } from "lucide-react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-10 w-full flex bg-red-400">
        <nav className="w-full flex items-center justify-around p-3 pt-3 text-white">
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
