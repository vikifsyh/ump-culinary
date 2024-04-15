"use client";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import Link from "next/link";
import Logo from "@/public/img/ump-culinary.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavDashboard() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex justify-between p-5 md:px-10 items-center">
      <h1 className="font-bold text-baseBlack">Dashboard</h1>
      <div className="flex gap-2 items-center">
        <Link href={"/daftar"}>
          <button className="bg-primary text-white px-3 py-2 rounded-md flex items-center gap-1">
            Daftar
            <Icon name="profile" />
          </button>
        </Link>
        <div
          className="lg:hidden cursor pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="hamburger" />
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="bg-baseBlack/20 fixed h-screen inset-0 z-10"
            onClick={() => setMenuOpen(false)}
          ></div>
          <aside className="fixed inset-0 w-2/3 h-screen bg-white z-50">
            <div className="p-5">
              <div className="w-[50px] h-auto">
                <Link className="flex items-center" href={"/"}>
                  <Image alt="ump-culinary" src={Logo} />
                  <h1 className={`flex gap-1 font-bold text-lg`}>
                    <span className="text-primary">UMP</span>
                    <span className="text-secondary">CULINARY</span>
                  </h1>
                </Link>
              </div>
              <div className="mt-5 flex flex-col">
                <div className="">
                  <Link
                    href={"/dasboard"}
                    className={`px-10 py-3 rounded-md cursor-pointer text-lg  text-baseBlack font-semibold ${
                      pathname === "/dashboard" ? "bg-primary/10" : ""
                    }`}
                  >
                    Kelola Makanan
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 mx-4 mb-4">
                  <button className="w-full px-8 py-2 font-bold text-center text-white align-middle transition-all ease-in bg-red-500 border-0 rounded-lg shadow-md select-none hover:shadow-xs hover:-translate-y-px">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
