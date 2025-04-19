import React from "react";
import { Search, Heart } from "lucide-react";
import avatar from "../assets/avatar.jpg";

type Prop = {
  liked: number;
};

export const Header: React.FC<Prop> = ({ liked }) => {
  return (
    <>
      <header className="flex w-full h-14 shadow-md justify-center items-center ps-5">
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
            <section className="flex justify-center items-center relative">
              <button>
                <Heart />
              </button>
              {liked > 0 && (
                <span className="absolute bg-red-400 h-2 w-2 rounded-full -top-1 -right-2 text-white text-[10px] flex justify-center items-center p-[8px]">
                  {liked}
                </span>
              )}
            </section>
            <button className="rounded-full flex justify-center items-center h-8 w-8 border-[0.5px] overflow-hidden">
              <img src={avatar} alt="avatar" />
            </button>
          </section>
        </div>
      </header>
    </>
  );
};
