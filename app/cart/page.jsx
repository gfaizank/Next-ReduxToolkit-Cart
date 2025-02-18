"use client";
import CartProduct from "@/components/CartProduct";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);
  console.log(cartItems);
  return (
    <div className="px-20 py-16">
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {cartItems.map((item, i) => {
              return <CartProduct key={i} cartItem={item} />;
            })}
          </div>
        </div>
        <div className="col-span-4 sm:block bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden p-5 dark:text-slate-100 font-bold">
          <h2 className="text-2xl pb-3">Cart total</h2>
          <div className="flex items-center justify-between border-b border-slate-500 pb-6">
            <span>Subtotal </span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex items-center justify-between pb-4 mt-2">
            <span>Tax </span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between pb-4">
            <span>Shipping </span>
            <span>$10</span>
          </div>
          <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
            We only charge for shipping when you have over 2kg items
          </p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Total </span>
            <span>${totalPrice+10}</span>
          </div>
          <Link
            href="#"
            className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal"
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
