"use client";
import React from "react";
import Image from "next/image";

interface FoodItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface FoodCategory {
  nomor: string;
  makanan: FoodItem[];
  stall: string; // Add stall property to FoodCategory
}

interface BestSellerProps {
  data: FoodCategory[];
}

export default function BestSeller({ data }: BestSellerProps) {
  const handleBeliClick = (nomor: string) => {
    window.location.href = `https://wa.me/${nomor}`;
  };

  // Fungsi untuk melakukan shuffle pada array
  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;
    const shuffledArray = [...array];

    // Selama masih ada elemen untuk di-shuffle
    while (currentIndex !== 0) {
      // Pilih elemen tersisa yang belum di-shuffle
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Tukar elemen yang dipilih dengan elemen saat ini
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    }

    return shuffledArray;
  }

  return (
    <div className="my-16 lg:mx-[100px] mx-5">
      <h1 className="font-semibold lg:text-2xl text-lg text-baseBlack">
        Rekomendasi Makanan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 mt-6 lg:mt-10">
        {data.map((category: FoodCategory, index: number) => {
          // Mengacak makanan di setiap kategori
          const shuffledFoods = shuffle(category.makanan);
          // Memilih satu makanan secara acak dari kategori yang sudah diacak
          const randomFood =
            shuffledFoods[Math.floor(Math.random() * shuffledFoods.length)];

          return (
            <div
              key={index}
              className="border border-borderDefault bg-white rounded-[4px]"
            >
              <div className="flex flex-col">
                <div key={randomFood.id} className="flex flex-col">
                  <Image
                    src={randomFood.image}
                    alt={randomFood.name}
                    width={1000}
                    height={1000}
                    className="w-full object-cover mb-4 rounded-t-[4px]"
                    style={{ height: 200 }}
                  />
                  <div className="py-2 px-2 lg:px-3">
                    <p className="text-sm lg:text-xl text-baseBlack">
                      {randomFood.name}
                    </p>
                    <p className="text-xs lg:text-sm text-greyHero">
                      {category.stall} {/* Display stall information */}
                    </p>
                    <div className=" items-center mt-[6px] md:mt-4">
                      <p className="text-sm lg:text-xl text-primary">
                        <span className="text-[10px] md:text-sm">Rp.</span>
                        {randomFood.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                      <button
                        onClick={() => handleBeliClick(category.nomor)}
                        className="mt-2 md:mt-4 px-3 p-2 bg-primary text-baseWhite text-sm rounded-md w-full hover:scale-105"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
