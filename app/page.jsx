import CartLength from "@/components/CartLength";
import ProductList from "@/components/ProductList";
import { getData } from "@/data/getData";
import Link from "next/link";
const HomePage = async () => {
  const products = (await getData("https://fakestoreapi.com/products?limit=10")) ?? [];
  return (
    <div className=" px-20 py-16">
      <h2 className="text-4xl font-bold p-4 flex justify-center text-blue-600">Befog shopping cart</h2>
      <div className="bg-white border border-gray-300 rounded-lg  white:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
        <div className="bg-slate-100 white:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
          <h2 className=" text-black">Products</h2>
          <Link
            className="bg-orange-700 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
            href="/cart"
          >
            View Cart (<CartLength />)
          </Link>
        </div>
        <div className="bg-white white:bg-slate-700 p-4">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
