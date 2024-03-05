import Image from "next/image";
import React from "react";

import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import HeroText from "./HeroText";
import Loader from "./Loader";
import Testimonies from "./Testimonies";

// let loader = false;
async function getData() {
  // loader = true;
  const query = "*[_type=='heroImage'][0]";
  const data = await client.fetch(query);
  // loader = false;
  return data;
}
async function getTestimonials() {
  const query = `*[_type=='testimonials'] | order(_createdAt desc){
    _id
      ,name,
      comment,
      // "profile":author_image
 "profileImg": author_image.asset->url
  }
`;
  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  const testi = await getTestimonials();

  return (
    <>
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        {/* {loader && <Loader />} */}
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
            <HeroText />
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              We sell only the most exclusive and high quality product for you.
              we are the best so come and shop with us.
            </p>
          </div>
          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <Image
                src={urlFor(data.image2).url()}
                priority
                alt="Greate Image"
                className="h-full w-full object-cover object-center"
                width={500}
                height={500}
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                src={urlFor(data.image1).url()}
                priority
                alt="Greate Image"
                className="h-full w-full object-cover object-center"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row mb-6">
          <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <Link
              href="/Men"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {" "}
              Men
            </Link>
            <Link
              href="/Women"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {" "}
              Women
            </Link>
            <Link
              href="/Teens"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {" "}
              Teens
            </Link>
          </div>
        </div>
      </section>
      <Testimonies testi={testi} />
    </>
  );
}
