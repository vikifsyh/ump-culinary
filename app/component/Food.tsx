"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "../Icon/Icon";

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

interface FoodProps {
  data: FoodCategory[];
}

export default function Food({ data }: FoodProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .flatMap((category) => category.makanan)
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    data.flatMap((category) => category.makanan).length / itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBeliClick = (nomor: string) => {
    window.location.href = `https://wa.me/${nomor}`;
  };

  return (
    <div className="lg:mx-[100px] lg:my-14 m-5">
      <h1 className="lg:text-2xl text-lg font-semibold text-baseBlack">
        Sajian Kuliner
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mt-5 lg:mt-10">
        {currentItems.map((food) => (
          <div key={food.id} className="bg-white shadow-lg rounded-[4px]">
            <Image
              src={food.image}
              alt={food.name}
              width={1000}
              height={1000}
              className="w-full object-cover rounded-t-[4px]"
              style={{ height: 300 }}
            />
            <div className="mt-4 p-2 lg:p-4">
              <h2 className="text-sm lg:text-xl text-baseBlack">{food.name}</h2>
              <p className="text-sm lg:text-xl text-primary">
                <span className="text-[10px] md:text-sm">Rp.</span>
                {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <button
                onClick={() =>
                  handleBeliClick(
                    data.find((cat) =>
                      cat.makanan.some((food) => food.id === food.id)
                    )?.nomor || ""
                  )
                }
                className="mt-2 md:mt-4 px-3 p-2 bg-primary text-baseWhite text-sm rounded-md w-full hover:scale-105"
              >
                Pesan
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-3 mr-2 bg-gray-200 text-sm rounded-md"
        >
          <Icon name="prev" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`p-4 mr-2 bg-gray text-sm rounded-md ${
              currentPage === index + 1 ? "bg-primary text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-3 bg-gray-200 text-sm rounded-md"
        >
          <Icon name="next" />
        </button>
      </div>
    </div>
  );
}
