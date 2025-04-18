import React from "react";
import { ShoppinBackDrop } from "../utils/shoppinBackdrop";

export const ProductStack: React.FC = () => {
  return (
    <>
      <div className="relative h-full">
        <section className="flex justify-center items-center">
          <ShoppinBackDrop />
        </section>
      </div>
    </>
  );
};
