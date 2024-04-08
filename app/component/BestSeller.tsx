import React from "react";
import { product } from "../libs/product";
import Image from "next/image";

export default function BestSeller() {
  return (
    <div className="lg:mt-14 lg:mb-16 lg:mx-[100px] mx-5 m-10">
      <h1 className="font-semibold lg:text-[40px] text-xl text-baseBlack flex justify-center">
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
              width={280}
              height={300}
              className="w-full mb-4 rounded-t-[4px]"
            />
            <div className="py-2 px-2 lg:px-3">
              <p className="text-base lg:text-xl text-baseBlack">
                {item.title}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm lg:text-xl text-primary">
                  <span className="text-[10px]">Rp.</span>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <p className="text-[10px] text-greySale">{item.sold}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
