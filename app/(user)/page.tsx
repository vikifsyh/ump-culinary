import React from "react";
import Hero from "../component/Hero";
import BestSeller from "../component/BestSeller";
import Testimonial from "../component/Testimonial";
import Benefit from "../component/Benefit";
import Kedai from "../component/Kedai";

const { db } = require("@vercel/postgres");

const stalls = async (client: any) => {
  const getStalls = await client.sql`
    select * from stalls
  `;

  return getStalls;
};

export default async function Main() {
  const client = await db.connect();
  const data = await stalls(client);

  // console.log("DATA", data.rows);
  return (
    <>
      <Hero />
      <Kedai data={data.rows} />
      <Benefit />
      <BestSeller data={data.rows} />
      <Testimonial />
    </>
  );
}
