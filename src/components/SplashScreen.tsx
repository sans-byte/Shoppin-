import React from "react";
import { motion } from "motion/react";
export const SplashScreen: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <motion.div
          key="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 0.6, // How long the animation takes
            ease: [0.22, 1, 0.36, 1], // Ease-out back (springy feeling)
            transition: { delay: 0.2 },
          }}
        >
          <img
            src="https://shoppin.app/_next/image?url=%2Fassets%2Ficons%2Fstrawberry_icon.webp&w=64&q=75"
            className="w-20 h-20 object-contain"
            alt="Shoppin'"
          />
        </motion.div>
      </div>
    </>
  );
};
