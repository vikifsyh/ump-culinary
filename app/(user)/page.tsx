import React from "react";
import Hero from "../component/Hero";
import BestSeller from "../component/BestSeller";
import Testimonial from "../component/Testimonial";
import Benefit from "../component/Benefit";

export default function Main() {
  return (
    <>
      <Hero />
      <Benefit />
      <BestSeller />
      <Testimonial />
    </>
  );
}
