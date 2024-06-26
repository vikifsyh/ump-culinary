import Food from "@/app/component/Food";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kuliner | Platfrom UMKM Lokal",
  description: "Generated by create next app",
};

const { db } = require("@vercel/postgres");

const stalls = async (client: any) => {
  const getStalls = await client.sql`
    select * from stalls
  `;

  return getStalls;
};
export default async function page() {
  const client = await db.connect();
  const data = await stalls(client);
  return (
    <>
      <Food data={data.rows} />
    </>
  );
}
