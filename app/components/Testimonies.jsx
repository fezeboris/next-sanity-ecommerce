"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Testimonies = ({ testi }) => {
  return (
    <div className="slider-container  ">
      <div className="text-center font-bold mt-10 text-2xl md:text-4xl text-gray-700 pb-4 ">
        What People Says About Us
      </div>
      <div className="slide-track">
        {testi.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            key={idx}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="slide"
          >
            <div className="w-[250px] relative p-3 md:w-[270px] h-[180px] flex justify-center items-center rounded-2xl ">
              <div className=" w-1/4 ">
                <div
                  className=""
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={item.profileImg}
                    alt="profile_image"
                    className="rounded-full  "
                    style={{
                      borderRadius: "50%",
                      height: "45px",
                      width: "45px",
                    }}
                  />
                </div>
              </div>
              <div
                className="text-[.7rem] slide_text w-3/4 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                <div className="  font-bold italic">{item.name}</div>
                {item.comment}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
