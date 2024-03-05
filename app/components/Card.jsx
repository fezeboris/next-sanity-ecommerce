import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ name, content }) => {
  return (
    <div>
      {/* <div className="card_slide !text-black bg-gray-100">
        <div className="card__title">{name}</div>
        <div className="card__content">{content}</div>
      </div> */}

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
              <h3 className="text-sm text-gray-700">{product.name}</h3>
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
    </div>
  );
};

export default Card;
