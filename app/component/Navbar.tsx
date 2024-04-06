"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`sticky w-full bg-baseWhite px-[100px] py-5 flex justify-between items-center border-b border-[#CACACA] top-0 z-50 ${
        isOpen ? "bg-white" : "bg-blur"
      }`}
    >
      <h1 className="text-[32px] text-primary font-bold">LOGO</h1>
      <ul className="flex gap-14">
        <Link href={"/"}>
          <div
            className={`font-medium text-lg hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/" ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            Beranda
          </div>
        </Link>
        <Link href={"/produk"}>
          <div
            className={`font-medium text-lg hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/produk"
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            Produk
          </div>
        </Link>
        <Link href={"/tentangkami"}>
          <div
            className={`font-medium text-lg hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/tentangkami"
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            Tentang Kami
          </div>
        </Link>
      </ul>
      <div className="flex items-center gap-14">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Cari produk"
            className="p-2 pl-8 pr-16 rounded-full border border-gray w-full outline-none active:outline-gray focus:outline-gray focus:ring-0 focus:border-gray-300 transition-all duration-300 ease-in-out hover:ring-0 hover:border-gray-300 text-gray"
          />
          <div className="absolute inset-y-0 right-0 flex items-center w-7 h-7 rounded-full m-auto justify-center mr-3 cursor-pointer hover:bg-gray_3 transition-all duration-300 ease-in-out">
            <Icon name="search" />
          </div>
        </div>
        <button className="px-6 p-4 rounded-2xl border border-primary hover:bg-primary hover:text-baseWhite text-baseBlack">
          Masuk
        </button>
      </div>
    </nav>
  );
}
