import React from "react";
import NavDashboard from "./NavDashboard";
import Image from "next/image";

import ButtonDelete from "./ButtonDelete";
import ButtonUpdate from "./ButtonUpdate";
import ButtonInsert from "./ButtonInsert";
import { stalls } from "../libs/product";

export default function TableAdmin() {
  // Filter product data for a specific store
  const stallData = stalls.find(
    (item: any) => item.stall === "Pentol Pak Bambang"
  );

  return (
    <div className="bg-white rounded-2xl min-h-[95vh]">
      <div className="hidden md:block">
        <NavDashboard />
      </div>
      <ButtonInsert />
      <div className="w-full p-5 lg:px-10 mx-auto">
        <div className="flex-auto pb-2">
          <div className="overflow-x-auto">
            <table className="border-collapse w-full mb-0 align-top text-baseBlack">
              <thead className="align-bottom border-y">
                <tr>
                  <th className="px-6 py-3 font-bold text-left align-middle border-b  border-b-solid tracking-none whitespace-nowrap text-baseBlack">
                    Nomor
                  </th>
                  <th className="px-6 py-3 font-bold text-left align-middle border-b  border-b-solid tracking-none whitespace-nowrap text-baseBlack">
                    Makanan
                  </th>
                  <th className="px-6 py-3 font-bold text-left align-middle border-b  border-b-solid tracking-none whitespace-nowrap text-baseBlack">
                    Harga
                  </th>
                  <th className="px-6 py-3 font-bold text-left align-middle border-b  border-b-solid tracking-none whitespace-nowrap text-baseBlack">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {stallData &&
                  stallData.makanan.map((item: any) => (
                    <tr key={item.id}>
                      <td className="p-5 align-middle whitespace-nowrap border-b">
                        {item.id}
                      </td>
                      <td className="p-5 align-middle whitespace-nowrap border-b">
                        <div className="flex gap-2 items-center">
                          <Image
                            alt={item.name}
                            src={item.image}
                            width={36}
                            height={36}
                            className="rounded-full h-9 w-9"
                          />
                          <h6>{item.name}</h6>
                        </div>
                      </td>
                      <td className="p-5 align-middle whitespace-nowrap border-b">
                        <span className="text-[10px] md:text-sm">Rp.</span>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </td>
                      <td className="p-5 align-middle whitespace-nowrap border-b gap-2 flex">
                        <ButtonUpdate />
                        <ButtonDelete />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
