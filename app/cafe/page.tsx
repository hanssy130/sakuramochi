"use client";
import { CafeFaq } from "@/components/cafeFaq";
import { easeInOut, motion } from "framer-motion";

export default function Cafe() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-2 pb-0 text-black text-balance">
        <div
          data-aos="fade-up"
          className="relative flex flex-row lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-sans uppercase text-2xl font-bold text-pink tracking-wider">
              Pop-Up Hanami 2024
            </p>
            <p className="font-display-en uppercase text-black text-9xl text-nowrap">
              Sakura Cosplay Cafe
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="lg:w-2/3">
          <p className="font-sans font-medium text-lg">
            Come sit under our giant handcrafted sakura tree at our Sakura
            Cosplay Cafe, and be pampered by waiters in your favourite cosplays!
            Maybe they’ll even cast a love spell on your food~
          </p>
        </div>
        <div data-aos="fade-up" className="lg:w-2/3 my-12">
          <CafeFaq />
        </div>
        <motion.img
          src="/menu.jpeg"
          className="float rounded-xl z-0 w-1/2"
          initial={{ y: 500, rotateZ: 50 }}
          animate={{ y: 0, rotateZ: 0 }}
          transition={{
            duration: 2,
            bounce: 0.25,
            type: "spring",
            ease: "easeInOut",
          }}
        ></motion.img>
      </div>
    </main>
  );
}
