import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductStack } from "./components/ProductStack";
import { ShoppinBackDrop } from "./utils/ShoppinBackdrop";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{splash && <SplashScreen key="logo" />}</AnimatePresence>

      <div className="h-screen w-screen flex flex-col justify-between items-center ">
        <Header />
        <main className="">
          <ProductStack />
        </main>
        <section className="w-full relative">
          <ShoppinBackDrop />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
