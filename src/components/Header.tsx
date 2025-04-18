import React from "react";
import { Search, Heart } from "lucide-react";
import avatar from "../assets/avatar.jpg";

export const Header: React.FC = () => {
  return (
    <>
      <header className="flex w-full h-14 shadow-md justify-center items-center px-3">
        <div className="w-full md:w-3/4 lg:w-1/3 flex justify-between items-center">
          <section className="">
            <img
              src="https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Flogo.webp&w=256&q=75"
              height={100}
              width={100}
              className=""
              alt="Logo"
            />
          </section>
          <section className="flex justify-center items-center gap-2">
            <input
              type="search"
              name=""
              id=""
              placeholder="animated"
              className="max-sm:w-1/3 border-[0.5px] rounded-full border-secondary-grey pl-4 p-2 box-content font-comfortaa text-xs focus:outline-none"
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
      </header>
    </>
  );
};
