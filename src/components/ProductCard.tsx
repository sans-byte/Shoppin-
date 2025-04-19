import React from "react";
import { Direction, Product } from "../types";
import { currenctFormatter } from "../utils/currencyformatter";
import { useMotionValue, useTransform, motion, PanInfo } from "motion/react";
import { Heart, ShoppingCart, X } from "lucide-react";

type Prop = {
  product: Product;
  isActive: boolean;
  onSwipe: (direction: Direction, productId: number) => void;
  index: number;
};

export const ProductCard: React.FC<Prop> = ({
  product,
  isActive,
  onSwipe,
  index,
}) => {
  const { brand, discountPercentage, id, imageURL, name, originalPrice } =
    product;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Calculate card rotation based on drag
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const xOffset = info.offset.x;
    const yOffset = info.offset.y;
    const threshold = 100;

    // Determine swipe direction
    if (yOffset < -threshold) {
      onSwipe(Direction.Up, product.id);
    } else if (xOffset > threshold) {
      onSwipe(Direction.Left, product.id);
    } else if (xOffset < -threshold) {
      onSwipe(Direction.Rigth, product.id);
    }
  };

  // Calculate opacity for swipe indicators
  const likeOpacity = useTransform(x, [0, 125], [0, 1]);
  const passOpacity = useTransform(x, [-125, 0], [1, 0]);
  const cartOpacity = useTransform(y, [-125, 0], [1, 0]);

  return (
    <>
      <div className="rounded-md md:w-[30vw] w-[90vw] h-[70vh] m-4 relative">
        <motion.div
          className="absolute top-0 left-0 right-0 h-full w-full rounded-md overflow-hidden"
          style={{
            x,
            y,
            rotate,
            zIndex: isActive ? 30 - index : 10 - index,
            filter: `brightness(${isActive ? 1 : 0.8 - index * 0.1})`,
            scale: isActive ? 1 : 1 - index * 0.05,
            top: `${index * 10}px`,
          }}
          drag={isActive}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          onDragEnd={handleDragEnd}
          initial={{ scale: 0.95, opacity: 0, y: 40 }}
          animate={{
            scale: isActive ? 1 : 1 - index * 0.05,
            opacity: 1,
            y: isActive ? 0 : index * 10,
          }}
          exit={{
            x: 0,
            y: -200,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 },
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="h-full w-full relative">
            <img
              src={imageURL}
              alt="Product"
              className="h-full w-full object-cover"
            />
            {isActive && (
              <>
                <motion.div
                  className="absolute top-1/3 left-10 z-50 text-white bg-red-400 p-3 rounded-full"
                  style={{ opacity: likeOpacity }}
                >
                  <Heart size={30} />
                </motion.div>

                <motion.div
                  className="absolute top-1/3 right-10 z-50 bg-black text-white p-3 rounded-full"
                  style={{ opacity: passOpacity }}
                >
                  <X size={30} />
                </motion.div>

                <motion.div
                  className="absolute top-10 right-1/2 translate-x-1/2 z-50 text-white bg-black p-3 rounded-full"
                  style={{ opacity: cartOpacity }}
                >
                  <ShoppingCart size={30} />
                </motion.div>
              </>
            )}
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
        </motion.div>
      </div>
    </>
  );
};
