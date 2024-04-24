import React from "react";
import Image from "next/image";
import Icon from "../Icon/Icon";

interface Stall {
  stall: string;
  location: string;
  img: string;
}

interface KedaiProps {
  data: Stall[];
}

export default function Kedai({ data }: KedaiProps) {
  return (
    <div className="mx-5 lg:mx-[100px] my-[72px]">
      <h1 className="font-semibold text-lg text-baseBlack lg:text-2xl">
        Jelajahi Ragam Makanan Di Rekomendasi Kedai Terdekat
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 mt-6 lg:mt-10">
        {data.map((kedai: Stall, index: number) => (
          <div
            key={index}
            className="border border-borderDefault bg-white rounded-[4px]"
          >
            <Image
              alt={kedai.stall}
              src={kedai.img}
              width={1000}
              height={1000}
              className="w-full object-cover mb-4 rounded-t-[4px]"
              style={{ height: 300 }}
            />
            <div className="mt-3 px-3 py-2">
              <h1 className="text-baseBlack text-base lg:text-2xl font-semibold">
                {kedai.stall}
              </h1>
              <div className="mt-3 flex justify-between items-center ">
                <div className="flex items-center">
                  <Icon name="location" />
                  <p className="text-xs md:text-sm text-primary">
                    {kedai.location}
                  </p>
                </div>
                <div className="flex items-center px-2 py-2 bg-primary/40 rounded-md">
                  <Icon name="rate" />
                  <p className="font-bold text-primary">5.0</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
