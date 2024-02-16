"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NavBar } from "@/components/navbar";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 40);
  return (
    <>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-24 text-black text-balance">
        {/* <motion.div
          id="logo"
          className="mt-8 w-full md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="logo.png" />
        </motion.div> */}

        <div
          ref={ref}
          className="relative flex flex-row lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-sans uppercase text-2xl font-bold text-pink tracking-wider">
              ubc anime club presents
            </p>
            <p className="font-display-en uppercase text-9xl">
              <span className="text-pink">Pop-Up</span> Hanami
            </p>
            <div className="font-mono font-bold text-3xl md:text-4xl uppercase mb-5 text-nowrap">
              <p>Saturday, March 23rd</p>
              <p>11:30 AM - 7:00 PM</p>
            </div>
            <p className="font-sans w-full lg:w-2/5 font-medium text-lg">
              A one-day, cherry-blossom-themed event at the University of
              British Columbia, featuring a cosplay cafe, an artist alley, stage
              performances, games & raffles, and more.
            </p>
            <div className="flex flex-col md:flex-row gap-8 my-10 justify-items-stretch">
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="font-sans uppercase font-bold text-lg text-white tracking-wider bg-pink py-4 px-10 inline-flex items-center gap-x-2 rounded-full border-none"
              >
                <a href="#features">Learn More</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="font-sans uppercase font-bold text-lg tracking-wider border-2 bg-white border-black py-4 px-10 inline-flex items-center gap-x-2 rounded-full"
              >
                <a href="https://u.ubcani.com/hanami" target="_blank">
                  Buy Tickets NOW!
                </a>
              </motion.button>
            </div>
          </div>
          <motion.img
            style={{ y }}
            className="hidden absolute z-0 lg:block -right-10 -top-20 w-2/3"
            src="/graphic.png"
          />
        </div>
      </div>
      <div id="features" className="z-50 pt-20 px-20 lg:p-40">
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-2 gap-10 text-black"
        >
          <Card
            title={"Sakura Cosplay Cafe"}
            description={
              "Cosplay waiters serve you sweet treats under the sakura tree!"
            }
            link={"/cafe"}
            imgsrc={"/cosplay cafe.png"}
          />
          <Card
            title={"Artist & Vendor Alley"}
            description={
              "Featuring never before seen merch from the hidden talents of UBCAni artists."
            }
            link={"#"}
            imgsrc={"/artist alley.png"}
          />
          <Card
            title={"Stage Performances"}
            description={
              "DJ sets, dance performances, idol groups, non-stop J-Pop, J-Rock, and anime OPs for the whole day."
            }
            link={"#"}
            imgsrc={"/stage performances.png"}
          />
          <Card
            title={"Games & Raffles"}
            description={
              "Earn tickets at our Hanami-inspired games to cash in at our raffles."
            }
            link={"#"}
            imgsrc={"/games.png"}
          />
        </div>
      </div>
      <div data-aos="fade-up">
        <Faq />
      </div>
    </>
  );
}
