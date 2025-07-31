"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Slide data: image + heading + description
const slides = [
  {
    image: "/assets/images/banner/1.jpg",
    heading: "Drive With Confidence After Every Service",
    description:
      "Experience peace of mind knowing your car is in expert hands. We provide thorough inspections and high-quality repairs, so you can enjoy the road worry-free.",
  },
  {
    image: "/assets/images/banner/2.jpg",
    heading: "Your Trusted Partner in Car Maintenance",
    description:
      "Whether it’s a routine oil change or complex engine work, we’re committed to delivering honest, efficient, and affordable service for every vehicle.",
  },
  {
    image: "/assets/images/banner/3.jpg",
    heading: "Fast, Friendly & Professional Car Care",
    description:
      "We value your time. Our skilled technicians ensure quick turnaround without compromising on service quality—because your time and safety matter.",
  },
  {
    image: "/assets/images/banner/4.jpg",
    heading: "Advanced Diagnostics, Accurate Solutions",
    description:
      "With state-of-the-art diagnostic tools and certified mechanics, we identify and fix issues the right way—saving you time, money, and future repairs.",
  },
  {
    image: "/assets/images/banner/5.jpg",
    heading: "We Service. You Smile.",
    description:
      "From tune-ups to full overhauls, we treat every vehicle like our own. Enjoy personalized service and satisfaction, guaranteed with every visit.",
  },
  {
    image: "/assets/images/banner/6.jpg",
    heading: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form.",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[current];

  return (
    <div className="mx-6 md:mx-24 py-10">
      <section className="relative mx-auto w-full max-w-[1140px] h-[600px] rounded-xl overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentSlide.image}
                alt="Car Service"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-white text-3xl md:text-5xl font-bold leading-snug"
                >
                  {currentSlide.heading}
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-gray-200 mt-4 max-w-xl"
                >
                  {currentSlide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mt-6 flex items-center gap-4"
                >
                  <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
                    Discover More
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                    Latest Project
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute bottom-6 right-6 flex gap-3 z-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 flex items-center justify-center"
            >
              <FaArrowLeft className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
