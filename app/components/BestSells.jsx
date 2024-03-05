"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card.jsx";
import { testimonials } from "./data.js";
import Link from "next/link.js";
import Image from "next/image.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const BestSells = ({ bestSells }) => {
  return (
    <motion.div>
      <div className="text-center font-bold text-2xl md:text-4xl text-gray-700 mt-8">
        Trending Products
      </div>
      <Carousel
        // customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {bestSells &&
          bestSells.map((product, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="slider"
                key={index}
              >
                <div key={product._id} className="group relative">
                  <Link href={`/product/${product.slug}`}>
                    <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                      <Image
                        src={product.imageUrl}
                        alt="Product image"
                        className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.categoryName}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                </div>
                {/* <Card name={testimomil.name} content={testimomil.content} /> */}
              </motion.div>
            );
          })}
      </Carousel>
    </motion.div>
  );
};
export default BestSells;
