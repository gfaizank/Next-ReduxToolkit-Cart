"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";


export default function ProductList({ products }) {
  return (
    <div className=" flex flex-wrap gap-5">
      {products.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </div>
  );
}
