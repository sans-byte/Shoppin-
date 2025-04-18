import React from "react";
import { Search, Heart } from "lucide-react";
import avatar from "../assets/avatar.jpg";

export const Header: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-14 shadow-md justify-between items-center px-3">
        <section>
          <img
            src="https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Flogo.webp&w=256&q=75"
            height={100}
            width={100}
            alt="Logo"
          />
        </section>
        <section className="flex justify-center items-center gap-2">
          <input
            type="search"
            name=""
            id=""
            placeholder="animated string"
            className="border-[0.5px] rounded-full border-secondary-grey pl-4 p-2 box-content font-comfortaa text-xs focus:outline-none"
          />
          <button>
            <Search />
          </button>
          <button>
            <Heart />
          </button>
          <button className="rounded-full flex justify-center items-center h-8 w-8 border-[0.5px] overflow-hidden">
            <img src={avatar} alt="avatar" />
          </button>
        </section>
      </div>
    </>
  );
};
