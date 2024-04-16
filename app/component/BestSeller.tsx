"use client";
import React, { useState } from "react";
import { product } from "../libs/product";
import Image from "next/image";
import Link from "next/link";

export default function BestSeller() {
  const allFoods = product.flatMap((item) => item.makanan);

  const handleBeliClick = (nomor: any) => {
    window.location.href = `https://wa.me/${nomor}`;
  };

  const randomFoods = allFoods.sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className="my-16 lg:mx-[100px] mx-5">
      <h1 className="font-semibold lg:text-2xl text-lg text-baseBlack">
        Rekomendasi Makanan
      </h1>
      <div className="grid grid-cols-2 mt-6 md:grid md:grid-cols-4 gap-3 md:gap-5 lg:gap-10 lg:mt-10">
        {randomFoods.map((food, index) => {
          // Menemukan penjual yang sesuai dengan makanan yang sedang diiterasi
          const seller = product.find((seller) =>
            seller.makanan.some((item) => item.id === food.id)
          );

          return (
            <div
              key={index}
              className="border border-borderDefault bg-white rounded-[4px]"
            >
              <Image
                src={food.image}
                alt={food.name}
                width={1000}
                height={1000}
                className="w-full object-cover mb-4 rounded-t-[4px]"
                style={{ height: 200 }}
              />
              <div className="py-2 px-2 lg:px-3">
                <p className="text-sm lg:text-xl text-baseBlack">{food.name}</p>
                {/* Menggunakan properti 'stall' dari objek penjual yang sesuai */}
                <p className="text-xs lg:text-sm text-greyHero">
                  {seller && seller.stall}
                </p>
                <div className=" items-center mt-[6px] md:mt-4">
                  <p className="text-sm lg:text-xl text-primary">
                    <span className="text-[10px] md:text-sm">Rp.</span>
                    {food.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>

                  <button
                    onClick={() => handleBeliClick(seller && seller.nomor)}
                    className="mt-2 md:mt-4 px-3 p-2 bg-primary text-baseWhite text-sm rounded-md w-full hover:scale-105"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
