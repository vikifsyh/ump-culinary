"use client";

import React from "react";
import Link from "next/link";
import Icon from "@/app/Icon/Icon";

const SignIn = ({ setIsLogin }: any) => {
  return (
    <section className="fixed z-50 inset-0 transparent-bg overflow-hidden h-screen ">
      <div className="h-screen w-full items-center flex md:max-w-xl lg:h-fit bg-white shadow-lg py-11 px-5 m-auto lg:mt-[100px]">
        <div
          className="absolute top-0 right-0 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsLogin(false);
          }}
        >
          <Icon name="close" width={50} height={50} />
        </div>
        <div>
          <div className="text-lg md:text-2xl text-dark font-bold text-center flex mb-14 mx-auto justify-center gap-2">
            <span>Selamat Datang di</span>
            <div>
              <span className="text-primary">UMP</span>
              <span className="text-secondary"> Culinary</span>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center gap-3 mx-8 md:mx-20">
            <button className="w-full rounded-full p-2 border border-dark relative focus:outline-none focus:ring-2 focus:ring-gray focus:ring-opacity-50">
              <div className="absolute left-3">
                <Icon name="google" />
              </div>
              <span className="ml-2 font-normal text-base">
                Masuk dengan Google
              </span>
            </button>
          </div>

          <div className="text-center flex flex-col mt-20">
            <span className="text-sm text-gray">
              Lupa email atau mengalami kesulitan saat masuk?
              <Link href={"/"} className="underline">
                {" "}
                Dapatkan bantuan.
              </Link>
            </span>
            <span className="pt-8 text-sm text-gray">
              Klik &ldquo;Masuk&ldquo; untuk menyetujui
              <Link href={"/"} className="underline">
                {" "}
                Ketentuan Layanan{" "}
              </Link>
              UMP Culinary dan mengakui bahwa
              <Link href={"/"} className="underline">
                {" "}
                Kebijakan Privasi{" "}
              </Link>
              UMP Culinary berlaku untuk Anda.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
