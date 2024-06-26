"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { myFontIntegral } from "../fonts";
import SignIn from "./Login/SignIn";
import { signOut, useSession } from "next-auth/react";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/public/img/ump-culinary.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isMenuOpen || isSearchVisible || isLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const closeMenuOnNavigation = () => {
      setMenuOpen(false);
    };

    document.addEventListener(
      "next_router:routeChangeStart",
      closeMenuOnNavigation
    );

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener(
        "next_router:routeChangeStart",
        closeMenuOnNavigation
      );
    };
  }, [isMenuOpen, isSearchVisible, isLogin]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const { data: session } = useSession();
  return (
    <nav
      className={`sticky bg-blur w-full px-5 py-4 lg:px-[100px] lg:py-5 flex justify-between items-center border-b border-[#CACACA] top-0 z-50`}
    >
      <Link href={"/"} className="hidden lg:flex items-center">
        <div className="w-[50px] h-auto">
          <Image width={50} height={50} alt="ump-culinary" src={Logo} />
        </div>
        {/* <h1 className={`flex gap-1 ${myFontIntegral.className} text-2xl`}>
          <span className="text-primary">UMP</span>{" "}
          <span className="text-secondary">CULINARY</span>
        </h1> */}
      </Link>

      <div className="lg:hidden flex justify-between items-center w-full">
        <div
          className="lg:hidden cursor pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="hamburger" />
        </div>
        <Link href={"/"} className="flex items-center">
          <div className="w-[50px] h-auto">
            <Image width={50} height={50} alt="ump-culinary" src={Logo} />
          </div>
          {/* <h1 className={`flex gap-1 ${myFontIntegral.className} text-2xl`}>
            <span className="text-primary">UMP</span>{" "}
            <span className="text-secondary">CULINARY</span>
          </h1> */}
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => {
            setSearchVisible(true);
          }}
        >
          <Icon name="search" />
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
                    <Image
                      alt="ump-culinary"
                      src={Logo}
                      width={50}
                      height={50}
                    />
                    <h1
                      className={`flex gap-1 ${myFontIntegral.className} text-xl`}
                    >
                      <span className="text-primary">UMP</span>
                      <span className="text-secondary">CULINARY</span>
                    </h1>
                  </Link>
                </div>
                <div className="mt-5 flex flex-col">
                  <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/"}
                      onClick={closeMenu}
                    >
                      Beranda
                    </Link>
                  </div>
                  <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/kuliner"}
                      onClick={closeMenu}
                    >
                      Kuliner
                    </Link>
                  </div>
                  {/* <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/kedai"}
                    >
                      Kedai
                    </Link>
                  </div> */}
                  <div className="px-10 py-3 hover:bg-primary/10 rounded-md cursor-pointer">
                    <Link
                      className="text-lg -ml-5 text-baseBlack  font-semibold"
                      href={"/about"}
                      onClick={closeMenu}
                    >
                      Tentang Kami
                    </Link>
                  </div>
                  {session?.user ? (
                    <Link
                      href={"/"}
                      className="flex items-center gap-2 sm:gap-4"
                    >
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={session?.user?.image || ""} />
                        <AvatarFallback>
                          {session?.user?.name
                            ?.split(" ")
                            .map((n: any) => n[0])}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-base text-slate-900 font-semibold">
                          {session?.user?.name}
                        </span>
                        <span className="mt-0.5 text-gray">
                          {session?.user?.email}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="mt-5">
                      <button
                        className="ease-in duration-200 rounded-lg p-2 w-full text-white bg-primary hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50"
                        onClick={() => setIsLogin(true)}
                      >
                        Masuk
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </>
        )}
      </div>

      {/* desktop version menu */}
      <ul className="hidden lg:flex lg:gap-10">
        <Link href={"/"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/" ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            Beranda
          </div>
        </Link>
        <Link href={"/kuliner"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/kuliner"
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            Kuliner
          </div>
        </Link>
        {/* <Link href={"/kedai"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/kedai"
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            Kedai
          </div>
        </Link> */}
        <Link href={"/about"}>
          <div
            className={`font-medium text-base lg:text-lg ease-in duration-200 hover:text-primary hover:border-b-2 hover:border-primary ${
              pathname === "/about"
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            Tentang Kami
          </div>
        </Link>
      </ul>

      <div className="items-center gap-9 flex">
        <div className="hidden lg:flex relative w-full">
          <div className="absolute inset-y-0 right-0 flex items-center w-7 h-7 rounded-full m-auto justify-center mr-3 cursor-pointer hover:bg-gray_3 transition-all duration-300 ease-in-out">
            <Icon name="search" />
          </div>

          <input
            type="text"
            placeholder="Cari makanan"
            className="p-2 pl-8 pr-16 rounded-full border border-gray w-full outline outline-1 active:outline-gray focus:outline-gray focus:ring-0 focus:border-gray-300 transition-all duration-300 ease-in-out hover:ring-0 hover:border-gray-300 text-gray"
          />
        </div>
        {session?.user ? (
          <div
            onClick={() => signOut()}
            className="hidden lg:flex items-center gap-2"
          >
            <Avatar className="">
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                {session?.user?.name?.split(" ").map((n: any) => n[0])}
              </AvatarFallback>
            </Avatar>
            <span className="text-base text-slate-900 font-semibold">
              {session?.user?.name?.split(" ").map((n: any) => n)[0]}
            </span>
          </div>
        ) : (
          <button
            className="hidden lg:flex px-4 p-3 rounded-lg border ease-in duration-300  bg-primary hover:bg-primary/50 text-baseWhite"
            onClick={() => setIsLogin(true)}
          >
            Masuk
          </button>
        )}
      </div>

      {isSearchVisible && (
        <>
          <div className="fixed bg-baseWhite top-0 right-0 left-0 h-full md:h-40 z-50 px-5">
            <div className="py-5 flex items-center gap-4">
              <div className="w-[50px] h-auto">
                <Image alt="ump-culinary" src={Logo} width={50} height={50} />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Cari makanan"
                  className="p-2 pl-12 rounded-full border border-grey w-full outline-none active:outline-grey focus:outline-gray focus:ring-0 focus:border-gray-300 transition-all duration-300 ease-in-out hover:ring-0 hover:border-gray-300 text-grey"
                  autoFocus
                />
                <div className="absolute inset-y-0 flex items-center w-7 h-7 rounded-full m-auto justify-center ml-3 cursor-pointer hover:bg-gray_3 transition-all duration-300 ease-in-out">
                  <Icon name="search" />
                </div>
              </div>
              <div
                className="w-8 h-auto bg-white outline outline-1 hover:bg-baseBlack/50 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
                onClick={() => setSearchVisible(false)}
              >
                <Icon name="close" width={24} height={24} />
              </div>
            </div>
          </div>
        </>
      )}

      {isLogin && <SignIn setIsLogin={setIsLogin} />}
    </nav>
  );
}
