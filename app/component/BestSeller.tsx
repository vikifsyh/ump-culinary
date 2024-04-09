import React from "react";
import { product } from "../libs/product";
import Image from "next/image";

export default function BestSeller() {
  return (
    <div className="my-16 lg:mx-[100px] mx-5">
      <h1 className="font-semibold lg:text-2xl text-lg text-baseBlack">
        Rekomendasi Makanan
      </h1>
      <div className="grid grid-cols-2 mt-6 md:grid md:grid-cols-4 gap-3 md:gap-5 lg:gap-10 lg:mt-10">
        {product.map((item, index) => (
          <div
            key={index}
            className="border border-borderDefault bg-white rounded-[4px] hover:shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full max-h-40 mb-4 rounded-t-[4px]"
            />
            <div className="py-2 px-2 lg:px-3">
              <p className="text-base lg:text-xl text-baseBlack">
                {item.title}
              </p>
              <p className="text-xs lg:text-sm text-greyHero">{item.stall}</p>
              <div className="flex justify-between items-center mt-[6px] md:mt-4">
                <p className="text-sm lg:text-xl text-primary">
                  <span className="text-[10px] md:text-sm">Rp.</span>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <p className="text-[10px] md:text-xs text-greySale">
                  {item.sold}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
